import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartBroken = (props: SVGProps<SVGSVGElement>) => {
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
        d="M5.624 4.424C3.965 5.182 2.75 6.986 2.75 9.137c0 2.197.9 3.891 2.188 5.343 1.063 1.196 2.349 2.188 3.603 3.154.298.23.594.459.885.688.526.415.995.778 1.448 1.043.207.12.395.212.568.275l.727-2.91-1.7-1.7a.75.75 0 0 1-.038-1.018l2.466-2.878-2.833-2.024a.75.75 0 0 1-.235-.946l1.256-2.51c-1.943-1.792-3.946-1.922-5.46-1.23ZM12.62 5.94l-1.162 2.322 2.979 2.128a.75.75 0 0 1 .133 1.098l-2.548 2.973 1.51 1.509a.75.75 0 0 1 .197.712l-.683 2.73.081-.047c.453-.265.922-.628 1.448-1.043.29-.23.587-.458.885-.687 1.254-.968 2.54-1.959 3.603-3.155 1.289-1.452 2.188-3.146 2.188-5.343 0-2.15-1.215-3.955-2.874-4.713-1.592-.727-3.723-.546-5.757 1.516ZM12 4.46C9.688 2.39 7.099 2.1 5 3.059 2.786 4.074 1.25 6.426 1.25 9.138c0 2.665 1.11 4.699 2.567 6.339 1.166 1.313 2.593 2.412 3.854 3.382.286.22.563.434.826.642.513.404 1.063.834 1.62 1.16.557.325 1.193.59 1.883.59s1.326-.265 1.883-.59c.558-.326 1.107-.756 1.62-1.16.263-.208.54-.422.826-.642 1.26-.97 2.688-2.07 3.854-3.382 1.457-1.64 2.567-3.674 2.567-6.339 0-2.712-1.535-5.064-3.75-6.077-2.099-.96-4.688-.67-7 1.399Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHeartBroken;
