import * as React from "react";
import type { SVGProps } from "react";
const SvgVolumeKnob = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.25 7.816a4.251 4.251 0 1 0 1.5 0V11a.75.75 0 0 1-1.5 0V7.816ZM6.25 12a5.75 5.75 0 1 1 11.5 0 5.75 5.75 0 0 1-11.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13 3.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM20.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM3.5 13a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM6.697 5.282a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415ZM18.718 17.303a1 1 0 1 1-1.415 1.415 1 1 0 0 1 1.415-1.415ZM18.718 6.697a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415ZM6.697 18.718a1 1 0 1 1-1.415-1.415 1 1 0 0 1 1.415 1.415Z"
      />
    </svg>
  );
};
export default SvgVolumeKnob;
