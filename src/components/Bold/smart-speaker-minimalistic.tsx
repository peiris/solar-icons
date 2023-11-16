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
        fillRule="evenodd"
        d="M7.24 2.461A4.833 4.833 0 0 0 3.32 6.658l-.016.137a46.932 46.932 0 0 0 0 10.69A4.714 4.714 0 0 0 7.41 21.62l1.016.126c.495.062.742.093.99.118 1.717.18 3.45.18 5.169 0 .247-.025.494-.056.989-.118l.906-.113a4.838 4.838 0 0 0 4.215-4.26l.017-.154a46.818 46.818 0 0 0-.035-10.672 4.701 4.701 0 0 0-3.809-4.066l-.323-.06a24.736 24.736 0 0 0-9.09 0l-.216.04Zm-.815 3.057a.75.75 0 0 1 1.057-.093C8.059 5.908 9.676 6.75 12 6.75s3.941-.842 4.518-1.325a.75.75 0 1 1 .963 1.15C16.62 7.297 14.657 8.25 12 8.25c-2.656 0-4.62-.953-5.482-1.675a.75.75 0 0 1-.093-1.057Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSmartSpeakerMinimalistic;
