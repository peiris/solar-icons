import * as React from "react";
import type { SVGProps } from "react";
const SvgSoundwave = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 4v16M16 7v2m0 8v-4M8 17v-2m0-8v4M20 11v2M4 11v2"
      />
    </svg>
  );
};
export default SvgSoundwave;
