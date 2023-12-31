import * as React from "react";
import type { SVGProps } from "react";
const SvgUserMinusRounded = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={12} cy={6} r={4} fill="currentColor" />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M13.513 21.487C14.025 22 14.85 22 16.5 22c1.65 0 2.475 0 2.987-.513C20 20.975 20 20.15 20 18.5c0-1.65 0-2.475-.513-2.987C18.975 15 18.15 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5c0 1.65 0 2.475.513 2.987Zm2.404-3.57h-.973a.583.583 0 1 0 0 1.166H18.056a.583.583 0 1 0 0-1.166h-2.139Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M15.415 13.507A11.288 11.288 0 0 0 12 13c-3.866 0-7 1.79-7 4 0 2.14 2.942 3.888 6.642 3.995a4.87 4.87 0 0 1-.064-.375c-.078-.578-.078-1.283-.078-2.034v-.172c0-.75 0-1.456.078-2.034.086-.643.293-1.347.874-1.928.581-.582 1.285-.788 1.928-.875a9.635 9.635 0 0 1 1.035-.07Z"
      />
    </svg>
  );
};
export default SvgUserMinusRounded;
