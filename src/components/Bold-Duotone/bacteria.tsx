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
      <path fill="currentColor" d="M6 15a3 3 0 1 1 6 0 3 3 0 0 1-6 0Z" />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M14.465 7.171s1.243-.171 2.121.707c.879.879.707 2.122.707 2.122M9 9.293s-1.243.171-2.121-.707C6 7.707 6.172 6.464 6.172 6.464M19 13.136s-1.162.473-1.483 1.673c-.322 1.2.448 2.19.448 2.19M13.42 17.772 15 19"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm-6.393 8.787a.75.75 0 0 0-1.386-.574l-.414 1a.75.75 0 0 0 1.386.574l.414-1Zm8.893.463a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-2a.75.75 0 0 1 .75-.75Zm-2.5-7h-2a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="m12.5 9.5-1-1"
      />
    </svg>
  );
};
export default SvgBacteria;
