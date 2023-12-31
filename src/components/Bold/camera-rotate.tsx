import * as React from "react";
import type { SVGProps } from "react";
const SvgCameraRotate = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14.222 21H9.778c-3.121 0-4.682 0-5.803-.735A4.406 4.406 0 0 1 2.75 19.06C2 17.96 2 16.428 2 13.364c0-3.065 0-4.597.749-5.697.324-.477.74-.886 1.226-1.204.72-.473 1.622-.642 3.003-.702.659 0 1.226-.49 1.355-1.125A2.064 2.064 0 0 1 10.366 3h3.268c.988 0 1.839.685 2.033 1.636.129.635.696 1.125 1.355 1.125 1.38.06 2.282.23 3.003.702.485.318.902.727 1.226 1.204.749 1.1.749 2.632.749 5.697 0 3.064 0 4.596-.749 5.697a4.408 4.408 0 0 1-1.226 1.204C18.904 21 17.343 21 14.222 21ZM15.27 9.6a.75.75 0 0 0-1.5 0v.143a3.92 3.92 0 0 0-4.54 6.267 3.918 3.918 0 0 0 6.662-2.326.75.75 0 0 0-1.49-.17 2.418 2.418 0 1 1-1.72-2.595.75.75 0 0 0 .473 1.415l1.52-.32a.75.75 0 0 0 .595-.734V9.6Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCameraRotate;
