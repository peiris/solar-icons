import * as React from "react";
import type { SVGProps } from "react";
const SvgCalculator = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        d="M12 22c-4.243 0-6.364 0-7.682-1.465C3 19.072 3 16.714 3 12s0-7.071 1.318-8.536C5.636 2 7.758 2 12 2c4.243 0 6.364 0 7.682 1.464C21 4.93 21 7.286 21 12c0 4.714 0 7.071-1.318 8.535C18.364 22 16.242 22 12 22Z"
        opacity={0.3}
      />
      <path
        fill="#1C274D"
        d="M15 6H9c-.465 0-.697 0-.888.051a1.5 1.5 0 0 0-1.06 1.06C7 7.304 7 7.536 7 8s0 .697.051.888a1.5 1.5 0 0 0 1.06 1.06C8.304 10 8.536 10 9 10h6c.465 0 .697 0 .888-.051a1.5 1.5 0 0 0 1.06-1.06C17 8.696 17 8.464 17 8s0-.697-.051-.888a1.5 1.5 0 0 0-1.06-1.06C15.697 6 15.464 6 15 6ZM8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM8 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM16 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
export default SvgCalculator;
