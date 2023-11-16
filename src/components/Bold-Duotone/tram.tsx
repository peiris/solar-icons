import * as React from "react";
import type { SVGProps } from "react";
const SvgTram = (props: SVGProps<SVGSVGElement>) => {
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
        d="M6.375 19.572c-.477-.17-.87-.41-1.204-.744-.974-.974-1.138-2.442-1.166-5.078h15.99c-.028 2.636-.193 4.104-1.167 5.078a3.152 3.152 0 0 1-1.204.744l1.047 2.093a.75.75 0 0 1-1.342.67l-1.224-2.447C15.057 20 13.725 20 12 20c-1.726 0-3.057 0-4.105-.112L6.67 22.336a.75.75 0 0 1-1.342-.671l1.046-2.093ZM14.75 16a.75.75 0 0 1 .75-.75H17a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75ZM7 15.25a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H7Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.172 3.172C4 4.343 4 6.229 4 10v3.75h16V10c0-3.771 0-5.657-1.172-6.828-.878-.88-2.16-1.099-4.336-1.154A.48.48 0 0 0 14 2.5a2 2 0 1 1-4 0 .48.48 0 0 0-.492-.482c-2.177.055-3.458.275-4.336 1.154Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgTram;
