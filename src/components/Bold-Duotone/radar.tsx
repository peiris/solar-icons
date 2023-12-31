import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M11.126 6.823a5.249 5.249 0 1 1-3.636 2.49l4.038 3.27a.75.75 0 0 0 .944-1.166L8.274 8.019c-.561-.454-1.465-.412-1.918.279a6.749 6.749 0 1 0 4.519-2.953.75.75 0 0 0 .25 1.478Z"
      />
    </svg>
  );
};
export default SvgRadar;
