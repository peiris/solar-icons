import * as React from "react";
import type { SVGProps } from "react";
const SvgStopCircle = (props: SVGProps<SVGSVGElement>) => {
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
      <path
        stroke="currentColor"
        
        d="M8 12c0-1.886 0-2.828.586-3.414C9.172 8 10.114 8 12 8c1.886 0 2.828 0 3.414.586C16 9.172 16 10.114 16 12c0 1.886 0 2.828-.586 3.414C14.828 16 13.886 16 12 16c-1.886 0-2.828 0-3.414-.586C8 14.828 8 13.886 8 12Z"
      />
    </svg>
  );
};
export default SvgStopCircle;
