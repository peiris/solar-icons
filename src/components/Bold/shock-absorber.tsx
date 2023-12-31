import * as React from "react";
import type { SVGProps } from "react";
const SvgShockAbsorber = (props: SVGProps<SVGSVGElement>) => {
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
        d="M14 20a2 2 0 1 1-3.323-1.5h-.427a1.75 1.75 0 0 1-1-3.186V6H8c-.943 0-1.414 0-1.707-.293C6 5.414 6 4.943 6 4c0-.943 0-1.414.293-1.707C6.586 2 7.057 2 8 2h8c.943 0 1.414 0 1.707.293C18 2.586 18 3.057 18 4c0 .943 0 1.414-.293 1.707C17.414 6 16.943 6 16 6h-1.25v9.314a1.75 1.75 0 0 1-1 3.186h-.427c.415.366.677.903.677 1.5Zm-.75-14h-2.5v9h2.5V6Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M7.273 7.818a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91Zm0 3.5a.75.75 0 0 1 .91-.545l8 2a.75.75 0 0 1-.365 1.455l-8-2a.75.75 0 0 1-.545-.91ZM20.311 7.472a.75.75 0 0 1-.005 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm-16.622 0a.75.75 0 0 1 1.06-.005l.707.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.005-1.06ZM22 12.25h-2a.75.75 0 0 1 0-1.5h2a.75.75 0 0 1 0 1.5Zm-20.75-.748a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5H2a.75.75 0 0 1-.75-.75Zm4.212 2.271a.75.75 0 0 1-.006 1.061l-.707.7a.75.75 0 1 1-1.055-1.066l.707-.7a.75.75 0 0 1 1.06.005Zm13.076 0a.75.75 0 0 1 1.06-.005l.708.7a.75.75 0 1 1-1.055 1.066l-.707-.7a.75.75 0 0 1-.006-1.06Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgShockAbsorber;
