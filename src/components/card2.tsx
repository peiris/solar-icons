import * as React from "react";
import type { SVGProps } from "react";
const SvgCard2 = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172C22 6.343 22 8.229 22 12c0 3.771 0 5.657-1.172 6.828C19.657 20 17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12ZM10 16.5H6M8 13.5H6M2 10h20" />
      <path d="M14 15c0-.943 0-1.414.293-1.707C14.586 13 15.057 13 16 13c.943 0 1.414 0 1.707.293.293.293.293.764.293 1.707 0 .943 0 1.414-.293 1.707C17.414 17 16.943 17 16 17c-.943 0-1.414 0-1.707-.293C14 16.414 14 15.943 14 15Z" />
    </svg>
  );
};
export default SvgCard2;
