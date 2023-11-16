import * as React from "react";
import type { SVGProps } from "react";
const SvgGps = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M12 8.512a3.488 3.488 0 1 0 0 6.976 3.488 3.488 0 0 0 0-6.976ZM12.75 2a.75.75 0 0 0-1.5 0v2.035a8.102 8.102 0 0 1 1.5 0V2ZM19.965 12.75a8.085 8.085 0 0 0 0-1.5H22a.75.75 0 0 1 0 1.5h-2.035ZM11.25 19.965a8.085 8.085 0 0 0 1.5 0V22a.75.75 0 0 1-1.5 0v-2.035ZM4.035 11.25a8.102 8.102 0 0 0 0 1.5H2a.75.75 0 0 1 0-1.5h2.035Z"
      />
    </svg>
  );
};
export default SvgGps;
