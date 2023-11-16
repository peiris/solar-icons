import * as React from "react";
import type { SVGProps } from "react";
const SvgCity = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="M3 22V12c0-1.886 0-2.828.586-3.414C4.172 8 5.114 8 7 8c1.886 0 2.828 0 3.414.586C11 9.172 11 10.114 11 12" />
      <path d="M17 22v-6c0-1.886 0-2.828-.586-3.414C15.828 12 14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586C7 13.172 7 14.114 7 16v6" />
      <path d="M21 22V7.772c0-1.34 0-2.011-.356-2.525-.356-.514-.984-.75-2.24-1.22-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12M4 8V6.5c0-.943 0-1.414.293-1.707C4.586 4.5 5.057 4.5 6 4.5h2c.943 0 1.414 0 1.707.293C10 5.086 10 5.557 10 6.5V8M7 4V2M22 22H2M10 15h4M10 18h4" />
    </svg>
  );
};
export default SvgCity;
