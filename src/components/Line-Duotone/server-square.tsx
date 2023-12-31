import * as React from "react";
import type { SVGProps } from "react";
const SvgServerSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 3.75h4v-1.5h-4v1.5ZM21.25 11v2h1.5v-2h-1.5ZM14 20.25h-4v1.5h4v-1.5ZM2.75 13v-2h-1.5v2h1.5ZM10 20.25c-1.907 0-3.261-.002-4.29-.14-1.005-.135-1.585-.389-2.008-.812l-1.06 1.06c.748.75 1.697 1.081 2.869 1.239 1.15.155 2.625.153 4.489.153v-1.5ZM1.25 13c0 1.864-.002 3.338.153 4.489.158 1.172.49 2.121 1.238 2.87l1.06-1.06c-.422-.424-.676-1.004-.811-2.01-.138-1.027-.14-2.382-.14-4.289h-1.5Zm20 0c0 1.907-.002 3.262-.14 4.29-.135 1.005-.389 1.585-.812 2.008l1.06 1.06c.75-.748 1.081-1.697 1.239-2.869.155-1.15.153-2.625.153-4.489h-1.5ZM14 21.75c1.864 0 3.338.002 4.489-.153 1.172-.158 2.121-.49 2.87-1.238l-1.06-1.06c-.424.422-1.004.676-2.01.811-1.027.138-2.382.14-4.289.14v1.5Zm0-18c1.907 0 3.262.002 4.29.14 1.005.135 1.585.389 2.008.812l1.06-1.06c-.748-.75-1.697-1.081-2.869-1.239-1.15-.155-2.625-.153-4.489-.153v1.5ZM22.75 11c0-1.864.002-3.338-.153-4.489-.158-1.172-.49-2.121-1.238-2.87l-1.06 1.06c.422.424.676 1.004.811 2.01.138 1.028.14 2.382.14 4.289h1.5ZM10 2.25c-1.864 0-3.338-.002-4.489.153-1.172.158-2.121.49-2.87 1.238l1.06 1.06c.424-.422 1.004-.676 2.01-.811 1.028-.138 2.382-.14 4.289-.14v-1.5ZM2.75 11c0-1.907.002-3.261.14-4.29.135-1.005.389-1.585.812-2.008l-1.06-1.06c-.75.748-1.081 1.697-1.239 2.869C1.248 7.661 1.25 9.136 1.25 11h1.5ZM2 12.75h20v-1.5H2v1.5Z"
        opacity={0.5}
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M13.5 16.5H18M13.5 7.5H18M6 17.5v-2M6 8.5v-2M9 17.5v-2M9 8.5v-2"
      />
    </svg>
  );
};
export default SvgServerSquare;
