import * as React from "react";
import type { SVGProps } from "react";
const SvgHealth = (props: SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        d="M8.962 18.469C6.019 16.214 2 12.489 2 8.967 2 3.083 7.5.886 12 5.43 16.5.886 22 3.083 22 8.967c0 3.522-4.02 7.247-6.962 9.502C13.706 19.489 13.04 20 12 20c-1.04 0-1.706-.51-3.038-1.531ZM16.5 6.25a.75.75 0 0 1 .75.75v1.25h1.25a.75.75 0 0 1 0 1.5h-1.25V11a.75.75 0 0 1-1.5 0V9.75H14.5a.75.75 0 0 1 0-1.5h1.25V7a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHealth;
