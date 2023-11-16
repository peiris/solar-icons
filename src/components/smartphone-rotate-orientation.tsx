import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphoneRotateOrientation = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M2 8c0-2.828 0-4.243.879-5.121C3.757 2 5.172 2 8 2h1c2.828 0 4.243 0 5.121.879C15 3.757 15 5.172 15 8v8c0 2.828 0 4.243-.879 5.121C13.243 22 11.828 22 9 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16V8ZM17.5 10.007c1.86.027 2.914.165 3.621.872C22 11.758 22 13.172 22 16c0 2.829 0 4.243-.879 5.122-.707.707-1.761.845-3.621.872M11 5H6M19 18v-4" />
      <path d="M10 17.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0ZM20.5 6.986 22 8c0-3.015-2.162-5.517-5-6" />
    </svg>
  );
};
export default SvgSmartphoneRotateOrientation;
