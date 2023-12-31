import * as React from "react";
import type { SVGProps } from "react";
const SvgGarage = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.495 4.332a2.25 2.25 0 0 0-2.99 0l-6 5.334a2.25 2.25 0 0 0-.755 1.681v9.903h1.5v-5.302c0-.898 0-1.648.08-2.242.084-.628.27-1.195.725-1.65.456-.456 1.023-.642 1.65-.726.595-.08 1.345-.08 2.243-.08h4.104c.899 0 1.648 0 2.242.08.628.084 1.195.27 1.65.726.456.455.642 1.022.726 1.65.08.594.08 1.344.08 2.242v5.302h1.5v-9.903a2.25 2.25 0 0 0-.755-1.681l-6-5.334ZM21.75 21.25v-9.903a3.75 3.75 0 0 0-1.259-2.803l-6-5.333a3.75 3.75 0 0 0-4.982 0l-6 5.333a3.75 3.75 0 0 0-1.259 2.803v9.903H2a.75.75 0 1 0 0 1.5h20a.75.75 0 0 0 0-1.5h-.25Zm-4.5 0V16c0-.964-.002-1.611-.067-2.095-.062-.461-.169-.659-.3-.789-.13-.13-.327-.237-.788-.3-.483-.064-1.131-.066-2.095-.066h-4c-.964 0-1.612.002-2.095.067-.461.062-.659.169-.789.3-.13.13-.237.327-.3.788-.064.484-.066 1.131-.066 2.095v5.25h10.5ZM9.25 9a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4A.75.75 0 0 1 9.25 9Zm-1 6.5a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h6a.75.75 0 1 1 0 1.5H9a.75.75 0 0 1-.75-.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgGarage;
