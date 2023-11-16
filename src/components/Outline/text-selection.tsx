import * as React from "react";
import type { SVGProps } from "react";
const SvgTextSelection = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9 8.25a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0V9.75H15a.75.75 0 0 0 0-1.5H9Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.25 6.646A2.751 2.751 0 1 1 6.646 3.25h10.708a2.751 2.751 0 1 1 3.396 3.396v10.708a2.751 2.751 0 1 1-3.396 3.396H6.646a2.751 2.751 0 1 1-3.396-3.396V6.646ZM4 2.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5Zm.75 14.604V6.646A2.756 2.756 0 0 0 6.646 4.75h10.708c.259.916.98 1.637 1.896 1.896v10.708a2.756 2.756 0 0 0-1.896 1.896H6.646a2.756 2.756 0 0 0-1.896-1.896ZM4 18.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5ZM21.25 4a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0Zm-2.5 16a1.25 1.25 0 1 1 2.5 0 1.25 1.25 0 0 1-2.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgTextSelection;
