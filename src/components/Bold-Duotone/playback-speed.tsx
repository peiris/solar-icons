import * as React from "react";
import type { SVGProps } from "react";
const SvgPlaybackSpeed = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.607 1.517c.77-.175 1.571-.267 2.393-.267 5.937 0 10.75 4.813 10.75 10.75S17.937 22.75 12 22.75c-.822 0-1.623-.092-2.393-.267a.75.75 0 1 1 .333-1.463 9.25 9.25 0 1 0 0-18.04.75.75 0 1 1-.333-1.463Z"
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M7.313 3.132a.75.75 0 0 1-.235 1.034 9.302 9.302 0 0 0-2.912 2.912.75.75 0 0 1-1.27-.799A10.803 10.803 0 0 1 6.28 2.897a.75.75 0 0 1 1.034.235ZM3.132 16.686a.75.75 0 0 1 1.034.235 9.303 9.303 0 0 0 2.912 2.913.75.75 0 1 1-.799 1.269 10.802 10.802 0 0 1-3.382-3.383.75.75 0 0 1 .235-1.034Z" />
      </g>
      <path
        fill="currentColor"
        d="M2.98 9.94a.75.75 0 1 0-1.463-.333c-.175.77-.267 1.571-.267 2.393 0 .821.092 1.622.267 2.392a.75.75 0 0 0 1.463-.332A9.283 9.283 0 0 1 2.75 12c0-.709.08-1.398.23-2.06Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M15.414 10.941c.781.462.781 1.656 0 2.118l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787Z"
      />
    </svg>
  );
};
export default SvgPlaybackSpeed;
