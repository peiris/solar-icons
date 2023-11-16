import * as React from "react";
import type { SVGProps } from "react";
const SvgWatchRound = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="m17 6.5-.304-1.368c-.334-1.501-.5-2.252-1.049-2.692C15.1 2 14.33 2 12.791 2H11.21C9.67 2 8.9 2 8.353 2.44c-.549.44-.715 1.19-1.05 2.692L7 6.5M17 17.5l-.304 1.368c-.334 1.501-.5 2.252-1.049 2.692-.548.44-1.317.44-2.856.44H11.21c-1.539 0-2.308 0-2.856-.44-.549-.44-.715-1.19-1.05-2.692L7 17.5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M4.755 10.058a7.5 7.5 0 1 1 0 3.884"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M12 8.923V12l2 1.923"
      />
    </svg>
  );
};
export default SvgWatchRound;
