import * as React from "react";
import type { SVGProps } from "react";
const SvgBacteria = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12Z"
      />
      <path
        stroke="currentColor"
        
        d="M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m4.5 11.5.414-1M14.465 7.171s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.172 6.464 6.172 6.464M19 13.136s-1.162.473-1.483 1.673c-.322 1.2.448 2.19.448 2.19M13.42 17.772 15 19M14.5 14v-2M12 5h-2M12.5 9.5l-1-1"
      />
    </svg>
  );
};
export default SvgBacteria;
