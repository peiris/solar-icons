import * as React from "react";
import type { SVGProps } from "react";
const SvgPulse = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M5 15h1.394c.786 0 1.18 0 1.511.177.332.178.55.505.986 1.159l.16.24c.422.633.633.95.92.933.286-.017.459-.356.803-1.036l1.966-3.877c.359-.706.538-1.06.831-1.071.293-.012.5.326.914 1.001l.637 1.04c.43.701.644 1.051.985 1.243.342.19.752.19 1.573.19H19"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464.974.974 1.3 2.343 1.41 4.536"
      />
    </svg>
  );
};
export default SvgPulse;
