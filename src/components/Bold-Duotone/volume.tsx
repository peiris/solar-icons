import * as React from "react";
import type { SVGProps } from "react";
const SvgVolume = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.763 6.192c-.601.416-.902.625-1.238.746v10.124c.336.121.637.33 1.238.746 2.374 1.645 3.56 2.467 4.557 2.11.191-.069.376-.168.541-.29.861-.635.927-2.115 1.058-5.073A70.3 70.3 0 0 0 19 12c0-.521-.033-1.46-.081-2.555-.131-2.958-.197-4.438-1.058-5.073a2.125 2.125 0 0 0-.54-.29c-.997-.357-2.184.465-4.558 2.11Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M5.681 8.163c-.621.789-.64 1.71-.678 3.552a13.778 13.778 0 0 0 0 .57c.038 1.841.057 2.762.678 3.551.113.144.28.315.42.431.763.635 1.771.635 3.788.635.72 0 1.081 0 1.425.093.071.02.142.042.211.067V6.937c-.07.026-.14.048-.211.067-.344.093-.704.093-1.425.093-2.017 0-3.025 0-3.789.635-.14.116-.306.287-.419.431Z"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgVolume;
