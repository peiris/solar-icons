import * as React from "react";
import type { SVGProps } from "react";
const SvgRulerCrossPen = (props: SVGProps<SVGSVGElement>) => {
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
        d="m4.045 5.492 1.447-1.447C6.855 2.682 7.537 2 8.384 2s1.53.682 2.893 2.045l-2.41 2.41-4.822 4.822C2.682 9.913 2 9.23 2 8.384s.682-1.529 2.045-2.892ZM19.955 18.508l-1.447 1.447C17.145 21.318 16.463 22 15.616 22c-.848 0-1.53-.682-2.893-2.045l4.821-4.821 2.41-2.41C21.319 14.086 22 14.767 22 15.615c0 .847-.682 1.529-2.045 2.892ZM11.4 18.161l7.396-7.396a10.289 10.289 0 0 1-3.326-2.234 10.29 10.29 0 0 1-2.235-3.327L5.839 12.6c-.577.577-.866.866-1.114 1.184a6.556 6.556 0 0 0-.749 1.211c-.173.364-.302.752-.56 1.526l-1.362 4.083a1.06 1.06 0 0 0 1.342 1.342l4.083-1.362c.775-.258 1.162-.387 1.526-.56.43-.205.836-.456 1.211-.749.318-.248.607-.537 1.184-1.114ZM20.848 8.713a3.932 3.932 0 0 0-5.561-5.561l-.887.887.038.111a8.754 8.754 0 0 0 2.092 3.32 8.754 8.754 0 0 0 3.431 2.13l.887-.887Z"
      />
    </svg>
  );
};
export default SvgRulerCrossPen;