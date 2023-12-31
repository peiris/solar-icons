import * as React from "react";
import type { SVGProps } from "react";
const SvgPill = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        fill="currentColor"
        d="M3.99 13.602a6.796 6.796 0 0 1 9.612-9.611l6.407 6.407a6.796 6.796 0 1 1-9.61 9.611L3.99 13.602Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m7.807 17.419-1.253-1.254.495-.095h.001l.014-.004c.014-.003.04-.008.073-.017.069-.017.176-.046.316-.091.281-.09.697-.243 1.21-.49 1.024-.493 2.437-1.364 3.939-2.866 1.5-1.501 2.372-2.915 2.866-3.94.247-.512.4-.927.49-1.209a5.31 5.31 0 0 0 .108-.389l.003-.014s0-.001 0 0l.096-.496 1.253 1.253-.032.103a10.9 10.9 0 0 1-.567 1.404c-.56 1.162-1.525 2.717-3.157 4.349-1.631 1.631-3.187 2.597-4.348 3.156a10.922 10.922 0 0 1-1.507.6Z"
      />
    </svg>
  );
};
export default SvgPill;
