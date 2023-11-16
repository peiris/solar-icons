import * as React from "react";
import type { SVGProps } from "react";
const SvgUserMinusRounded = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 1.25a4.75 4.75 0 1 0 0 9.5 4.75 4.75 0 0 0 0-9.5ZM8.75 6a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.25 18a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.91 21.608c-.61.093-1.251.142-1.91.142-2.04 0-3.922-.47-5.322-1.27C5.3 19.692 4.25 18.49 4.25 17s1.05-2.692 2.428-3.48c1.4-.8 3.283-1.27 5.322-1.27 1.805 0 3.483.368 4.812 1.004a4.75 4.75 0 1 1-2.901 8.355ZM13.75 18a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Zm.668-3.987A4.746 4.746 0 0 0 12.25 18c0 .803.2 1.56.55 2.222-.261.019-.529.028-.8.028-1.827 0-3.444-.425-4.578-1.073C6.267 18.517 5.75 17.72 5.75 17c0-.72.517-1.517 1.672-2.177 1.134-.648 2.751-1.073 4.578-1.073.861 0 1.677.094 2.418.263Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserMinusRounded;
