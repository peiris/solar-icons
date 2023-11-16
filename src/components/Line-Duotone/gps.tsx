import * as React from "react";
import type { SVGProps } from "react";
const SvgGps = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeWidth={1.5}
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M2 12h2M20 12h2M12 4V2M12 22v-2"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgGps;
