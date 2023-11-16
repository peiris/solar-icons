import * as React from "react";
import type { SVGProps } from "react";
const SvgChatRoundDots = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1 1 5.925 1 12c0 1.76.413 3.423 1.148 4.898.195.392.26.84.147 1.263l-.655 2.448a1.43 1.43 0 0 0 1.75 1.751l2.45-.655a1.797 1.797 0 0 1 1.262.147A10.955 10.955 0 0 0 12 23Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M10.9 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0ZM6.5 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0ZM15.3 12a1.1 1.1 0 1 0 2.2 0 1.1 1.1 0 0 0-2.2 0Z"
      />
    </svg>
  );
};
export default SvgChatRoundDots;
