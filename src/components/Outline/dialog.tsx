import * as React from "react";
import type { SVGProps } from "react";
const SvgDialog = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.989 5.308a7.25 7.25 0 0 1 13.109 6.202c-.11.239-.131.465-.082.647l.127.476c.408 1.524-.986 2.918-2.51 2.51l-.476-.127a.882.882 0 0 0-.467.015 8.751 8.751 0 0 1-12.464 6.865.923.923 0 0 0-.633-.081l-1.226.328c-1.524.408-2.918-.986-2.51-2.51l.328-1.226a.924.924 0 0 0-.081-.633A8.751 8.751 0 0 1 8.989 5.308Zm1.746-.028a8.751 8.751 0 0 1 8.001 8.222 2.28 2.28 0 0 1 .808.065l.476.127a.55.55 0 0 0 .674-.674l-.127-.476c-.157-.587-.055-1.173.166-1.658a5.75 5.75 0 0 0-9.998-5.606ZM10 6.75a7.25 7.25 0 0 0-6.543 10.376 2.42 2.42 0 0 1 .177 1.668l-.328 1.226a.55.55 0 0 0 .673.674l1.227-.328a2.42 2.42 0 0 1 1.668.177A7.25 7.25 0 1 0 10 6.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM11 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM14.5 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"
      />
    </svg>
  );
};
export default SvgDialog;
