import * as React from "react";
import type { SVGProps } from "react";
const SvgReel2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0 5.523 4.477 10 10 10h9.25a.75.75 0 0 0 0-1.5h-3.98A9.993 9.993 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 15.75a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM12 4.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM13 18.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM18.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
      />
    </svg>
  );
};
export default SvgReel2;
