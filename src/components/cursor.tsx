import * as React from "react";
import type { SVGProps } from "react";
const SvgCursor = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      role="img"
      className={props.className ? props.className + " h-6 w-6" : "h-6 w-6"}
    >
      <path d="m16.574 19.2-3.938-3.938-1.203 1.202c-1.23 1.232-1.846 1.847-2.508 1.702-.662-.146-.963-.963-1.565-2.596l-2.007-5.45C4.152 6.861 3.55 5.232 4.39 4.392c.84-.84 2.47-.24 5.73.962l5.45 2.006c1.633.602 2.45.903 2.596 1.565.145.662-.47 1.277-1.702 2.508l-1.202 1.203 3.938 3.938c.408.408.612.612.706.84.125.303.125.643 0 .947-.094.227-.298.431-.706.839s-.612.612-.84.706a1.238 1.238 0 0 1-.947 0c-.227-.094-.43-.298-.839-.706Z" />
    </svg>
  );
};
export default SvgCursor;
