import * as React from "react";
import type { SVGProps } from "react";
const SvgReel2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 14.25a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10a9.993 9.993 0 0 1-4.73 8.5h3.98a.75.75 0 0 1 0 1.5H12Zm1-16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0ZM6.5 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm13 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM12 17.5a1 1 0 1 1 0 2 1 1 0 0 1 0-2ZM8.25 12a3.75 3.75 0 1 0 7.5 0 3.75 3.75 0 0 0-7.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgReel2;
