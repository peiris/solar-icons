import * as React from "react";
import type { SVGProps } from "react";
const SvgVideoFrame = (props: SVGProps<SVGSVGElement>) => {
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
        d="M11.943 1.25h.114c2.309 0 4.118 0 5.53.19 1.444.194 2.584.6 3.479 1.494.895.895 1.3 2.035 1.494 3.48.19 1.411.19 3.22.19 5.529v.114c0 2.309 0 4.118-.19 5.53-.194 1.444-.6 2.584-1.494 3.479-.895.895-2.035 1.3-3.48 1.494-1.411.19-3.22.19-5.529.19h-.114c-2.309 0-4.118 0-5.53-.19-1.444-.194-2.584-.6-3.479-1.494-.895-.895-1.3-2.035-1.494-3.48-.19-1.411-.19-3.22-.19-5.529v-.114c0-2.309 0-4.118.19-5.53.194-1.444.6-2.584 1.494-3.479.895-.895 2.035-1.3 3.48-1.494 1.411-.19 3.22-.19 5.529-.19ZM6.25 2.982c-1.065.183-1.742.5-2.255 1.013-.514.513-.83 1.19-1.013 2.255H6.25V2.982Zm1.5-.162v8.43h8.5V2.82c-1.126-.07-2.508-.07-4.25-.07s-3.124 0-4.25.07Zm10 .162V6.25h3.268c-.183-1.065-.5-1.742-1.013-2.255-.513-.514-1.19-.83-2.255-1.013Zm3.43 4.768h-3.43v3.5h3.5c-.002-1.395-.011-2.54-.07-3.5Zm.07 5h-3.5v3.5h3.43c.059-.96.068-2.105.07-3.5Zm-.232 5H17.75v3.268c1.065-.183 1.742-.5 2.255-1.013.514-.513.83-1.19 1.013-2.255Zm-4.768 3.43v-8.43h-8.5v8.43c1.126.07 2.508.07 4.25.07s3.124 0 4.25-.07Zm-10-.162V17.75H2.982c.183 1.065.5 1.742 1.013 2.255.513.514 1.19.83 2.255 1.013ZM2.82 16.25h3.43v-3.5h-3.5c.002 1.395.011 2.54.07 3.5Zm-.07-5h3.5v-3.5H2.82c-.059.96-.068 2.105-.07 3.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgVideoFrame;