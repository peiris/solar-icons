import * as React from "react";
import type { SVGProps } from "react";
const SvgStructure = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.25 8.675A3.751 3.751 0 1 1 8.675 4.25h6.65a3.751 3.751 0 1 1 4.425 4.425v6.65a3.751 3.751 0 1 1-4.425 4.425h-6.65a3.751 3.751 0 1 1-4.425-4.425v-6.65ZM2.75 5a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Zm3 10.325v-6.65A3.754 3.754 0 0 0 8.675 5.75h6.65a3.755 3.755 0 0 0 2.925 2.925v6.65a3.755 3.755 0 0 0-2.925 2.925h-6.65a3.755 3.755 0 0 0-2.925-2.925ZM5 16.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM21.25 5a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-4.5 14a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgStructure;
