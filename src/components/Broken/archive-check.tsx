import * as React from "react";
import type { SVGProps } from "react";
const SvgArchiveCheck = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinejoin="round"
        
        d="m9.5 13.4 1.429 1.6 3.571-4"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M20.5 7v6c0 3.771 0 5.657-1.172 6.828C18.157 21 16.271 21 12.5 21h-1m-8-14v6c0 3.771 0 5.657 1.172 6.828.704.705 1.668.986 3.144 1.098M12 3H4c-.943 0-1.414 0-1.707.293C2 3.586 2 4.057 2 5c0 .943 0 1.414.293 1.707C2.586 7 3.057 7 4 7h16c.943 0 1.414 0 1.707-.293C22 6.414 22 5.943 22 5c0-.943 0-1.414-.293-1.707C21.414 3 20.943 3 20 3h-4"
      />
    </svg>
  );
};
export default SvgArchiveCheck;
