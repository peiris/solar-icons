import * as React from "react";
import type { SVGProps } from "react";
const SvgArrowRightUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97 3.97 3.97a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28l3.97 3.97-6.97 6.97Z"
      />
    </svg>
  );
};
export default SvgArrowRightUp;
