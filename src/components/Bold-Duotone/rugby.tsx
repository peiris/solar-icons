import * as React from "react";
import type { SVGProps } from "react";
const SvgRugby = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.457 2.11c-2.884.277-5.948 1.141-8.077 3.27-2.129 2.13-2.993 5.193-3.27 8.077l8.432 8.433c2.884-.278 5.948-1.142 8.077-3.271 2.129-2.129 2.993-5.193 3.27-8.077L13.458 2.11Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M18.069 2.087a27.141 27.141 0 0 0-4.612.023l8.433 8.433c.16-1.67.125-3.28.023-4.612a4.136 4.136 0 0 0-3.844-3.844ZM5.931 21.913a27.13 27.13 0 0 0 4.612-.023L2.11 13.457c-.16 1.67-.125 3.28-.023 4.612a4.136 4.136 0 0 0 3.844 3.844Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.943 8.16a.75.75 0 0 1 1.06 0l.888.888.889-.888a.75.75 0 1 1 1.06 1.06l-.888.889.888.888a.75.75 0 1 1-1.06 1.06l-.889-.888-.83.831.888.888a.75.75 0 0 1-1.06 1.06L12 13.062l-.83.83.888.889a.75.75 0 1 1-1.061 1.06l-.888-.888-.888.888a.75.75 0 0 1-1.06-1.06l.887-.889-.888-.888a.75.75 0 1 1 1.06-1.06l.889.888.83-.83-.888-.889a.75.75 0 0 1 1.061-1.06l.888.887.83-.83-.887-.888a.75.75 0 0 1 0-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgRugby;
