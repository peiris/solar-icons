import * as React from "react";
import type { SVGProps } from "react";
const SvgCashOut = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M18.667 11C20.55 10.721 22 9.046 22 7.02 22 4.8 20.259 3 18.111 3H5.89C3.74 3 2 4.8 2 7.02 2 9.046 3.449 10.721 5.333 11M12 6v7m0 0 2-2.333M12 13l-2-2.333" />
      <path d="M5 10c0-1.886 0-2.828.586-3.414C6.172 6 7.114 6 9 6h6c1.886 0 2.828 0 3.414.586C19 7.172 19 8.114 19 10v6c0 1.886 0 2.828-.586 3.414C17.828 20 16.886 20 15 20H9c-1.886 0-2.828 0-3.414-.586C5 18.828 5 17.886 5 16v-6ZM5 17h14" />
    </svg>
  );
};
export default SvgCashOut;
