import * as React from "react";
import type { SVGProps } from "react";
const SvgSdCard = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        
        d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 0 0-.921-2.224 8.285 8.285 0 0 0-.483-.504l-5.167-5.167c-.247-.247-.37-.37-.504-.483a4.043 4.043 0 0 0-2.224-.92C12.512 2 12.342 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M7 6v3M10 6v3M13 6v3"
      />
    </svg>
  );
};
export default SvgSdCard;
