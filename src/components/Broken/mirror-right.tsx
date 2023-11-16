import * as React from "react";
import type { SVGProps } from "react";
const SvgMirrorRight = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M12 21c4.243 0 6.364 0 7.682-1.318C21 18.364 21 16.242 21 12m-9-9c4.243 0 6.364 0 7.682 1.318.816.816 1.127 1.939 1.245 3.682"
      />
      <path
        stroke="currentColor"
        strokeDasharray="2.5 3"
        strokeLinecap="round"
        
        d="M13 21H9c-2.828 0-4.243 0-5.121-.879C3 19.243 3 17.828 3 15V9c0-2.828 0-4.243.879-5.121C4.757 3 6.172 3 9 3h4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12 22V2"
      />
    </svg>
  );
};
export default SvgMirrorRight;
