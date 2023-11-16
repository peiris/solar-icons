import * as React from "react";
import type { SVGProps } from "react";
const SvgLibrary = (props: SVGProps<SVGSVGElement>) => {
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
        d="M8.672 7.542h6.656c3.374 0 5.062 0 6.01.987.947.987.724 2.511.278 5.56l-.422 2.892c-.35 2.391-.525 3.587-1.422 4.303-.897.716-2.22.716-4.867.716h-5.81c-2.646 0-3.97 0-4.867-.716-.897-.716-1.072-1.912-1.422-4.303l-.422-2.892c-.447-3.049-.67-4.573.278-5.56.948-.987 2.636-.987 6.01-.987ZM8 18c0-.414.373-.75.833-.75h6.334c.46 0 .833.336.833.75s-.373.75-.833.75H8.833c-.46 0-.833-.336-.833-.75Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M8.51 2h6.98c.233 0 .41 0 .567.015 1.108.109 2.014.775 2.399 1.672H5.544c.385-.897 1.292-1.563 2.4-1.672C8.099 2 8.278 2 8.51 2Z"
        opacity={0.4}
      />
      <path
        fill="currentColor"
        d="M6.31 4.723c-1.39 0-2.53.84-2.91 1.953a2.623 2.623 0 0 0-.024.07c.399-.12.813-.199 1.232-.253 1.08-.138 2.446-.138 4.032-.138H15.532c1.586 0 2.952 0 4.032.138.42.054.834.133 1.232.253a2.817 2.817 0 0 0-.023-.07c-.38-1.114-1.52-1.953-2.911-1.953H6.31Z"
        opacity={0.7}
      />
    </svg>
  );
};
export default SvgLibrary;
