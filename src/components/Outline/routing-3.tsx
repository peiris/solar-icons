import * as React from "react";
import type { SVGProps } from "react";
const SvgRouting3 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5 2.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM1.25 5a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Zm9 0a.75.75 0 0 1 .75-.75h5.132c2.751 0 3.797 3.593 1.476 5.07L7.197 15.945c-1.055.672-.58 2.305.671 2.305h3.321l-.22-.22a.75.75 0 1 1 1.061-1.06l1.5 1.5a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l.22-.22H7.867c-2.751 0-3.797-3.593-1.476-5.07l10.411-6.625c1.055-.672.58-2.305-.671-2.305H11a.75.75 0 0 1-.75-.75ZM19 16.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM15.25 19a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRouting3;
