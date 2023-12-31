import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindBackCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10ZM10.564 7.461a.75.75 0 1 1 .872 1.22l-3.222 2.302a1.25 1.25 0 0 0 0 2.034l3.222 2.301a.75.75 0 0 1-.872 1.22l-3.222-2.3a2.75 2.75 0 0 1 0-4.476l3.222-2.301Zm5.936 7.67V8.87a1 1 0 0 0-1.555-.832l-4.697 3.131a1 1 0 0 0 0 1.664l4.697 3.132a1 1 0 0 0 1.555-.832Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRewindBackCircle;
