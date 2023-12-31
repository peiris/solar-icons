import * as React from "react";
import type { SVGProps } from "react";
const SvgPills = (props: SVGProps<SVGSVGElement>) => {
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
        d="M7.592 11.282a5.437 5.437 0 1 1 7.69-7.69l1.922 1.923-.096.495-.001.009-.013.054a4.106 4.106 0 0 1-.07.244c-.07.219-.19.545-.385.948-.388.806-1.076 1.923-2.264 3.11-1.188 1.189-2.304 1.876-3.11 2.265-.403.194-.73.313-.948.383a4.157 4.157 0 0 1-.298.084l-.009.002-.495.095-1.923-1.923ZM13.53 4.47a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 1 0 1.06-1.06l-1.5-1.5Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="m18.452 6.774.003-.008 1.953 1.952a5.437 5.437 0 1 1-7.69 7.69l-1.952-1.953.007-.003a8.87 8.87 0 0 0 1.143-.461c.943-.455 2.202-1.236 3.52-2.554 1.318-1.319 2.1-2.577 2.554-3.52.227-.471.373-.863.462-1.143ZM5.286 10.648a6 6 0 1 0 8.067 8.067 6.937 6.937 0 0 1-1.695-1.247l-5.126-5.126a6.936 6.936 0 0 1-1.246-1.694Z"
      />
    </svg>
  );
};
export default SvgPills;
