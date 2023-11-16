import * as React from "react";
import type { SVGProps } from "react";
const SvgBatteryLow = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.172 5.172C2 6.343 2 8.229 2 12c0 3.771 0 5.657 1.172 6.828C4.343 20 6.229 20 10 20h1.5c3.771 0 5.657 0 6.828-1.172.944-.943 1.127-2.348 1.163-4.828H20c.943 0 1.414 0 1.707-.293C22 13.414 22 12.943 22 12c0-.943 0-1.414-.293-1.707C21.414 10 20.943 10 20 10h-.509c-.036-2.48-.22-3.885-1.163-4.828C17.157 4 15.271 4 11.5 4H10C6.229 4 4.343 4 3.172 5.172Zm3.464 3.172a.75.75 0 0 1 1.02.292L7 9l.656-.363.001.001.002.004.004.007.01.018.026.053a5.152 5.152 0 0 1 .278.806c.14.551.273 1.364.273 2.474s-.132 1.923-.274 2.474c-.07.275-.143.484-.202.631a2.972 2.972 0 0 1-.102.228l-.01.018-.003.007-.002.003v.002l-.001.001a.75.75 0 0 1-1.317-.719l.005-.01c.007-.015.02-.043.038-.087.035-.087.087-.235.142-.447.108-.424.226-1.111.226-2.101s-.118-1.677-.226-2.101a3.669 3.669 0 0 0-.18-.534l-.005-.01a.75.75 0 0 1 .297-1.01Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBatteryLow;