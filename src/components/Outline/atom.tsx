import * as React from "react";
import type { SVGProps } from "react";
const SvgAtom = (props: SVGProps<SVGSVGElement>) => {
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
        d="M13.462 4.047c1.203.822 2.4 1.812 3.54 2.951a24.928 24.928 0 0 1 2.951 3.54c.701-1.377 1.123-2.682 1.253-3.813.165-1.427-.138-2.482-.794-3.137-.655-.656-1.71-.96-3.137-.794-1.131.13-2.436.552-3.813 1.253ZM20.869 12c1.005-1.765 1.645-3.524 1.828-5.103.195-1.69-.13-3.275-1.224-4.37-1.095-1.095-2.68-1.419-4.37-1.224-1.58.183-3.338.823-5.103 1.828-1.765-1.005-3.523-1.645-5.103-1.827-1.69-.195-3.275.128-4.37 1.223-1.094 1.095-1.418 2.68-1.223 4.37.182 1.58.822 3.338 1.828 5.103-1.006 1.765-1.646 3.523-1.828 5.103-.195 1.69.129 3.274 1.224 4.37 1.095 1.094 2.679 1.418 4.37 1.223 1.579-.182 3.337-.822 5.102-1.828 1.765 1.006 3.523 1.646 5.103 1.828 1.69.195 3.275-.129 4.37-1.224 1.095-1.094 1.418-2.679 1.223-4.37-.182-1.579-.822-3.337-1.827-5.102Zm-1.75 0a23 23 0 0 0-3.178-3.941A23 23 0 0 0 12 4.88 23 23 0 0 0 8.06 8.06a22.998 22.998 0 0 0-3.18 3.94 23.004 23.004 0 0 0 3.18 3.942A23 23 0 0 0 12 19.119a22.995 22.995 0 0 0 3.941-3.179A23 23 0 0 0 19.12 12Zm-5.657 7.953a24.937 24.937 0 0 0 3.54-2.952 24.937 24.937 0 0 0 2.951-3.54c.701 1.378 1.123 2.682 1.253 3.814.165 1.427-.138 2.481-.794 3.137-.656.655-1.71.959-3.137.794-1.131-.13-2.436-.552-3.813-1.253Zm-2.924 0A24.928 24.928 0 0 1 6.998 17a24.933 24.933 0 0 1-2.951-3.54c-.7 1.378-1.122 2.682-1.253 3.814-.164 1.427.139 2.481.794 3.137.656.655 1.71.958 3.137.794 1.132-.13 2.436-.552 3.813-1.253Zm-6.491-9.415a24.935 24.935 0 0 1 2.952-3.54 24.933 24.933 0 0 1 3.54-2.951C9.16 3.346 7.856 2.924 6.724 2.794c-1.427-.165-2.481.138-3.137.794-.655.655-.959 1.71-.794 3.137.13 1.131.552 2.436 1.253 3.813ZM12 10.25a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5ZM8.75 12a3.25 3.25 0 1 1 6.5 0 3.25 3.25 0 0 1-6.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgAtom;