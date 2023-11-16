import * as React from "react";
import type { SVGProps } from "react";
const SvgSoundwaveCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2Zm.75 5a.75.75 0 0 0-1.5 0v10a.75.75 0 0 0 1.5 0V7Zm-5 2a.75.75 0 0 0-1.5 0v6a.75.75 0 0 0 1.5 0V9Zm10 1a.75.75 0 0 0-1.5 0v4a.75.75 0 0 0 1.5 0v-4Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSoundwaveCircle;
