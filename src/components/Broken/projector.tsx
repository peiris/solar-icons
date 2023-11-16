import * as React from "react";
import type { SVGProps } from "react";
const SvgProjector = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18 6.017c1.553.047 2.48.22 3.121.862.49.49.707 1.146.803 2.121M10 6H8c-2.828 0-4.243 0-5.121.879C2 7.757 2 9.172 2 12c0 2.828 0 4.243.879 5.121C3.757 18 5.172 18 8 18h2m4 0h2c2.828 0 4.243 0 5.121-.879.769-.768.865-1.946.877-4.121"
      />
      <path
        fill="currentColor"
        d="M18.33 20.335a.75.75 0 1 0 1.34-.67l-1.34.67Zm-1-2 1 2 1.34-.67-1-2-1.34.67ZM5.67 20.335a.75.75 0 1 1-1.34-.67l1.34.67Zm1-2-1 2-1.34-.67 1-2 1.34.67Z"
      />
      <circle cx={14} cy={9} r={5} stroke="currentColor" strokeWidth={1.5} />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M12 9a2 2 0 1 0 2-2"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M5.5 9.5V11"
      />
    </svg>
  );
};
export default SvgProjector;
