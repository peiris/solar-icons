import * as React from "react";
import type { SVGProps } from "react";
const SvgRewindForwardCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm7.395-3.26a.25.25 0 0 0-.395.203v6.114c0 .203.23.321.395.203l4.28-3.057a.25.25 0 0 0 0-.406L8.645 8.74Zm-1.895.203c0-1.423 1.609-2.251 2.767-1.424l4.28 3.057a1.75 1.75 0 0 1 0 2.848l-4.28 3.057c-1.158.827-2.767 0-2.767-1.424V8.943Zm5.64-1.307a.75.75 0 0 1 1.046-.175l3.221 2.301a2.75 2.75 0 0 1 0 4.476l-3.221 2.3a.75.75 0 0 1-.872-1.22l3.222-2.3a1.25 1.25 0 0 0 0-2.035l-3.222-2.301a.75.75 0 0 1-.174-1.046Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRewindForwardCircle;
