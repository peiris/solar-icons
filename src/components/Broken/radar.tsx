import * as React from "react";
import type { SVGProps } from "react";
const SvgRadar = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M9.412 21.659c.53.142 1.06.238 1.588.292 4.795.488 9.372-2.558 10.66-7.363C23.088 9.253 19.922 3.77 14.587 2.34a9.968 9.968 0 0 0-7.501.95M12 12 5.002 6.335c-.43-.347-1.063-.283-1.366.178a9.99 9.99 0 0 0-1.295 2.898 9.997 9.997 0 0 0 2.661 9.734"
      />
    </svg>
  );
};
export default SvgRadar;
