import * as React from "react";
import type { SVGProps } from "react";
const SvgHeart = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137 2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59-.277-.218-.564-.438-.856-.663Z"
        clipRule="evenodd"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M15.038 18.91C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636V20.5c1 0 2-.77 3.038-1.59Z"
      />
    </svg>
  );
};
export default SvgHeart;
