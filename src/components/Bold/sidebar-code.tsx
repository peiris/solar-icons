import * as React from "react";
import type { SVGProps } from "react";
const SvgSidebarCode = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 11c0-3.771 0-5.657 1.172-6.828C4.343 3 6.229 3 10 3h4.25v18H10c-3.771 0-5.657 0-6.828-1.172C2 18.657 2 16.771 2 13v-2Zm13.75 9.994V3.006c2.636.027 4.104.191 5.078 1.166C22 5.343 22 7.229 22 11v2c0 3.771 0 5.657-1.172 6.828-.974.975-2.442 1.139-5.078 1.166ZM9.97 15.47a.75.75 0 0 1 1.06 0l1 1a.75.75 0 0 1 0 1.06l-1 1a.75.75 0 1 1-1.06-1.06l.47-.47-.47-.47a.75.75 0 0 1 0-1.06Zm-.268-1.207a.75.75 0 1 0-1.404-.526l-1.5 4a.75.75 0 0 0 1.404.526l1.5-4ZM6.53 13.47a.75.75 0 0 1 0 1.06l-.47.47.47.47a.75.75 0 1 1-1.06 1.06l-1-1a.75.75 0 0 1 0-1.06l1-1a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgSidebarCode;
