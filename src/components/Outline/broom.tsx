import * as React from "react";
import type { SVGProps } from "react";
const SvgBroom = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.037 2.884a.75.75 0 0 1 0 1.06l-1.633 1.633a4.753 4.753 0 0 1-.085 5.687l.004.032-.032.004.032-.004v.005l.001.008.003.027a8.867 8.867 0 0 1 .034.444 16.125 16.125 0 0 1-.58 5.176c-.29 1.019-.743 2.026-1.208 2.907-1.162 2.199-3.833 2.855-5.876 1.812l-.025-.012-1.12-.682a22.75 22.75 0 0 1-7.613-7.612l-.681-1.12-.013-.025c-1.043-2.043-.386-4.715 1.813-5.876.88-.465 1.888-.918 2.905-1.21a16.122 16.122 0 0 1 5.525-.554l.096.009.027.003h.009l.002.001h.001l-.003.033.003-.033.034.004a4.753 4.753 0 0 1 5.686-.085l1.633-1.632a.75.75 0 0 1 1.06 0Zm-8.84 3.182a13.62 13.62 0 0 0-1.252-.021c-.94.025-2.216.149-3.57.536-.883.253-1.79.657-2.617 1.093-1.406.743-1.873 2.474-1.189 3.844l.652 1.071a21.25 21.25 0 0 0 7.11 7.11l1.071.652c1.37.684 3.102.218 3.844-1.189.437-.827.84-1.734 1.093-2.617a14.62 14.62 0 0 0 .516-4.823l-5.657-5.656Zm6.127 4.004L13.85 5.597a3.251 3.251 0 0 1 4.474 4.473Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBroom;