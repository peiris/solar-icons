import * as React from "react";
import type { SVGProps } from "react";
const SvgUploadTrack2 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75a9.25 9.25 0 1 0 1.85 18.315.75.75 0 1 1 .3 1.47c-.696.141-1.415.215-2.15.215-5.937 0-10.75-4.813-10.75-10.75S6.063 1.25 12 1.25 22.75 6.063 22.75 12c0 .735-.074 1.454-.215 2.15a.75.75 0 0 1-1.47-.3A9.25 9.25 0 0 0 12 2.75ZM13 7c.414 0 .738.345.873.736A2.25 2.25 0 0 0 16 9.25a.75.75 0 0 1 0 1.5 3.734 3.734 0 0 1-2.25-.75v5a2.75 2.75 0 1 1-1.5-2.45v-4.8A.75.75 0 0 1 13 7Zm-.75 8a1.25 1.25 0 1 0-2.5 0 1.25 1.25 0 0 0 2.5 0Zm5.22-.53a.75.75 0 0 1 1.06 0l2.5 2.5a.75.75 0 1 1-1.06 1.06l-1.22-1.22V22a.75.75 0 0 1-1.5 0v-5.19l-1.22 1.22a.75.75 0 1 1-1.06-1.06l2.5-2.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUploadTrack2;
