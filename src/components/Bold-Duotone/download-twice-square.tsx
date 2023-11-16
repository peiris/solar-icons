import * as React from "react";
import type { SVGProps } from "react";
const SvgDownloadTwiceSquare = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M8.5 6.25a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 1 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75ZM15.5 6.25a.75.75 0 0 1 .75.75v4.929l1.174-1.41a.75.75 0 0 1 1.152.961l-2.5 3a.75.75 0 0 1-1.152 0l-2.5-3a.75.75 0 1 1 1.152-.96l1.174 1.409V7a.75.75 0 0 1 .75-.75ZM6 16.25a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5H6Z"
      />
    </svg>
  );
};
export default SvgDownloadTwiceSquare;
