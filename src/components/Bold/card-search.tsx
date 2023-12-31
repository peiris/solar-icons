import * as React from "react";
import type { SVGProps } from "react";
const SvgCardSearch = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.75 14.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM14 16.75a3.75 3.75 0 1 1 6.879 2.068l.901.902a.75.75 0 1 1-1.06 1.06l-.902-.901A3.75 3.75 0 0 1 14 16.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M10 4h4c3.771 0 5.657 0 6.828 1.172.844.843 1.08 2.057 1.146 4.078H2.026c.066-2.021.302-3.235 1.146-4.078C4.343 4 6.229 4 10 4ZM10 20h3.627a5.25 5.25 0 1 1 8.369-6.34C22 13.153 22 12.6 22 12c0-.442 0-.858-.002-1.25H2.002C2 11.142 2 11.558 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20Z"
      />
      <path
        fill="currentColor"
        d="M5.25 16a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75Z"
      />
    </svg>
  );
};
export default SvgCardSearch;
