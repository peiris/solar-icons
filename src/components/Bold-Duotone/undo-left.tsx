import * as React from "react";
import type { SVGProps } from "react";
const SvgUndoLeft = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.53 3.47a.75.75 0 0 1 0 1.06L5.06 7l2.47 2.47a.75.75 0 1 1-1.06 1.06l-3-3a.75.75 0 0 1 0-1.06l3-3a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m5.06 7 .75-.75h9.226c.904 0 1.633 0 2.222.053.606.055 1.136.172 1.617.45a3.75 3.75 0 0 1 1.372 1.372c.278.481.395 1.011.45 1.617.053.589.053 1.318.053 2.222v.072c0 .904 0 1.633-.053 2.222-.055.606-.172 1.136-.45 1.617a3.75 3.75 0 0 1-1.372 1.373c-.481.277-1.011.394-1.617.449-.589.053-1.318.053-2.222.053H8a.75.75 0 0 1 0-1.5h7c.948 0 1.61 0 2.122-.047.502-.046.788-.13 1.003-.254.342-.198.626-.482.823-.824.125-.215.21-.5.255-1.003.046-.512.047-1.174.047-2.122s0-1.61-.047-2.122c-.046-.503-.13-.788-.255-1.003a2.25 2.25 0 0 0-.823-.824c-.215-.124-.5-.208-1.003-.254-.512-.046-1.174-.047-2.122-.047H5.81L5.06 7Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgUndoLeft;
