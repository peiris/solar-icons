import * as React from "react";
import type { SVGProps } from "react";
const SvgHealth = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.25 7a.75.75 0 0 0-1.5 0v1.25H14.5a.75.75 0 0 0 0 1.5h1.25V11a.75.75 0 0 0 1.5 0V9.75h1.25a.75.75 0 0 0 0-1.5h-1.25V7Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M22.75 9.318c0-3.326-1.482-5.808-3.79-6.711-2.135-.837-4.698-.211-6.96 1.906C9.738 2.396 7.175 1.77 5.04 2.607c-2.308.903-3.79 3.385-3.79 6.71 0 2.119 1.13 4.203 2.537 5.997 1.422 1.813 3.21 3.436 4.702 4.647l.134.11c1.2.975 2.068 1.68 3.377 1.68 1.31 0 2.176-.705 3.377-1.68l.134-.11c1.492-1.21 3.28-2.834 4.702-4.647 1.407-1.794 2.537-3.878 2.537-5.996ZM12.548 6.087c2.112-2.259 4.301-2.696 5.866-2.084 1.568.614 2.836 2.41 2.836 5.315 0 1.611-.88 3.364-2.218 5.07-1.324 1.69-3.016 3.232-4.466 4.409-1.393 1.13-1.843 1.453-2.566 1.453-.723 0-1.173-.323-2.566-1.454-1.45-1.176-3.142-2.719-4.466-4.407-1.339-1.707-2.218-3.46-2.218-5.071 0-2.905 1.268-4.7 2.836-5.315 1.565-.612 3.754-.175 5.866 2.084a.75.75 0 0 0 1.096 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgHealth;