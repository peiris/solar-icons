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
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M9 22h6M12 22v-7"
      />
      <path
        stroke="currentColor"
        strokeWidth={1.5}
        d="M4.962 7.445c.609-2.346.913-3.519 1.7-4.294a4 4 0 0 1 .756-.585C8.365 2 9.577 2 12 2s3.635 0 4.583.566a4 4 0 0 1 .756.585c.786.775 1.09 1.948 1.7 4.294l.084.324c.828 3.189 1.242 4.783.49 5.903a2.998 2.998 0 0 1-.247.319C18.471 15 16.824 15 13.53 15h-3.058c-3.294 0-4.942 0-5.837-1.01-.09-.1-.171-.206-.246-.318-.752-1.12-.338-2.714.49-5.903l.084-.324Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth={1.5}
        d="M17.5 15v2"
      />
    </svg>
  );
};
export default SvgLamp;
