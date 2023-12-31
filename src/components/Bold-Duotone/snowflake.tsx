import * as React from "react";
import type { SVGProps } from "react";
const SvgSnowflake = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25a.75.75 0 0 1 .75.75v2.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.78 2.78v11.38l2.78 2.78a.75.75 0 1 1-1.06 1.06l-1.72-1.72V22a.75.75 0 0 1-1.5 0v-2.19l-1.72 1.72a.75.75 0 0 1-1.06-1.06l2.78-2.78V6.31L8.47 3.53a.75.75 0 0 1 1.06-1.06l1.72 1.72V2a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.511 4.178a.75.75 0 0 1 .919.53l1.018 3.798L12 11.134l4.552-2.628 1.017-3.798a.75.75 0 1 1 1.45.389l-.63 2.349 1.896-1.095a.75.75 0 0 1 .75 1.3l-1.896 1.094 2.349.63a.75.75 0 1 1-.388 1.448l-3.798-1.018-3.802 2.196 3.802 2.195 3.798-1.018a.75.75 0 1 1 .388 1.449l-2.35.63 1.897 1.094a.75.75 0 1 1-.75 1.3l-1.896-1.096.63 2.35a.75.75 0 0 1-1.45.388l-1.017-3.798L12 12.867l-4.553 2.628-1.017 3.798a.75.75 0 0 1-1.45-.388l.63-2.35-1.896 1.095a.75.75 0 0 1-.75-1.299l1.896-1.095-2.349-.629a.75.75 0 0 1 .388-1.449l3.798 1.018L10.5 12 6.698 9.805 2.9 10.823a.75.75 0 1 1-.389-1.449l2.35-.63L2.963 7.65a.75.75 0 0 1 .75-1.299L5.61 7.446l-.629-2.35a.75.75 0 0 1 .53-.918Z"
        clipRule="evenodd"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgSnowflake;
