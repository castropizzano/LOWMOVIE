/** Default SVG xMidYMid meet projection, including letterboxing. */
export function projectSvgPoint(x: number, y: number, width: number, height: number) {
  const scale = Math.min(width / 900, height / 650);
  return {
    x: (width - 900 * scale) / 2 + x * scale,
    y: (height - 650 * scale) / 2 + y * scale,
  };
}