import * as React from "react";
import type { SVGProps } from "react";
const SvgAsteroid = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75a9.25 9.25 0 0 0-9.243 9.614 6.75 6.75 0 0 1 7.655 8.75 9.255 9.255 0 0 0 10.517-6.688 6.752 6.752 0 0 1-3.644-10.019A9.204 9.204 0 0 0 12 2.75Zm6.453 2.623a5.253 5.253 0 0 0 2.75 7.562 9.22 9.22 0 0 0-2.75-7.562ZM9.187 22.378A10.76 10.76 0 0 1 1.25 12C1.25 6.063 6.063 1.25 12 1.25c2.575 0 4.94.906 6.792 2.417A10.73 10.73 0 0 1 22.75 12a10.8 10.8 0 0 1-.19 2.025c-.948 4.969-5.315 8.725-10.56 8.725-.972 0-1.916-.13-2.813-.372Zm-.231-1.64a5.25 5.25 0 0 0-6.02-6.88 9.267 9.267 0 0 0 6.02 6.88ZM10.5 6.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM7.25 8.5a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0ZM15 15.75a.25.25 0 1 0 0 .5.25.25 0 0 0 0-.5Zm-1.75.25a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAsteroid;
