import * as React from "react";
import type { SVGProps } from "react";
const SvgDiskette = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M3.464 20.536C4.93 22 7.286 22 12 22c4.714 0 7.071 0 8.535-1.465C22 19.072 22 16.714 22 12c0-.341 0-.512-.015-.686a4.042 4.042 0 0 0-.921-2.224 8.285 8.285 0 0 0-.483-.504l-5.167-5.167a8.448 8.448 0 0 0-.504-.483 4.043 4.043 0 0 0-2.224-.92C12.512 2 12.342 2 12 2 7.286 2 4.929 2 3.464 3.464 2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535Z" />
      <path d="M17 22v-1c0-1.886 0-2.828-.586-3.414C15.828 17 14.886 17 13 17h-2c-1.886 0-2.828 0-3.414.586C7 18.172 7 19.114 7 21v1M7 8h6" />
    </svg>
  );
};
export default SvgDiskette;
