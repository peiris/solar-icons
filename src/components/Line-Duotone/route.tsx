import * as React from "react";
import type { SVGProps } from "react";
const SvgRoute = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        
        d="M6.142 6.142C8.904 3.381 10.284 2 12 2c1.716 0 3.096 1.38 5.858 4.142C20.619 8.904 22 10.284 22 12c0 1.716-1.38 3.096-4.142 5.858C15.096 20.619 13.716 22 12 22c-1.716 0-3.096-1.38-5.858-4.142C3.381 15.096 2 13.716 2 12c0-1.716 1.38-3.096 4.142-5.858Z"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M8.25 14a.75.75 0 0 0 1.5 0h-1.5ZM15 12l.53.53a.75.75 0 0 0 0-1.06L15 12Zm-1.47-2.53a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm-1.06 4a.75.75 0 1 0 1.06 1.06l-1.06-1.06ZM11 12.75h4v-1.5h-4v1.5Zm4.53-1.28-2-2-1.06 1.06 2 2 1.06-1.06Zm-1.06 0-2 2 1.06 1.06 2-2-1.06-1.06ZM9.75 14c0-.493.002-.787.03-.997a.705.705 0 0 1 .042-.177l.001-.003-1.06-1.06c-.31.309-.422.684-.47 1.04-.045.334-.043.747-.043 1.197h1.5ZM11 11.25c-.45 0-.863-.002-1.197.043-.356.048-.731.16-1.04.47l1.06 1.06.003-.001a.704.704 0 0 1 .177-.042c.21-.028.504-.03.997-.03v-1.5Z"
      />
    </svg>
  );
};
export default SvgRoute;
