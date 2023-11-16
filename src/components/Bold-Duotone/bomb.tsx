import * as React from "react";
import type { SVGProps } from "react";
const SvgBomb = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.5 22a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.558.558 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.558.558 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.558.558 0 0 0 .314-.315l.654-1.659Z"
      />
      <path
        fill="currentColor"
        d="m16.477 6.462-2.23 2.23c.387.318.743.673 1.06 1.061l2.23-2.23-.21-.536a.558.558 0 0 0-.315-.314l-.535-.211Z"
        opacity={0.7}
      />
    </svg>
  );
};
export default SvgBomb;
