import * as React from "react";
import type { SVGProps } from "react";
const SvgBombEmoji = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12 16.75a.75.75 0 0 0 0-1.5h-2a.75.75 0 0 0 0 1.5h2ZM14 12.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5.448-1.5 1-1.5 1 .672 1 1.5ZM9 14c.552 0 1-.672 1-1.5S9.552 11 9 11s-1 .672-1 1.5.448 1.5 1 1.5Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.717 2.078c-.436-1.104-1.998-1.104-2.434 0L16.66 3.66l-1.582.623c-1.104.436-1.104 1.998 0 2.434l.82.323-1.119 1.12a8.25 8.25 0 1 0 1.06 1.06l1.12-1.119.324.821c.436 1.104 1.998 1.104 2.434 0l.623-1.582 1.582-.623c1.104-.436 1.104-1.998 0-2.434L20.34 3.66l-.623-1.582Zm-1.693 2.21.476-1.206.476 1.206c.133.337.4.603.736.736l1.206.476-1.206.476c-.337.133-.603.4-.736.736L18.5 7.918l-.476-1.206a1.308 1.308 0 0 0-.736-.736L16.082 5.5l1.206-.476c.337-.133.603-.4.736-.736ZM2.75 14.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgBombEmoji;
