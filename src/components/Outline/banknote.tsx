import * as React from "react";
import type { SVGProps } from "react";
const SvgBanknote = (props: SVGProps<SVGSVGElement>) => {
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
        d="M18.21 5.83c-.781-.08-1.79-.08-3.21-.08H9c-1.42 0-2.429 0-3.21.08-.77.079-1.235.227-1.596.468a3.25 3.25 0 0 0-.896.896c-.241.361-.39.827-.468 1.596-.08.781-.08 1.79-.08 3.21s0 2.429.08 3.21c.079.77.227 1.235.468 1.596.237.354.542.66.896.896.361.241.827.39 1.596.468.781.08 1.79.08 3.21.08h6c1.42 0 2.429 0 3.21-.08.77-.079 1.235-.227 1.596-.468.354-.237.66-.542.896-.896.241-.361.39-.827.468-1.596.08-.781.08-1.79.08-3.21s0-2.429-.08-3.21c-.079-.77-.227-1.235-.468-1.596a3.25 3.25 0 0 0-.896-.896c-.361-.241-.827-.39-1.596-.468Zm.152-1.492c.888.09 1.629.28 2.277.713.519.346.964.791 1.31 1.31.434.648.623 1.39.713 2.277.088.866.088 1.951.088 3.32v.084c0 1.369 0 2.454-.088 3.32-.09.888-.28 1.629-.712 2.277a4.753 4.753 0 0 1-1.311 1.31c-.648.434-1.39.623-2.277.713-.866.088-1.951.088-3.32.088H8.958c-1.369 0-2.454 0-3.32-.088-.888-.09-1.629-.28-2.277-.712a4.751 4.751 0 0 1-1.31-1.311c-.434-.648-.623-1.39-.713-2.277-.088-.866-.088-1.951-.088-3.32v-.084c0-1.369 0-2.454.088-3.32.09-.888.28-1.629.713-2.277a4.75 4.75 0 0 1 1.31-1.31c.648-.434 1.39-.623 2.277-.713.866-.088 1.951-.088 3.32-.088h6.084c1.369 0 2.454 0 3.32.088ZM5.5 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Zm6.5 1.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM8.25 12a3.75 3.75 0 1 1 7.5 0 3.75 3.75 0 0 1-7.5 0ZM18.5 8.25a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-1.5 0V9a.75.75 0 0 1 .75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBanknote;