import * as React from "react";
import type { SVGProps } from "react";
const SvgFigma = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.667 1.25a4.083 4.083 0 0 0-2.36 7.417A4.078 4.078 0 0 0 4.584 12c0 1.376.681 2.594 1.725 3.333a4.083 4.083 0 1 0 6.442 3.333v-3.504a4.083 4.083 0 1 0 4.942-6.496 4.083 4.083 0 0 0-2.36-7.417H8.669Zm2.583 13.333H8.667a2.583 2.583 0 1 1 0-5.166h2.583v5.166ZM8.667 7.917h2.583V2.75H8.667a2.583 2.583 0 1 0 0 5.167Zm9.25-2.584a2.583 2.583 0 0 1-2.58 2.584H12.75V2.75h2.584a2.583 2.583 0 0 1 2.583 2.583Zm-5.167 6.664a2.583 2.583 0 0 1 2.58-2.58h.006a2.583 2.583 0 1 1-2.586 2.586v-.006Zm-4.083 4.086a2.583 2.583 0 1 0 2.583 2.584v-2.584H8.667Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFigma;
