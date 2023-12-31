import * as React from "react";
import type { SVGProps } from "react";
const SvgBacteria = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 4.25h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 1 1 0-1.5ZM9.743 9.19a.75.75 0 0 1-.64.846h-.006l-.007.002-.02.002a3.114 3.114 0 0 1-.264.016 3.765 3.765 0 0 1-.655-.047c-.52-.082-1.216-.307-1.802-.893-.586-.586-.81-1.282-.894-1.802a3.766 3.766 0 0 1-.03-.919l.002-.02.001-.007a.75.75 0 0 1 1.487.194c-.036.662.311 1.987 1.988 1.987a.75.75 0 0 1 .84.641ZM10.97 7.97a.75.75 0 0 1 1.06 0l1 1a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06ZM15.25 12a.75.75 0 0 0-1.5 0v2a.75.75 0 0 0 1.5 0v-2ZM17.473 17.566l-.002-.002h-.001l-.003-.004-.008-.006-.018-.017a2.126 2.126 0 0 1-.188-.207 2.632 2.632 0 0 1-.345-.575c-.226-.512-.358-1.235-.116-2.14.243-.905.719-1.465 1.17-1.795a2.631 2.631 0 0 1 .786-.393 1.51 1.51 0 0 1 .067-.018l.024-.005.01-.002.004-.001h.002s.002-.001.145.735l-.143-.736a.75.75 0 0 1 .303 1.469h-.003a1.129 1.129 0 0 0-.309.16c-.192.142-.458.419-.607.974-.149.556-.057.928.04 1.146a1.135 1.135 0 0 0 .186.294l.002.002a.75.75 0 0 1-.996 1.12ZM5.607 10.787a.75.75 0 1 0-1.386-.574l-.414 1a.75.75 0 1 0 1.386.574l.414-1ZM14.562 7.915a.75.75 0 0 1-.194-1.487l.09-.01a3.765 3.765 0 0 1 .856.037c.52.083 1.217.307 1.803.893.585.586.81 1.283.893 1.803a3.775 3.775 0 0 1 .03.918c-.056.41-.439.73-.849.674a.75.75 0 0 1-.641-.84c0-1.678-1.325-2.024-1.988-1.988ZM13.882 17.18a.75.75 0 1 0-.921 1.184l1.578 1.228a.75.75 0 1 0 .921-1.184l-1.578-1.228Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M9 11.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5ZM6.75 15a2.25 2.25 0 1 1 4.5 0 2.25 2.25 0 0 1-4.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12ZM12 2.75a9.25 9.25 0 1 0 0 18.5 9.25 9.25 0 0 0 0-18.5Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBacteria;
