import { useRef, useState, useCallback, useEffect } from "react";
import { nodes, edges, typeColors, GraphNode, NodeType } from "@/data/conceptMap";
import { useTranslation } from "react-i18next";

interface SimNode extends GraphNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  fx?: number;
  fy?: number;
}

const NODE_RADIUS: Record<NodeType, number> = {
  conceito: 28,
  autor: 22,
  campo: 32,
};

const ConceptGraph = () => {
  const { t } = useTranslation();
  const svgRef = useRef<SVGSVGElement>(null);
  const animRef = useRef<number>(0);
  const [simNodes, setSimNodes] = useState<SimNode[]>([]);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [dragNode, setDragNode] = useState<string | null>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0, scale: 1 });
  const nodesRef = useRef<SimNode[]>([]);

  // Initialize positions
  useEffect(() => {
    const w = 900, h = 650;
    const campos = nodes.filter(n => n.type === "campo");
    const autores = nodes.filter(n => n.type === "autor");
    const conceitos = nodes.filter(n => n.type === "conceito");
    const placeRing = (arr: typeof nodes, radiusFactor: number) =>
      arr.map((n, i) => {
        const angle = (i / arr.length) * Math.PI * 2 - Math.PI / 2;
        const r = (Math.min(w, h) / 2) * radiusFactor;
        return { ...n, x: w / 2 + Math.cos(angle) * r, y: h / 2 + Math.sin(angle) * r, vx: 0, vy: 0 };
      });
    const initial: SimNode[] = [
      ...placeRing(campos, 0.75),
      ...placeRing(autores, 0.45),
      ...placeRing(conceitos, 0.2),
    ];
    nodesRef.current = initial;
    setSimNodes([...initial]);
    startSimulation();
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  const startSimulation = useCallback(() => {
    let iterations = 0;
    const maxIterations = 500;

    const tick = () => {
      if (iterations >= maxIterations) return;
      const ns = nodesRef.current;
      const alpha = 1 - iterations / maxIterations;

      // Repulsion
      for (let i = 0; i < ns.length; i++) {
        for (let j = i + 1; j < ns.length; j++) {
          const dx = ns[j].x - ns[i].x;
          const dy = ns[j].y - ns[i].y;
          const dist = Math.max(Math.sqrt(dx * dx + dy * dy), 1);
          const force = (2500 * alpha) / (dist * dist);
          const fx = (dx / dist) * force;
          const fy = (dy / dist) * force;
          ns[i].vx -= fx;
          ns[i].vy -= fy;
          ns[j].vx += fx;
          ns[j].vy += fy;
        }
      }

      // Attraction (edges)
      for (const edge of edges) {
        const s = ns.find((n) => n.id === edge.source);
        const t = ns.find((n) => n.id === edge.target);
        if (!s || !t) continue;
        const dx = t.x - s.x;
        const dy = t.y - s.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const force = (dist - 180) * 0.005 * alpha;
        const fx = (dx / Math.max(dist, 1)) * force;
        const fy = (dy / Math.max(dist, 1)) * force;
        s.vx += fx;
        s.vy += fy;
        t.vx -= fx;
        t.vy -= fy;
      }

      // Center gravity
      for (const n of ns) {
        n.vx += (450 - n.x) * 0.0005 * alpha;
        n.vy += (325 - n.y) * 0.0005 * alpha;
      }

      // Apply velocities
      for (const n of ns) {
        if (n.fx !== undefined) { n.x = n.fx; n.vx = 0; }
        else { n.vx *= 0.85; n.x += n.vx; }
        if (n.fy !== undefined) { n.y = n.fy; n.vy = 0; }
        else { n.vy *= 0.85; n.y += n.vy; }
        n.x = Math.max(50, Math.min(850, n.x));
        n.y = Math.max(50, Math.min(600, n.y));
      }

      iterations++;
      setSimNodes([...ns]);
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
  }, []);

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.9 : 1.1;
    setTransform((t) => ({
      ...t,
      scale: Math.max(0.3, Math.min(3, t.scale * delta)),
    }));
  }, []);

  const handleMouseDown = useCallback((id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setDragNode(id);
    const node = nodesRef.current.find((n) => n.id === id);
    if (node) { node.fx = node.x; node.fy = node.y; }
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!dragNode || !svgRef.current) return;
    const svg = svgRef.current;
    const rect = svg.getBoundingClientRect();
    const x = (e.clientX - rect.left - transform.x) / transform.scale;
    const y = (e.clientY - rect.top - transform.y) / transform.scale;
    const node = nodesRef.current.find((n) => n.id === dragNode);
    if (node) {
      node.fx = x; node.fy = y;
      node.x = x; node.y = y;
      setSimNodes([...nodesRef.current]);
    }
  }, [dragNode, transform]);

  const handleMouseUp = useCallback(() => {
    if (dragNode) {
      const node = nodesRef.current.find((n) => n.id === dragNode);
      if (node) { delete node.fx; delete node.fy; }
      setDragNode(null);
    }
  }, [dragNode]);

  const handlePanStart = useRef<{ x: number; y: number; tx: number; ty: number } | null>(null);

  const handleBgMouseDown = useCallback((e: React.MouseEvent) => {
    if ((e.target as SVGElement).tagName === "svg" || (e.target as SVGElement).tagName === "rect") {
      handlePanStart.current = { x: e.clientX, y: e.clientY, tx: transform.x, ty: transform.y };
    }
  }, [transform]);

  const handleBgMouseMove = useCallback((e: React.MouseEvent) => {
    if (handlePanStart.current && !dragNode) {
      const dx = e.clientX - handlePanStart.current.x;
      const dy = e.clientY - handlePanStart.current.y;
      setTransform((t) => ({ ...t, x: handlePanStart.current!.tx + dx, y: handlePanStart.current!.ty + dy }));
    }
  }, [dragNode]);

  const handleBgMouseUp = useCallback(() => {
    handlePanStart.current = null;
  }, []);

  const nodeMap = new Map(simNodes.map((n) => [n.id, n]));

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] border border-border rounded-lg bg-card/30 overflow-hidden">
      {/* Legenda */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 bg-background/80 backdrop-blur-sm rounded-md p-3 border border-border">
        {(Object.keys(typeLabels) as NodeType[]).map((type) => (
          <div key={type} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: typeColors[type] }} />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {typeLabels[type]}
            </span>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {hoveredNode && (() => {
        const node = nodeMap.get(hoveredNode);
        if (!node) return null;
        const screenX = node.x * transform.scale + transform.x;
        const screenY = node.y * transform.scale + transform.y;
        return (
          <div
            className="absolute z-20 max-w-xs bg-popover border border-border rounded-md p-3 shadow-lg pointer-events-none"
            style={{
              left: Math.min(screenX + 20, window.innerWidth - 300),
              top: screenY - 10,
            }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: typeColors[node.type] }}>
              {typeLabels[node.type]}
            </p>
            <p className="text-sm font-semibold text-foreground mb-1">{node.label}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{node.description}</p>
          </div>
        );
      })()}

      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 900 650"
        className="cursor-grab active:cursor-grabbing"
        onWheel={handleWheel}
        onMouseDown={(e) => { handleBgMouseDown(e); }}
        onMouseMove={(e) => { handleMouseMove(e); handleBgMouseMove(e); }}
        onMouseUp={() => { handleMouseUp(); handleBgMouseUp(); }}
        onMouseLeave={() => { handleMouseUp(); handleBgMouseUp(); }}
      >
        <g transform={`translate(${transform.x},${transform.y}) scale(${transform.scale})`}>
          {/* Edges */}
          {edges.map((edge, i) => {
            const s = nodeMap.get(edge.source);
            const t = nodeMap.get(edge.target);
            if (!s || !t) return null;
            const isHighlighted = hoveredNode === edge.source || hoveredNode === edge.target;
            return (
              <line
                key={i}
                x1={s.x} y1={s.y}
                x2={t.x} y2={t.y}
                stroke={isHighlighted ? "hsl(var(--primary))" : "hsl(var(--border))"}
                strokeWidth={isHighlighted ? 1.5 : 0.7}
                strokeOpacity={isHighlighted ? 0.8 : 0.3}
              />
            );
          })}

          {/* Nodes */}
          {simNodes.map((node) => {
            const r = NODE_RADIUS[node.type];
            const isHovered = hoveredNode === node.id;
            const isConnected = hoveredNode && edges.some(
              (e) => (e.source === hoveredNode && e.target === node.id) || (e.target === hoveredNode && e.source === node.id)
            );
            const dimmed = hoveredNode && !isHovered && !isConnected;

            return (
              <g
                key={node.id}
                transform={`translate(${node.x},${node.y})`}
                onMouseDown={(e) => handleMouseDown(node.id, e)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                className="cursor-pointer"
                opacity={dimmed ? 0.2 : 1}
              >
                <circle
                  r={isHovered ? r + 4 : r}
                  fill={typeColors[node.type]}
                  fillOpacity={isHovered ? 0.3 : 0.15}
                  stroke={typeColors[node.type]}
                  strokeWidth={isHovered ? 2 : 1}
                  style={{ transition: "r 0.15s, fill-opacity 0.15s, stroke-width 0.15s" }}
                />
                <text
                  textAnchor="middle"
                  dy="0.35em"
                  className="text-[9px] font-semibold uppercase tracking-wider fill-foreground pointer-events-none select-none"
                  style={{ fontSize: node.type === "campo" ? "8px" : "9px" }}
                >
                  {node.label.length > 18
                    ? node.label.split(" ").reduce<string[]>((lines, word) => {
                        const last = lines[lines.length - 1] || "";
                        if ((last + " " + word).trim().length <= 14) {
                          lines[lines.length - 1] = (last + " " + word).trim();
                        } else {
                          lines.push(word);
                        }
                        return lines;
                      }, [""])
                      .map((line, i, arr) => (
                        <tspan key={i} x={0} dy={i === 0 ? `${-(arr.length - 1) * 0.5}em` : "1.1em"}>
                          {line}
                        </tspan>
                      ))
                    : node.label}
                </text>
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
};

export default ConceptGraph;
