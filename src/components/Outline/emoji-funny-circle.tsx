import * as React from "react";
import type { SVGProps } from "react";
const SvgEmojiFunnyCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M15.475 9.516c.215.8-.044 1.565-.577 1.707-.534.143-1.14-.39-1.354-1.19-.215-.8.044-1.564.577-1.707.534-.143 1.14.39 1.354 1.19ZM9.68 11.069c.214.8-.044 1.564-.578 1.707-.533.143-1.14-.39-1.354-1.19-.214-.8.044-1.564.578-1.707.533-.143 1.14.39 1.354 1.19Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Zm15.929 1.34a.75.75 0 0 1-.017 1.061c-.17.165-.35.324-.536.476l.218.445a2.25 2.25 0 1 1-4.04 1.982l-.273-.556a8.877 8.877 0 0 1-3.8-.087.75.75 0 1 1 .364-1.455c1.13.283 2.428.286 3.746-.067s2.44-1.005 3.277-1.815a.75.75 0 0 1 1.06.017Zm-3.174 3.005.146.298a.75.75 0 1 0 1.347-.66l-.127-.259a9.284 9.284 0 0 1-1.366.621Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgEmojiFunnyCircle;
