import * as React from "react";
import type { SVGProps } from "react";
const SvgTestTube = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.3}>
        <path d="M20 17c1.105 0 2-.933 2-2.083 0-.72-.783-1.68-1.37-2.3a.862.862 0 0 0-1.26 0c-.587.62-1.37 1.58-1.37 2.3 0 1.15.895 2.083 2 2.083ZM16.278 10.568l1.505-2.598-8.41-4.826L2.65 14.746a4.827 4.827 0 0 0 1.776 6.606 4.862 4.862 0 0 0 6.629-1.77l1.12-1.932 4.102-7.082Z" />
      </g>
      <path
        fill="currentColor"
        d="M9.294 1.354a.75.75 0 0 0-.763 1.292l.835.494.006.003 8.41 4.827.844.484a.75.75 0 1 0 .747-1.3l-9.247-5.308-.832-.492ZM12.927 16.352l-.002-.002-2.612-1.503a.75.75 0 0 0-.748 1.3l2.61 1.503.752-1.298ZM14.565 13.525l-.002-.001-4.203-2.418a.75.75 0 0 0-.748 1.3l4.2 2.417.753-1.298ZM16.276 10.567l-2.558-1.472a.75.75 0 0 0-.748 1.3l2.556 1.47.75-1.299Z"
      />
    </svg>
  );
};
export default SvgTestTube;
