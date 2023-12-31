import * as React from "react";
import type { SVGProps } from "react";
const SvgShop = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.5 21.991V18.5c0-.935 0-1.402-.201-1.75a1.5 1.5 0 0 0-.549-.549C13.402 16 12.935 16 12 16s-1.402 0-1.75.201a1.5 1.5 0 0 0-.549.549c-.201.348-.201.815-.201 1.75v3.491h5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.732 12c-.89 0-1.679-.376-2.232-.967V14c0 3.771 0 5.657 1.172 6.828.943.944 2.348 1.127 4.828 1.163h5c2.48-.036 3.885-.22 4.828-1.163C20.5 19.657 20.5 17.771 20.5 14v-2.966a3.06 3.06 0 0 1-5.275-1.789l-.073-.728a3.167 3.167 0 1 1-6.307.038l-.069.69A3.06 3.06 0 0 1 5.732 12Zm8.768 6.5v3.491h-5V18.5c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0L9.5 2Z"
      />
      <path
        fill="currentColor"
        d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.889-1.548C6.057 2 6.51 2 7.418 2h2.083l-.725 7.245a3.06 3.06 0 1 1-6.044-.904l.598-2.99ZM20.67 5.351c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904l-.598-2.99Z"
        opacity={0.7}
      />
    </svg>
  );
};
export default SvgShop;
