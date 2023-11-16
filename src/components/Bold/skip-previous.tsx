import * as React from "react";
import type { SVGProps } from "react";
const SvgSkipPrevious = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.09 14.647c-1.787-1.154-1.787-4.14 0-5.294l10.79-6.968c1.736-1.121 3.87.339 3.87 2.648v13.934c0 2.31-2.134 3.769-3.87 2.648L8.09 14.647ZM2 5a.75.75 0 0 1 1.5 0v14A.75.75 0 0 1 2 19V5Z"
      />
    </svg>
  );
};
export default SvgSkipPrevious;
