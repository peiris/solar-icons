import * as React from "react";
import type { SVGProps } from "react";
const SvgWindowFrame = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2c4.714 0 7.071 0 8.535 1.464 1.08 1.08 1.364 2.647 1.439 5.286L22 9.5H2.026v-.75c.075-2.64.358-4.205 1.438-5.286C4.93 2 7.286 2 12 2Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M13 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM10 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
      <path
        fill="currentColor"
        d="M2 12c0 4.714 0 7.071 1.464 8.535 1.01 1.01 2.446 1.324 4.786 1.421L9 22V9.5H2.026l-.023.75C2 10.794 2 11.377 2 12Z"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22c-.819 0-2.316 0-3-.008V9.5h13l-.003.75C22 10.794 22 11.377 22 12Z"
      />
    </svg>
  );
};
export default SvgWindowFrame;
