import * as React from "react";
import type { SVGProps } from "react";
const SvgUserPlus = (props: SVGProps<SVGSVGElement>) => {
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
      <path fill="currentColor" d="M16 6a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
      <path
        fill="currentColor"
        d="M14.477 21.92c-.726.053-1.547.08-2.477.08-8 0-8-2.015-8-4.5S7.582 13 12 13c2.88 0 5.406.856 6.814 2.141C18.298 15 17.574 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.65 0 2.475.513 2.987.237.238.542.365.964.434Z"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5c0-1.65 0-2.475.513-2.987C14.025 15 14.85 15 16.5 15c1.65 0 2.475 0 2.987.513C20 16.025 20 16.85 20 18.5c0 1.65 0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22Zm.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973v-.973Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgUserPlus;
