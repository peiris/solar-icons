import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowUp = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.047 22.013c.654-.685.94-1.768.473-2.816l-7.363-16.51a2.338 2.338 0 0 0-4.315 0L2.48 19.197a2.546 2.546 0 0 0 .473 2.816c.659.69 1.735 1.009 2.767.458l-.353-.662.353.662 5.904-3.152-.354-.662.354.662a.789.789 0 0 1 .752 0l5.904 3.152.353-.662-.353.662c1.032.55 2.108.232 2.767-.458Zm-2.06-.866-.351.657.35-.656-5.904-3.152a2.289 2.289 0 0 0-2.165 0l-5.903 3.152c-.356.19-.715.103-.976-.171a1.046 1.046 0 0 1-.188-1.169l7.362-16.51c.326-.73 1.25-.73 1.575 0l7.363 16.51c.2.448.08.889-.188 1.169-.262.274-.62.36-.976.17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMapArrowUp;
