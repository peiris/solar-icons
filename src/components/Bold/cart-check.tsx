import * as React from "react";
import type { SVGProps } from "react";
const SvgCartCheck = (props: SVGProps<SVGSVGElement>) => {
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
        d="M3.04 2.292a.75.75 0 0 0-.497 1.416l.261.091c.668.235 1.107.39 1.43.549.303.149.436.27.524.398.09.132.16.314.2.677.04.38.042.875.042 1.615V9.64c0 2.942.063 3.912.93 4.826.866.914 2.26.914 5.05.914h5.302c1.561 0 2.342 0 2.893-.45.552-.45.71-1.214 1.025-2.742l.5-2.425c.347-1.74.52-2.609.076-3.186S18.816 6 17.131 6H6.492a9.033 9.033 0 0 0-.043-.738c-.054-.497-.17-.95-.452-1.362-.284-.416-.662-.682-1.103-.899-.412-.202-.936-.386-1.552-.603l-.302-.106Zm12.477 6.165c.3.286.312.76.026 1.06l-2.857 3a.75.75 0 0 1-1.086 0l-1.143-1.2a.75.75 0 1 1 1.086-1.034l.6.63 2.314-2.43a.75.75 0 0 1 1.06-.026Z"
        clipRule="evenodd"
      />
      <path
        fill="currentColor"
        d="M7.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM16.5 18a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"
      />
    </svg>
  );
};
export default SvgCartCheck;
