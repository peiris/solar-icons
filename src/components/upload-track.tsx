import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadTrack = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0ZM12 15V9M14.058 11.03l-1.316-.659a2.313 2.313 0 0 1-.35-.194 1 1 0 0 1-.374-.607C12 9.477 12 9.375 12 9.171c0-.486 0-.728.06-.893a1 1 0 0 1 1.056-.653c.174.02.391.129.826.346l1.316.658c.183.092.274.137.35.195a1 1 0 0 1 .374.606c.018.093.018.195.018.4 0 .485 0 .728-.06.893a1 1 0 0 1-1.056.652c-.174-.02-.391-.129-.826-.346Z" />
      <path d="M14 21.8c-.646.131-1.315.2-2 .2-5.523 0-10-4.477-10-10S6.477 2 12 2s10 4.477 10 10c0 .685-.069 1.354-.2 2M18 22v-7m0 0 2.5 2.5M18 15l-2.5 2.5" />
    </svg>
  );
};
export default SvgUploadTrack;
