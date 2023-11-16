import * as React from "react";
import type { SVGProps } from "react";
const SvgAdhesivePlaster = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.213 3.213a4.142 4.142 0 0 0 0 5.858L14.93 20.787a4.142 4.142 0 0 0 5.858-5.858L9.07 3.213a4.142 4.142 0 0 0-5.858 0Zm6.132 5.018A.788.788 0 1 0 8.23 9.345.788.788 0 0 0 9.345 8.23Zm2.784.928a.787.787 0 1 0-1.114 1.114.787.787 0 0 0 1.114-1.114Zm3.712 3.712a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.114Zm.929 3.899a.787.787 0 1 0-1.114-1.114.787.787 0 0 0 1.114 1.114Zm-3.713-3.713a.787.787 0 1 0-1.113-1.114.787.787 0 0 0 1.113 1.114Zm.928 1.67a.788.788 0 1 1-1.114 1.114.788.788 0 0 1 1.114-1.113ZM9.16 11.016a.787.787 0 1 1 1.114 1.114.787.787 0 0 1-1.114-1.114Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.081 13.06 3.213 14.93a4.142 4.142 0 0 0 5.858 5.858l1.868-1.868-5.858-5.858ZM18.919 10.94l1.868-1.869a4.142 4.142 0 0 0-5.858-5.858L13.06 5.081l5.858 5.858Z"
      />
    </svg>
  );
};
export default SvgAdhesivePlaster;
