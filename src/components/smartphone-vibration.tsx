import * as React from "react";
import type { SVGProps } from "react";
const SvgSmartphoneVibration = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M5 8c0-2.828 0-4.243.879-5.121C6.757 2 8.172 2 11 2h2c2.828 0 4.243 0 5.121.879C19 3.757 19 5.172 19 8v8c0 2.828 0 4.243-.879 5.121C17.243 22 15.828 22 13 22h-2c-2.828 0-4.243 0-5.121-.879C5 20.243 5 18.828 5 16V8ZM14.5 19h-5M22 6l-.776 1.553a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894L22 18M2 6l.776 1.553a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894l-.552 1.106a1 1 0 0 0 0 .894l.552 1.106a1 1 0 0 1 0 .894L2 18" />
    </svg>
  );
};
export default SvgSmartphoneVibration;
