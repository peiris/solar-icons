import * as React from "react";
import type { SVGProps } from "react";
const SvgMapArrowDown = (props: SVGProps<SVGSVGElement>) => {
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
        d="M21.047 1.987c.654.685.94 1.768.473 2.816l-7.363 16.51a2.338 2.338 0 0 1-4.315 0L2.48 4.802a2.546 2.546 0 0 1 .473-2.816c.659-.69 1.735-1.009 2.767-.458l-.353.662.353-.662 5.904 3.152-.354.662.354-.662a.789.789 0 0 0 .752 0L18.28 1.53l.353.662-.353-.662c1.032-.55 2.108-.232 2.767.458Zm-2.06.865-.351-.656.35.656-5.904 3.153a2.289 2.289 0 0 1-2.165 0L5.014 2.852c-.356-.19-.715-.103-.976.171-.268.28-.388.72-.188 1.169l7.362 16.51c.326.73 1.25.73 1.575 0l7.363-16.51c.2-.448.08-.889-.188-1.169-.262-.274-.62-.36-.976-.17Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgMapArrowDown;
