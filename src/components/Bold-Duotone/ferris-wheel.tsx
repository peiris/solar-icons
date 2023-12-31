import * as React from "react";
import type { SVGProps } from "react";
const SvgFerrisWheel = (props: SVGProps<SVGSVGElement>) => {
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
        d="M9.25 11a2.75 2.75 0 1 1 5.5 0 2.75 2.75 0 0 1-5.5 0Z"
        clipRule="evenodd"
        opacity={0.3}
      />
      <path
        fill="currentColor"
        d="m9.821 12.678-4.976 8.958a.75.75 0 0 0 1.31.728l4.883-8.787a2.757 2.757 0 0 1-1.217-.9ZM12.963 13.577l4.882 8.787a.75.75 0 0 0 1.31-.728l-4.976-8.958c-.31.403-.731.717-1.216.899ZM12 5.25a1.75 1.75 0 1 1 0-3.5 1.75 1.75 0 0 1 0 3.5ZM2.75 7.5a1.75 1.75 0 1 1 3.5 0 1.75 1.75 0 0 1-3.5 0ZM19.5 5.75a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM19.5 14.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM4.5 14.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM10.25 19.5a1.75 1.75 0 1 0 3.5 0 1.75 1.75 0 0 0-3.5 0Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M10.637 4.597a1.743 1.743 0 0 1-.335-1.524 3.725 3.725 0 0 0-.098.052L5.41 5.739a3.76 3.76 0 0 0-.241.143c.491.204.87.624 1.016 1.143l4.452-2.428ZM4.955 9.19a1.752 1.752 0 0 1-1.498-.285 3.753 3.753 0 0 0-.002.126v4.938c0 .2.016.399.047.593a1.742 1.742 0 0 1 1.48-.245 2.252 2.252 0 0 1-.027-.348V9.19Zm1.295 6.82a1.747 1.747 0 0 1-.653 1.353l4.607 2.512.098.052a1.753 1.753 0 0 1 .335-1.524L6.25 16.01Zm7.113 2.392a1.743 1.743 0 0 1 .335 1.524 3.57 3.57 0 0 0 .096-.05l4.608-2.513a1.747 1.747 0 0 1-.652-1.353l-4.387 2.392Zm5.653-4.084a1.75 1.75 0 0 1 1.48.243c.032-.194.048-.392.048-.592V9.03c0-.042-.001-.083-.003-.125a1.742 1.742 0 0 1-1.497.284v4.779c0 .118-.01.234-.028.349Zm-1.2-7.293c.145-.518.523-.939 1.015-1.142a3.753 3.753 0 0 0-.242-.144l-4.794-2.614a3.57 3.57 0 0 0-.097-.051 1.752 1.752 0 0 1-.335 1.524l4.452 2.427Z"
        clipRule="evenodd"
        opacity={0.3}
      />
    </svg>
  );
};
export default SvgFerrisWheel;
