import * as React from "react";
import type { SVGProps } from "react";
const SvgDonut = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      role="img"
      strokeWidth={props.strokeWidth ? props.strokeWidth : 1.5}
      width={24}
      height={24}
      {...props}
    >
      <circle cx={12} cy={12} r={10} stroke="currentColor"  />
      <circle cx={12} cy={12} r={3} stroke="currentColor"  />
      <path
        stroke="currentColor"
        
        d="M2 13s2.2 2 4 2c1.212 0 2.606-.908 3.387-1.5M14 14.224c.471.415 1.088.776 1.805.776 1.69 0 1.69-2 3.38-2 1.077 0 1.925.814 2.399 1.403"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.5 7 16 5M19 7l1-1M12 5l-1-1M10.5 7l-1.366.366M16.65 8.977l.066 1.412M20.678 10.085 19 11.563M7 5 6 4M6.792 9.144l-.585-1.288M5.665 12.642 6.5 11.5M3.683 10.35l-.079-1.412"
      />
    </svg>
  );
};
export default SvgDonut;
