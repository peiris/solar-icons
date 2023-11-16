import * as React from "react";
import type { SVGProps } from "react";
const SvgBackspace = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M22 12c0 3.771 0 5.657-1.204 6.828C19.592 20 17.654 20 13.78 20h-2.637c-2.227 0-3.341 0-4.27-.501-.93-.502-1.52-1.42-2.701-3.259l-.681-1.06C2.497 13.634 2 12.86 2 12c0-.86.497-1.634 1.49-3.18l.68-1.06c1.181-1.838 1.771-2.757 2.701-3.259C7.801 4 8.915 4 11.142 4h2.637c3.875 0 5.813 0 7.017 1.172.671.653.968 1.528 1.1 2.828M15.5 9.5l-5 5m0-5 5 5"
      />
    </svg>
  );
};
export default SvgBackspace;