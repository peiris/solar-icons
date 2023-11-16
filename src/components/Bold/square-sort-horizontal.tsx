import * as React from "react";
import type { SVGProps } from "react";
const SvgSquareSortHorizontal = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Zm10.746.555a.75.75 0 0 1 1.008-1.11l2.75 2.5a.75.75 0 0 1 0 1.11l-2.75 2.5a.75.75 0 0 1-1.008-1.11l1.314-1.195H8a.75.75 0 0 1 0-1.5h6.06l-1.315-1.195Zm-1.441-6.06a.75.75 0 0 1-.05 1.06L9.94 8.75H16a.75.75 0 0 1 0 1.5H9.94l1.315 1.195a.75.75 0 0 1-1.01 1.11l-2.75-2.5a.75.75 0 0 1 0-1.11l2.75-2.5a.75.75 0 0 1 1.06.05Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSquareSortHorizontal;