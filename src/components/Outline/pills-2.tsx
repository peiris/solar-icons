import * as React from "react";
import type { SVGProps } from "react";
const SvgPills2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8 1.25a5.734 5.734 0 0 0-4.066 1.684A5.75 5.75 0 1 0 8 1.25Zm3.489 8.178L5.572 3.511a4.25 4.25 0 0 1 5.917 5.917ZM4.51 4.572l5.917 5.917a4.25 4.25 0 0 1-5.917-5.917ZM21.066 12.934a5.75 5.75 0 1 0-8.132 8.132 5.75 5.75 0 0 0 8.132-8.132Zm-7.071 1.06a4.25 4.25 0 0 1 7.189 2.256h-8.368a4.229 4.229 0 0 1 1.179-2.255Zm-1.179 3.756h8.368a4.25 4.25 0 0 1-8.368 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPills2;
