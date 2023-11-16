import * as React from "react";
import type { SVGProps } from "react";
const SvgMagniferZoomOut = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.157 20.313a9.157 9.157 0 1 0 0-18.313 9.157 9.157 0 0 0 0 18.313Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M17.1 18.122a9.206 9.206 0 0 0 1.022-1.022l3.666 3.666a.723.723 0 0 1-1.022 1.022L17.1 18.122Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M8.023 11.157c0-.4.324-.723.723-.723h4.82a.723.723 0 1 1 0 1.445h-4.82a.723.723 0 0 1-.723-.723Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMagniferZoomOut;
