import * as React from "react";
import type { SVGProps } from "react";
const SvgCosmetic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5V18a3 3 0 1 1-6 0v-5.5ZM3 10.5h4V6a1 1 0 0 0-1.447-.895l-2 1A1 1 0 0 0 3 7v3.5ZM11 10.5a5.5 5.5 0 1 1 11 0 5.5 5.5 0 0 1-11 0ZM15.75 17.71a7.091 7.091 0 0 0 1.5 0v1.79h2.25a.75.75 0 0 1 0 1.5h-6a.75.75 0 0 1 0-1.5h2.25v-1.79Z"
      />
    </svg>
  );
};
export default SvgCosmetic;
