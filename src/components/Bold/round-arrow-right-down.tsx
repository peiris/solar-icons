import * as React from "react";
import type { SVGProps } from "react";
const SvgRoundArrowRightDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2ZM9.75 15c0 .414.336.75.75.75H15a.75.75 0 0 0 .75-.75v-4.5a.75.75 0 0 0-1.5 0v2.69L9.53 8.47a.75.75 0 0 0-1.06 1.06l4.72 4.72H10.5a.75.75 0 0 0-.75.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRoundArrowRightDown;
