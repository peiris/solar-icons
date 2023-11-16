import * as React from "react";
import type { SVGProps } from "react";
const SvgBug = (props: SVGProps<SVGSVGElement>) => {
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
        
        d="M14 21.71A7 7 0 0 1 5 15v-3.062A3.938 3.938 0 0 1 8.938 8h6.124A3.938 3.938 0 0 1 19 11.938V15a6.977 6.977 0 0 1-2 4.899"
      />
      <path
        fill="currentColor"
        d="M8.25 7.5a.75.75 0 0 0-1.5 0h1.5Zm-.615-2.917a.75.75 0 1 0 1.246.834l-1.246-.834ZM17.25 8.5v-1h-1.5v1h1.5Zm-10.5-1v1h1.5v-1h-1.5Zm10.5 0c0-2.9-2.35-5.25-5.25-5.25v1.5a3.75 3.75 0 0 1 3.75 3.75h1.5ZM12 2.25a5.246 5.246 0 0 0-4.365 2.333l1.246.834A3.746 3.746 0 0 1 12 3.75v-1.5Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M19 14h3M5 14H2M14.5 3.5 17 2M9.5 3.5 7 2M20.5 20l-2-.8M20.5 8l-2 .8M3.5 20l2-.8M3.5 8l2 .8M12 21.5V15"
      />
    </svg>
  );
};
export default SvgBug;
