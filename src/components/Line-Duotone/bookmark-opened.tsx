import * as React from "react";
import type { SVGProps } from "react";
const SvgBookmarkOpened = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="#1C274D"
        
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12"
        opacity={0.5}
      />
      <path
        stroke="#1C274D"
        
        d="M14 6h-4c-2.8 0-4.2 0-5.27.545A5 5 0 0 0 2.545 8.73C2 9.8 2 11.2 2 14c0 2.8 0 4.2.545 5.27a5 5 0 0 0 2.185 2.185C5.8 22 7.2 22 10 22h4c2.8 0 4.2 0 5.27-.545a5 5 0 0 0 2.185-2.185C22 18.2 22 16.8 22 14c0-2.8 0-4.2-.545-5.27a5 5 0 0 0-2.185-2.185C18.2 6 16.8 6 14 6Z"
      />
      <path
        stroke="#1C274D"
        
        d="M17 6v4.808c0 .975 0 1.462-.13 1.753a1.5 1.5 0 0 1-1.724.848c-.31-.075-.695-.372-1.468-.967-.436-.336-.654-.504-.881-.602a2 2 0 0 0-1.594 0c-.227.098-.445.266-.881.602-.773.595-1.159.892-1.468.967a1.5 1.5 0 0 1-1.725-.848C7 12.27 7 11.783 7 10.808V6"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgBookmarkOpened;
