import * as React from "react";
import type { SVGProps } from "react";
const SvgBombEmoji = (props: SVGProps<SVGSVGElement>) => {
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
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M17.981 2.353a.558.558 0 0 1 1.038 0l.654 1.66c.057.143.17.257.315.314l1.659.654c.47.186.47.852 0 1.038l-1.66.654a.558.558 0 0 0-.314.315l-.654 1.659a.558.558 0 0 1-1.038 0l-.654-1.66a.558.558 0 0 0-.315-.314l-1.659-.654a.558.558 0 0 1 0-1.038l1.66-.654a.558.558 0 0 0 .314-.315l.654-1.659Z"
      />
      <path
        fill="currentColor"
        d="m16.477 6.462-2.23 2.231c.387.317.742.673 1.06 1.06l2.23-2.23-.21-.535a.558.558 0 0 0-.315-.315l-.535-.21Z"
        opacity={0.7}
      />
      <path
        fill="currentColor"
        d="M12 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2ZM14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5.448 1.5 1 1.5Z"
      />
    </svg>
  );
};
export default SvgBombEmoji;
