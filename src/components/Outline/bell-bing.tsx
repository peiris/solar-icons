import * as React from "react";
import type { SVGProps } from "react";
const SvgBellBing = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.75 6a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0V6Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M4.25 9a7.75 7.75 0 1 1 15.5 0v.704c0 .697.206 1.378.593 1.958l1.148 1.723c1.334 2 .316 4.718-2.003 5.35-.755.206-1.517.38-2.284.523l-.002.005c-.769 2.052-2.824 3.487-5.202 3.487s-4.433-1.435-5.202-3.487l-.002-.005a28.47 28.47 0 0 1-2.284-.523c-2.319-.632-3.337-3.35-2.003-5.35l1.148-1.723a3.53 3.53 0 0 0 .593-1.958V9Zm4.373 10.537a28.46 28.46 0 0 0 6.753 0c-.71 1.021-1.947 1.713-3.376 1.713-1.429 0-2.666-.692-3.377-1.713ZM12 2.75A6.25 6.25 0 0 0 5.75 9v.704a5.03 5.03 0 0 1-.845 2.79l-1.148 1.723a2.021 2.021 0 0 0 1.15 3.071 26.96 26.96 0 0 0 14.187 0 2.02 2.02 0 0 0 1.15-3.07l-1.15-1.724a5.03 5.03 0 0 1-.844-2.79V9A6.25 6.25 0 0 0 12 2.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBellBing;
