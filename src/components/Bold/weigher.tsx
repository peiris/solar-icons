import * as React from "react";
import type { SVGProps } from "react";
const SvgWeigher = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4Zm4.25 8a.75.75 0 0 1 .75-.75h8a.75.75 0 0 1 0 1.5H8a.75.75 0 0 1-.75-.75Zm8.105-11.69a18.322 18.322 0 0 0-6.71 0l-.476.088c-.88.164-1.4 1.194-1.068 2.118l.744 2.076c.108.301.399.467.68.389.178-.05.356-.095.534-.137l-.64-1.99c-.155-.487.071-1.022.507-1.197.436-.174.917.079 1.073.565l.752 2.342a12.89 12.89 0 0 1 4.724.417c.281.078.572-.088.68-.389l.744-2.076c.332-.924-.188-1.954-1.068-2.118l-.476-.088Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgWeigher;
