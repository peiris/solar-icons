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
        d="M20.536 20.536C22 19.07 22 16.714 22 12c0-4.714 0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M11.255 11.445a.75.75 0 0 1-1.01 1.11l-2.75-2.5a.75.75 0 0 1 0-1.11l2.75-2.5a.75.75 0 0 1 1.01 1.11L9.94 8.75H16a.75.75 0 0 1 0 1.5H9.94l1.315 1.195Z"
      />
      <path
        fill="currentColor"
        d="M12.746 16.445a.75.75 0 1 0 1.008 1.11l2.75-2.5a.75.75 0 0 0 0-1.11l-2.75-2.5a.75.75 0 1 0-1.008 1.11l1.314 1.195H8a.75.75 0 0 0 0 1.5h6.06l-1.315 1.195Z"
      />
    </svg>
  );
};
export default SvgSquareSortHorizontal;
