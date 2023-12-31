import * as React from "react";
import type { SVGProps } from "react";
const SvgChatSquareCheck = (props: SVGProps<SVGSVGElement>) => {
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
        d="m13.087 21.388.542-.916c.42-.71.63-1.066.968-1.262.338-.197.763-.204 1.613-.219 1.256-.021 2.043-.098 2.703-.372a5 5 0 0 0 2.706-2.706C22 14.995 22 13.83 22 11.5v-1c0-3.273 0-4.91-.737-6.112a5 5 0 0 0-1.65-1.651C18.41 2 16.773 2 13.5 2h-3c-3.273 0-4.91 0-6.112.737a5 5 0 0 0-1.651 1.65C2 5.59 2 7.228 2 10.5v1c0 2.33 0 3.495.38 4.413a5 5 0 0 0 2.707 2.706c.66.274 1.447.35 2.703.372.85.015 1.275.022 1.613.219.337.196.548.551.968 1.262l.542.916c.483.816 1.69.816 2.174 0ZM15.53 8.47a.75.75 0 0 1 0 1.06l-4 4a.75.75 0 0 1-1.05.011l-2-1.92a.75.75 0 1 1 1.04-1.082l1.47 1.411 3.48-3.48a.75.75 0 0 1 1.06 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgChatSquareCheck;
