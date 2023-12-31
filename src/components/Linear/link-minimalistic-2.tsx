import * as React from "react";
import type { SVGProps } from "react";
const SvgLinkMinimalistic2 = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m14.163 18.488-.721.72a6.117 6.117 0 0 1-8.65-8.65l.72-.72M9.837 14.163l4.326-4.326M9.837 5.512l.721-.72a6.117 6.117 0 1 1 8.65 8.65l-.72.72"
      />
    </svg>
  );
};
export default SvgLinkMinimalistic2;
