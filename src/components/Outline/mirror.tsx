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
        d="M12 2.75c-2.752 0-5.25 2.857-5.25 6.75s2.498 6.75 5.25 6.75 5.25-2.857 5.25-6.75S14.752 2.75 12 2.75ZM5.274 8.802C5.56 4.708 8.331 1.25 12 1.25s6.44 3.457 6.726 7.552a.75.75 0 0 1 1.024.698V19c0 .487.158.96.45 1.35l.9 1.2a.75.75 0 1 1-1.2.9l-.9-1.2a3.754 3.754 0 0 1-.317-.5H5.317a3.748 3.748 0 0 1-.317.5l-.9 1.2a.75.75 0 1 1-1.2-.9l.9-1.2c.292-.39.45-.863.45-1.35V9.5a.75.75 0 0 1 1.024-.698Zm.476 3.81V19c0 .084-.003.167-.008.25h12.516a3.714 3.714 0 0 1-.008-.25v-6.387c-.984 2.952-3.334 5.137-6.25 5.137s-5.265-2.185-6.25-5.137Zm6.587-7.707a.75.75 0 0 1 1.014-.312c1.243.66 2.066 2.143 2.316 3.795a.75.75 0 0 1-1.483.224c-.207-1.371-.857-2.333-1.535-2.693a.75.75 0 0 1-.312-1.014Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMirror;
