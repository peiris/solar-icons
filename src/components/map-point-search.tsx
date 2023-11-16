import * as React from "react";
import type { SVGProps } from "react";
const SvgMapPointSearch = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M4 10.143C4 5.646 7.582 2 12 2s8 3.646 8 8.143c0 4.462-2.553 9.67-6.537 11.531a3.45 3.45 0 0 1-2.926 0C6.553 19.812 4 14.606 4 10.144Z" />
      <path d="M14.125 12.118 15.5 13.5m-1.375-1.382a3 3 0 1 0-4.25-4.236 3 3 0 0 0 4.25 4.236Z" />
    </svg>
  );
};
export default SvgMapPointSearch;
