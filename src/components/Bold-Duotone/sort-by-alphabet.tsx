import * as React from "react";
import type { SVGProps } from "react";
const SvgSortByAlphabet = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.184 6.692a.75.75 0 0 0-1.368 0l-4.5 10a.75.75 0 0 0 1.368.616l1.438-3.194h4.757l1.437 3.194a.75.75 0 0 0 1.368-.616l-4.5-10ZM16.5 8.828l-1.703 3.786h3.407L16.5 8.828Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2.25 7A.75.75 0 0 1 3 6.25h10a.75.75 0 0 1 0 1.5H3A.75.75 0 0 1 2.25 7Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M2.25 12a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75ZM2.25 17a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1-.75-.75Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgSortByAlphabet;
