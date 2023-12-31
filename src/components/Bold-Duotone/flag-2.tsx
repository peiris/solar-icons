import * as React from "react";
import type { SVGProps } from "react";
const SvgFlag2 = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M6.5 1.75a.75.75 0 0 0-1.5 0v20a.75.75 0 0 0 1.5 0v-20Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m13.558 3.873-.413-.165a8.677 8.677 0 0 0-4.924-.452L6.5 3.6v10l1.72-.344a8.677 8.677 0 0 1 4.925.452 8.677 8.677 0 0 0 5.327.361l.1-.025a.9.9 0 0 0 .553-1.335l-1.56-2.601c-.342-.57-.513-.854-.553-1.163a1.508 1.508 0 0 1 0-.39c.04-.309.211-.594.553-1.163l1.278-2.13a.73.73 0 0 0-.803-1.084 7.3 7.3 0 0 1-4.482-.305Z"
      />
    </svg>
  );
};
export default SvgFlag2;
