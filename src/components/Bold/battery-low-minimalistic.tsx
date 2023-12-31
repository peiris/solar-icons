import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryLowMinimalistic = (props: SVGProps<SVGSVGElement>) => {
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
        d="M2 12c0-3.771 0-5.657 1.172-6.828C4.343 4 6.229 4 10 4h1.5c3.771 0 5.657 0 6.828 1.172C19.5 6.343 19.5 8.229 19.5 12c0 3.771 0 5.657-1.172 6.828C17.157 20 15.271 20 11.5 20H10c-3.771 0-5.657 0-6.828-1.172C2 17.657 2 15.771 2 12Zm4.636-3.656a.75.75 0 0 1 1.02.292L7 9l.656-.363.001.001.002.004.004.007.01.018.026.053a5.152 5.152 0 0 1 .278.806c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a2.972 2.972 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002l-.001.001L7 15l.656.364a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087.035-.087.087-.235.142-.447.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a3.669 3.669 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M21.25 14a.75.75 0 0 0 1.5 0v-4a.75.75 0 0 0-1.5 0v4Z"
      />
    </svg>
  );
};
export default SvgBatteryLowMinimalistic;
