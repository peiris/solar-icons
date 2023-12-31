import * as React from "react";
import type { SVGProps } from "react";
const SvgFacemaskCircle = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75a9.25 9.25 0 0 0-9.245 9.545.81.81 0 0 1 .05.02l4.21 1.871 2.85-1.14a5.75 5.75 0 0 1 4.27 0l2.85 1.14 4.21-1.871a.815.815 0 0 1 .05-.02A9.25 9.25 0 0 0 12 2.75Zm9.026 11.281-3.319 1.476-.368 4.048a9.257 9.257 0 0 0 3.687-5.524Zm-5.275 6.427a.74.74 0 0 1 .002-.026l.45-4.943-2.625-1.05a4.25 4.25 0 0 0-3.156 0l-2.624 1.05.449 4.943.002.026A9.219 9.219 0 0 0 12 21.25a9.219 9.219 0 0 0 3.751-.792Zm-9.09-.903-.368-4.048-3.32-1.476a9.257 9.257 0 0 0 3.688 5.524ZM1.25 12C1.25 6.063 6.063 1.25 12 1.25S22.75 6.063 22.75 12 17.937 22.75 12 22.75 1.25 17.937 1.25 12Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M16 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM10 10.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S8.448 9 9 9s1 .672 1 1.5Z"
      />
    </svg>
  );
};
export default SvgFacemaskCircle;
