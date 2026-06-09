import { useRef, useState, useEffect, useMemo } from "react";
import { nodes, edges, typeColors, GraphNode, NodeType } from "@/data/conceptMap";
import { useTranslation } from "react-i18next";

interface SimNode extends GraphNode {
  x: number;
  y: number;
}

const NODE_RADIUS: Record<NodeType, number> = {
  conceito: 28,
  autor: 22,
  campo: 32,
};

const ConceptGraph = () => {
  const { t } = useTranslation();
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Static spiral layout: campos interleaved as anchor points along an Archimedean spiral
  const simNodes = useMemo<SimNode[]>(() => {
    const cx = 450, cy = 325;
    const campos = nodes.filter(n => n.type === "campo");
    const others = nodes.filter(n => n.type !== "campo");
    // Interleave: insert one campo every ~step positions
    const total = nodes.length;
    const step = Math.floor(total / campos.length);
    const ordered: GraphNode[] = [];
    let ci = 0, oi = 0;
    for (let i = 0; i < total; i++) {
      if (ci < campos.length && (i % step === Math.floor(step / 2))) {
        ordered.push(campos[ci++]);
      } else if (oi < others.length) {
        ordered.push(others[oi++]);
      } else if (ci < campos.length) {
        ordered.push(campos[ci++]);
      }
    }
    // Archimedean spiral: r = a + b*theta, ~2.25 turns
    const turns = 2.25;
    const thetaMax = turns * Math.PI * 2;
    const rMin = 55;
    const rMax = 280;
    return ordered.map((n, i) => {
      const t = i / (ordered.length - 1);
      const theta = t * thetaMax - Math.PI / 2;
      const r = rMin + (rMax - rMin) * t;
      return { ...n, x: cx + Math.cos(theta) * r, y: cy + Math.sin(theta) * r };
    });
  }, []);

  const nodeMap = useMemo(() => new Map(simNodes.map((n) => [n.id, n])), [simNodes]);

  return (
    <div className="relative w-full h-[70vh] min-h-[500px] border border-border rounded-lg bg-card/30 overflow-hidden">
      {/* Legenda */}
      <div className="absolute top-4 left-4 z-10 flex flex-col gap-2 bg-background/80 backdrop-blur-sm rounded-md p-3 border border-border">
        {(["conceito", "autor", "campo"] as NodeType[]).map((type) => (
          <div key={type} className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: typeColors[type] }} />
            <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              {t(`conceptMap.typeLabels.${type}`)}
            </span>
          </div>
        ))}
      </div>

      {/* Tooltip */}
      {hoveredNode && (() => {
        const node = nodeMap.get(hoveredNode);
        if (!node) return null;
        const svg = svgRef.current;
        const rect = svg?.getBoundingClientRect();
        const containerW = rect?.width ?? 900;
        const containerH = rect?.height ?? 650;
        const scaleX = containerW / 900;
        const scaleY = containerH / 650;
        const screenX = node.x * scaleX;
        const screenY = node.y * scaleY;
        const CARD_W = 280;
        const CARD_H = 180;
        const offset = 20;
        // Flip to the left of the node when near the right edge
        const flipLeft = screenX + offset + CARD_W > containerW - 8;
        const left = flipLeft
          ? Math.max(8, screenX - offset - CARD_W)
          : Math.min(screenX + offset, containerW - CARD_W - 8);
        const top = Math.max(8, Math.min(screenY - 10, containerH - CARD_H - 8));
        return (
          <div
            className="absolute z-20 w-[280px] bg-popover border border-border rounded-md p-3 shadow-lg pointer-events-none"
            style={{ left, top }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-1" style={{ color: typeColors[node.type] }}>
              {t(`conceptMap.typeLabels.${node.type}`)}
            </p>
            <p className="text-sm font-semibold text-foreground mb-1">{t(`conceptMap.nodes.${node.id}.label`, node.label)}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">{t(`conceptMap.nodes.${node.id}.description`, node.description)}</p>
          </div>
        );
      })()}

      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox="0 0 900 650"
        onMouseLeave={() => setHoveredNode(null)}
      >
        <g>
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
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                onTouchStart={(e) => { e.stopPropagation(); setHoveredNode(hoveredNode === node.id ? null : node.id); }}
                className="cursor-default"
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
                {(() => {
                    const label = t(`conceptMap.nodes.${node.id}.label`, node.label);
                    return label.length > 18
                      ? label.split(" ").reduce<string[]>((lines, word) => {
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
                      : label;
                  })()}
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
