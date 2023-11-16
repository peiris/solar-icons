import * as React from "react";
import type { SVGProps } from "react";
const SvgChefHatHeart = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 10a5 5 0 0 1 5.737-4.946 4.502 4.502 0 0 1 8.526 0A5 5 0 0 1 19 14.584v2.666H5v-2.666A5.001 5.001 0 0 1 2 10Zm9.043 3.67C10.165 13.024 9 11.984 9 11c0-1.673 1.65-2.297 3-1.005 1.35-1.292 3-.668 3 1.005 0 .985-1.165 2.025-2.043 2.67-.42.307-.63.461-.957.461-.328 0-.537-.154-.957-.462Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.586 21.414c-.503-.502-.574-1.267-.584-2.664h13.996c-.01 1.397-.081 2.162-.584 2.664C17.828 22 16.886 22 15 22H9c-1.886 0-2.828 0-3.414-.586Z"
      />
    </svg>
  );
};
export default SvgChefHatHeart;
