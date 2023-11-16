import * as React from "react";
import type { SVGProps } from "react";
const SvgSlashCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm2.018-14.635a.75.75 0 1 0-1.448-.389l-2.589 9.66a.75.75 0 0 0 1.45.388l2.587-9.66Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSlashCircle;
