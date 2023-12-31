import * as React from "react";
import type { SVGProps } from "react";
const SvgRecordSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12.75 12c0 .644.188 1.245.51 1.75h-2.52A3.25 3.25 0 1 0 8 15.25h8A3.25 3.25 0 1 0 12.75 12Zm1.5 0a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Zm-4.5 0a1.75 1.75 0 1 1-3.5 0 1.75 1.75 0 0 1 3.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRecordSquare;
