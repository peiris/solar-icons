import * as React from "react";
import type { SVGProps } from "react";
const SvgGamepadOld = (props: SVGProps<SVGSVGElement>) => {
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
        fill="currentColor"
        d="M12.75 6H14c3.771 0 5.657 0 6.828 1.172C22 8.343 22 10.229 22 14c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14c0-3.771 0-5.657 1.172-6.828C4.343 6 6.229 6 10 6h2.75Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M8.75 12a.75.75 0 0 0-1.5 0v1.05a.2.2 0 0 1-.2.2H6a.75.75 0 0 0 0 1.5h1.05c.11 0 .2.09.2.2V16a.75.75 0 0 0 1.5 0v-1.05c0-.11.09-.2.2-.2H10a.75.75 0 0 0 0-1.5H8.95a.2.2 0 0 1-.2-.2V12ZM15 13.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM18 15.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM15.75 2a.75.75 0 0 0-1.5 0v1a.25.25 0 0 1-.25.25h-1A1.75 1.75 0 0 0 11.25 5v1h1.5V5a.25.25 0 0 1 .25-.25h1A1.75 1.75 0 0 0 15.75 3V2Z"
      />
    </svg>
  );
};
export default SvgGamepadOld;
