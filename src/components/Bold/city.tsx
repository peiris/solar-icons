import * as React from "react";
import type { SVGProps } from "react";
const SvgCity = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.707 4.793C9.414 4.5 8.943 4.5 8 4.5h-.25V3a.75.75 0 0 0-1.5 0v1.5H6c-.943 0-1.414 0-1.707.293C4 5.086 4 5.557 4 6.5v.204c.202-.053.406-.09.606-.117C5.25 6.5 6.045 6.5 6.91 6.5h.179c.865 0 1.659 0 2.304.087.2.026.404.064.606.117V6.5c0-.943 0-1.414-.293-1.707Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1V7.772c0-1.34 0-2.011-.356-2.525-.356-.514-.984-.75-2.24-1.22-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V10.5h.09c.865 0 1.659 0 2.304.087.711.095 1.463.32 2.08.938.619.618.844 1.37.94 2.08.086.646.086 1.44.086 2.306v5.339H17V16c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v5.25H5.5v-5.34c0-.865 0-1.659.087-2.304.095-.711.32-1.463.938-2.08.618-.619 1.37-.844 2.08-.94.646-.086 1.44-.086 2.306-.086h.072c-.04-.936-.165-1.51-.569-1.914C9.828 8 8.886 8 7 8c-1.886 0-2.828 0-3.414.586C3 9.172 3 10.114 3 12v9.25H2ZM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCity;