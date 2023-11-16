import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundArrowLeftUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10Zm2.25-13a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 0 1.5 0v-2.69l4.72 4.72a.75.75 0 1 0 1.06-1.06l-4.72-4.72h2.69a.75.75 0 0 0 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoundArrowLeftUp;
