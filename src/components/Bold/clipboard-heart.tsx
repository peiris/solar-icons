import * as React from "react";
import type { SVGProps } from "react";
const SvgClipboardHeart = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.5 2A1.5 1.5 0 0 0 8 3.5v1A1.5 1.5 0 0 0 9.5 6h5A1.5 1.5 0 0 0 16 4.5v-1A1.5 1.5 0 0 0 14.5 2h-5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M6.5 4.037c-1.258.07-2.052.27-2.621.84C3 5.756 3 7.17 3 9.998v6c0 2.829 0 4.243.879 5.122.878.878 2.293.878 5.121.878h6c2.828 0 4.243 0 5.121-.878.879-.88.879-2.293.879-5.122v-6c0-2.828 0-4.242-.879-5.121-.569-.57-1.363-.77-2.621-.84V4.5a3 3 0 0 1-3 3h-5a3 3 0 0 1-3-3v-.463Zm4.543 11.329C10.165 14.72 9 13.68 9 12.696c0-1.672 1.65-2.297 3-1.005 1.35-1.292 3-.668 3 1.006 0 .984-1.165 2.024-2.043 2.669-.42.308-.63.462-.957.462-.328 0-.537-.154-.957-.462Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgClipboardHeart;
