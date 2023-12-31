import * as React from "react";
import type { SVGProps } from "react";
const SvgCassette2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.228 8h-2.456c-1.34 0-2.011 0-2.525-.356-.514-.356-.75-.984-1.22-2.24L6.5 4h11l-.527 1.404c-.47 1.256-.706 1.884-1.22 2.24C15.24 8 14.57 8 13.228 8Z"
        opacity={0.3}
      />
      <g fill="currentColor" opacity={0.3}>
        <path d="M13.5 13.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0ZM6 13.75a2.25 2.25 0 1 0 4.5 0 2.25 2.25 0 0 0-4.5 0Z" />
      </g>
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h4c3.771 0 5.657 0 6.828-1.172C22 17.657 22 15.771 22 12c0-3.771 0-5.657-1.172-6.828-.737-.737-1.756-1.01-3.35-1.112l-.505 1.344c-.47 1.256-.706 1.884-1.22 2.24C15.24 8 14.57 8 13.228 8h-2.456c-1.34 0-2.011 0-2.525-.356-.514-.356-.75-.984-1.22-2.24L6.522 4.06c-1.594.101-2.613.375-3.35 1.112ZM15.75 16c-.01 0 .01 0 0 0a2.25 2.25 0 0 0 0-4.5h-7.5a2.25 2.25 0 0 0 0 4.5c-.01 0 .01 0 0 0h7.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCassette2;
