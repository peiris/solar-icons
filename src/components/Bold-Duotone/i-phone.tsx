import * as React from "react";
import type { SVGProps } from "react";
const SvgIPhone = (props: SVGProps<SVGSVGElement>) => {
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
        d="M20 9.801v4.067c0 3.833 0 5.75-1.172 6.941C17.657 22 15.771 22 12 22c-3.771 0-5.657 0-6.828-1.191C4 19.619 4 17.701 4 13.868V9.8c0-3.833 0-5.75 1.172-6.94.375-.383.825-.642 1.386-.819.353-.11.728.047.942.35l.154.236c.634.97.855 1.307 1.368 1.631.11.07.224.132.342.186.591.274 1.273.274 2.636.274 1.363 0 2.044 0 2.636-.274.118-.054.232-.116.342-.186.513-.324.734-.662 1.368-1.631l.154-.235c.2-.305.564-.467.91-.36.577.176 1.036.438 1.418.827C20 4.051 20 5.968 20 9.801Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="M8.25 18.984c0-.417.336-.755.75-.755h6c.414 0 .75.338.75.755a.752.752 0 0 1-.75.754H9a.752.752 0 0 1-.75-.754Z"
      />
    </svg>
  );
};
export default SvgIPhone;
