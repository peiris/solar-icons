import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartSpeakerMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="m7.454 2.421-.215.04a4.833 4.833 0 0 0-3.918 4.197l-.016.137a46.932 46.932 0 0 0 0 10.69A4.714 4.714 0 0 0 7.41 21.62l1.016.126c.495.062.742.093.99.118 1.717.18 3.45.18 5.169 0 .246-.025.494-.056.988-.118l.907-.113a4.838 4.838 0 0 0 4.215-4.26l.017-.154a46.818 46.818 0 0 0-.035-10.672 4.701 4.701 0 0 0-3.809-4.066l-.323-.06a24.736 24.736 0 0 0-9.09 0Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M7.482 5.425a.75.75 0 1 0-.964 1.15C7.38 7.297 9.344 8.25 12 8.25s4.62-.953 5.482-1.675a.75.75 0 0 0-.963-1.15C15.94 5.908 14.324 6.75 12 6.75c-2.324 0-3.941-.842-4.518-1.325Z"
      />
    </svg>
  );
};
export default SvgSmartSpeakerMinimalistic;
