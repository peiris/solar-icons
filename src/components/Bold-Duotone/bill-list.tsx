import * as React from "react";
import type { SVGProps } from "react";
const SvgBillList = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.245 2h9.51c1.159 0 1.738 0 2.206.163a3.045 3.045 0 0 1 1.881 1.936C21 4.581 21 5.177 21 6.37v14.004c0 .858-.985 1.314-1.608.744a.946.946 0 0 0-1.284 0l-.483.442a1.657 1.657 0 0 1-2.25 0 1.657 1.657 0 0 0-2.25 0 1.657 1.657 0 0 1-2.25 0 1.657 1.657 0 0 0-2.25 0 1.657 1.657 0 0 1-2.25 0l-.483-.442a.946.946 0 0 0-1.284 0c-.623.57-1.608.114-1.608-.744V6.37c0-1.193 0-1.79.158-2.27.3-.913.995-1.629 1.881-1.937C5.507 2 6.086 2 7.245 2Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M7 6.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5H7ZM10.5 6.75a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5h-6.5ZM7 10.25a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5H7ZM10.5 10.25a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5h-6.5ZM7 13.75a.75.75 0 0 0 0 1.5h.5a.75.75 0 0 0 0-1.5H7ZM10.5 13.75a.75.75 0 0 0 0 1.5H17a.75.75 0 0 0 0-1.5h-6.5Z"
      />
    </svg>
  );
};
export default SvgBillList;