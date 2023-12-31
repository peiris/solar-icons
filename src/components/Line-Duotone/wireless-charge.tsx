import * as React from "react";
import type { SVGProps } from "react";
const SvgWirelessCharge = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M12.065 18A7.845 7.845 0 0 0 20 10.065c-.036-4.419-3.646-8.03-8.065-8.065A7.846 7.846 0 0 0 4 9.935c.036 4.419 3.646 8.03 8.065 8.065Z"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        
        d="M12.857 7 10 10h4l-2.857 3"
        opacity={0.5}
      />
      <path
        fill="currentColor"
        d="M11.25 22a.75.75 0 0 0 1.5 0h-1.5Zm-.133-1.076-.287.693.287-.693Zm-.54-.541-.694.287.693-.287Zm2.847 0 .693.287-.693-.287Zm-.541.54.287.694-.287-.693ZM11.25 21v1h1.5v-1h-1.5Zm1.5-3v1.5h1.5V18h-1.5Zm-1.5 1.5V18h-1.5v1.5h1.5Zm.75.75c-.243 0-.388 0-.496-.008-.101-.007-.114-.017-.1-.011l-.574 1.386c.199.082.394.11.572.122.17.011.375.011.598.011v-1.5Zm-2.25-.75c0 .223 0 .427.011.598.012.178.04.373.122.572l1.386-.574c.006.014-.004.001-.011-.1a8.258 8.258 0 0 1-.008-.496h-1.5Zm1.654.731a.25.25 0 0 1-.135-.135l-1.386.574c.178.428.519.77.947.947l.574-1.386Zm1.346-.731c0 .243 0 .388-.008.496-.007.101-.017.114-.011.1l1.386.574c.082-.199.11-.394.122-.572.011-.17.011-.375.011-.598h-1.5ZM12 21.75c.223 0 .427 0 .598-.011.178-.012.373-.04.572-.122l-.574-1.386c.014-.006.001.004-.1.011a8.258 8.258 0 0 1-.496.008v1.5Zm.731-1.654a.25.25 0 0 1-.135.135l.574 1.386a1.75 1.75 0 0 0 .947-.947l-1.386-.574Z"
        opacity={0.5}
      />
    </svg>
  );
};
export default SvgWirelessCharge;
