import * as React from "react";
import type { SVGProps } from "react";
const SvgMinimizeSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M19.952 2.988a3.721 3.721 0 0 1 1.06 1.06L15.811 9.25h1.939a.75.75 0 0 1 0 1.5H14a.75.75 0 0 1-.75-.75V6.25a.75.75 0 0 1 1.5 0v1.94l5.202-5.202ZM4.048 21.012a3.715 3.715 0 0 1-1.06-1.06l5.201-5.202H6.25a.75.75 0 0 1 0-1.5H10a.75.75 0 0 1 .75.75v3.75a.75.75 0 0 1-1.5 0v-1.94l-5.202 5.202Z"
      />
    </svg>
  );
};
export default SvgMinimizeSquare;
