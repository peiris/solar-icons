import * as React from "react";
import type { SVGProps } from "react";
const SvgTv = (props: SVGProps<SVGSVGElement>) => {
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
        strokeWidth={1.5}
        d="M22 16c0 2.828 0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16v-4c0-2.828 0-4.243.879-5.121C3.757 6 5.172 6 8 6h8c2.828 0 4.243 0 5.121.879C22 7.757 22 9.172 22 12v4Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="m9 2 3 3.5L15 2M16 6v16"
      />
      <path
        fill="currentColor"
        d="M20 16a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM20 12a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z"
      />
    </svg>
  );
};
export default SvgTv;
