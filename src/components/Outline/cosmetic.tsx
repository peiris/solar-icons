import * as React from "react";
import type { SVGProps } from "react";
const SvgCosmetic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.75 5.618a1.75 1.75 0 0 0-2.533-1.565l-2 1a1.75 1.75 0 0 0-.967 1.565v3.632H2a.75.75 0 0 0-.75.75v6a3.75 3.75 0 1 0 7.5 0v-6a.75.75 0 0 0-.75-.75h-.25V5.618Zm-5 6.132h4.5V17a2.25 2.25 0 1 1-4.5 0v-5.25Zm3.5-1.5V5.618a.25.25 0 0 0-.362-.224l-2 1a.25.25 0 0 0-.138.224v3.632h2.5ZM16.5 4.25a6.25 6.25 0 0 0-.75 12.455v2.545H13.5a.75.75 0 0 0 0 1.5h6a.75.75 0 1 0 0-1.5h-2.25v-2.545A6.251 6.251 0 0 0 16.5 4.25Zm0 11a4.75 4.75 0 1 0 0-9.5 4.75 4.75 0 0 0 0 9.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCosmetic;
