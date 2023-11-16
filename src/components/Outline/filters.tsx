import * as React from "react";
import type { SVGProps } from "react";
const SvgFilters = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 2.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5ZM5.25 8a6.75 6.75 0 1 1 13.274 1.738A6.752 6.752 0 1 1 12 21.438a6.75 6.75 0 1 1-6.524-11.7A6.76 6.76 0 0 1 5.25 8Zm.77 3.136A5.252 5.252 0 0 0 8 21.25a5.25 5.25 0 0 0 5.079-6.586 6.75 6.75 0 0 1-7.058-3.529Zm8.504 3.126c.148.555.226 1.138.226 1.738a6.723 6.723 0 0 1-1.625 4.393 5.25 5.25 0 1 0 4.855-9.258 6.775 6.775 0 0 1-3.456 3.127Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgFilters;
