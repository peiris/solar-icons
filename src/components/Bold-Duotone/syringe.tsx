import * as React from "react";
import type { SVGProps } from "react";
const SvgSyringe = (props: SVGProps<SVGSVGElement>) => {
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
      <g fill="currentColor" opacity={0.3}>
        <path d="M17.804 9.11 14.89 6.196c-.8-.8-1.2-1.2-1.654-1.365a2.182 2.182 0 0 0-1.492 0c-.455.165-.855.565-1.654 1.365l-4.543 4.543a5.455 5.455 0 0 0 7.714 7.714l4.543-4.543c.8-.8 1.2-1.2 1.365-1.654a2.182 2.182 0 0 0 0-1.492c-.165-.455-.565-.855-1.365-1.654Z" />
        <path
          fillRule="evenodd"
          d="M16.556 3.233a.795.795 0 0 1 1.125 0l3.086 3.086a.796.796 0 1 1-1.125 1.125l-3.086-3.086a.796.796 0 0 1 0-1.125Z"
          clipRule="evenodd"
        />
      </g>
      <path
        fill="currentColor"
        d="m17.73 13.985-7.715-7.714L8.89 7.396l7.714 7.714 1.125-1.125ZM5.026 17.85a5.5 5.5 0 0 0 1.125 1.125l-1.793 1.792a.796.796 0 1 1-1.125-1.125l1.793-1.792ZM16.91 8.215 15.783 7.09l1.752-1.752 1.125 1.125-1.752 1.752ZM15.367 16.348l-3.06-3.06a.796.796 0 1 0-1.126 1.124l3.061 3.06 1.125-1.124ZM13.631 18.084l-1.746-1.746a.795.795 0 1 0-1.125 1.125l1.672 1.672c.293-.196.571-.423.83-.682l.37-.37Z"
      />
    </svg>
  );
};
export default SvgSyringe;
