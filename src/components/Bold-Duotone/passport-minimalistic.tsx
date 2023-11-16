import * as React from "react";
import type { SVGProps } from "react";
const SvgPassportMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        fill="#1C274D"
        d="M12 10.75a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
      />
      <path
        fill="#1C274D"
        fillRule="evenodd"
        d="M4 4.694v14a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-10a3 3 0 0 0-3-3H5a1 1 0 0 1-1-1Zm8 4.556a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5Z"
        clipRule="evenodd"
      />
      <path
        fill="#1C274D"
        d="M18 4v1.865c-.313-.11-.65-.17-1-.17H5a1 1 0 0 1-1-1v-.072c0-.533.392-.985.92-1.06L15.717 2.02A2 2 0 0 1 18 4Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgPassportMinimalistic;
