import * as React from "react";
import type { SVGProps } from "react";
const SvgLamp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M4.968 7.445c.609-2.346.913-3.519 1.7-4.294a4 4 0 0 1 .756-.585C8.372 2 9.584 2 12.007 2s3.634 0 4.582.566a4 4 0 0 1 .757.585c.786.775 1.09 1.948 1.699 4.294l.084.324c.828 3.189 1.242 4.783.49 5.903a2.998 2.998 0 0 1-.247.319c-.285.322-.648.541-1.116.69-.596.146-1.246.23-1.497.254-.849.065-1.904.065-3.223.065h-3.059c-3.294 0-4.941 0-5.836-1.01-.09-.1-.172-.206-.247-.318-.752-1.12-.338-2.714.49-5.903l.084-.324Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16.759 14.935a.773.773 0 0 0-.003.065v2a.75.75 0 1 0 1.5 0v-2.318c-.596.145-1.246.23-1.497.253Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.256 21.25V15h1.5v6.25h-1.5Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M11.256 21.25h-2.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-3.75Z"
      />
    </svg>
  );
};
export default SvgLamp;
