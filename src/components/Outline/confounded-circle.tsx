import * as React from "react";
import type { SVGProps } from "react";
const SvgConfoundedCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.4 8.55a.75.75 0 0 1 1.05-.15l2 1.5a.75.75 0 0 1 0 1.2l-2 1.5a.75.75 0 1 1-.9-1.2l1.2-.9-1.2-.9a.75.75 0 0 1-.15-1.05ZM16.6 8.55a.75.75 0 0 0-1.05-.15l-2 1.5a.75.75 0 0 0 0 1.2l2 1.5a.75.75 0 1 0 .9-1.2l-1.2-.9 1.2-.9a.75.75 0 0 0 .15-1.05ZM15.53 16.53a.75.75 0 0 1-1.06 0l-.47-.47-.47.47a.75.75 0 0 1-1.06 0l-.47-.47-.47.47a.75.75 0 0 1-1.06 0l-.47-.47-.47.47a.75.75 0 0 1-1.06-1.06l1-1a.75.75 0 0 1 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 0l.47.47.47-.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgConfoundedCircle;
