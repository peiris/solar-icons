import * as React from "react";
import type { SVGProps } from "react";
const SvgQuitPip = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 3h4c3.771 0 5.657 0 6.828 1.172.95.949 1.13 2.694 1.164 5.328.012.937.018 1.405-.275 1.703-.294.297-.768.297-1.717.297h-2.5c-2.828 0-4.243 0-5.121.879-.879.878-.879 2.293-.879 5.121v2c0 .466 0 .699-.076.883a1 1 0 0 1-.541.54C10.699 21 10.466 21 10 21c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3Zm.97 9.03a.75.75 0 1 0 1.06-1.06L9.31 8.25h1.19a.75.75 0 0 0 0-1.5h-3a.75.75 0 0 0-.75.75v3a.75.75 0 0 0 1.5 0V9.31l2.72 2.72Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M13.586 13.586C13 14.172 13 15.114 13 17c0 1.886 0 2.828.586 3.414C14.172 21 15.114 21 17 21h1c1.886 0 2.828 0 3.414-.586C22 19.828 22 18.886 22 17c0-1.886 0-2.828-.586-3.414C20.828 13 19.886 13 18 13h-1c-1.886 0-2.828 0-3.414.586Z"
      />
    </svg>
  );
};
export default SvgQuitPip;
