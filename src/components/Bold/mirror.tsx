import * as React from "react";
import type { SVGProps } from "react";
const SvgMirror = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.966 8.75C18.615 4.96 15.63 2 12 2 8.37 2 5.385 4.96 5.034 8.75H5a.75.75 0 0 0-.75.75V19c0 .487-.158.96-.45 1.35l-.9 1.2a.75.75 0 0 0 1.2.9l.9-1.2c.12-.159.225-.326.317-.5h13.366c.092.174.198.341.317.5l.9 1.2a.75.75 0 0 0 1.2-.9l-.9-1.2a2.25 2.25 0 0 1-.45-1.35V9.5a.75.75 0 0 0-.785-.75Zm-.716 4.131C17.096 15.325 14.73 17 12 17s-5.096-1.675-6.25-4.119V19c0 .084-.003.167-.008.25h12.516a3.714 3.714 0 0 1-.008-.25v-6.119Zm-5.856-7.976c.226-.366.756-.506 1.183-.312 1.45.66 2.41 2.143 2.702 3.795.072.41-.257.792-.735.854-.478.062-.923-.22-.996-.63-.242-1.371-1-2.334-1.791-2.693-.427-.194-.59-.648-.363-1.014Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMirror;
