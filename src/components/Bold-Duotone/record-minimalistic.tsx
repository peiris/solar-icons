import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M22 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM10 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
      />
      <path
        fill="currentColor"
        d="M6 16h12a3.985 3.985 0 0 1-2.646-1H8.646c-.705.622-1.632 1-2.646 1Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgRecordMinimalistic;
