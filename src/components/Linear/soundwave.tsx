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
        
        d="M12 4v16M16 7v10M8 7v10M20 11v2M4 11v2"
      />
    </svg>
  );
};
export default SvgSoundwave;
