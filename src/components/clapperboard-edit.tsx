import * as React from "react";
import type { SVGProps } from "react";
const SvgClapperboardEdit = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M21.998 10.5c-.016-3.732-.162-5.735-1.463-7.036C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464C2 4.93 2 7.286 2 12c0 4.714 0 7.071 1.464 8.535 1.241 1.241 3.123 1.43 6.536 1.46M21.5 8h-19M10.5 2.5 7 8M17 2.5 13.5 8M18.562 13.935l.417-.417a1.77 1.77 0 1 1 2.503 2.503l-.417.417m-2.503-2.503s.052.887.834 1.669c.782.782 1.669.834 1.669.834m-2.503-2.503-3.835 3.835c-.26.26-.39.39-.5.533a2.948 2.948 0 0 0-.338.545c-.078.164-.136.338-.252.686l-.372 1.116-.12.36m7.92-4.572-3.835 3.835c-.26.26-.39.39-.533.5a2.948 2.948 0 0 1-.545.338c-.164.078-.338.136-.686.252l-1.116.372-.36.12m0 0-.362.12a.477.477 0 0 1-.604-.603l.12-.361m.845.844-.844-.844" />
    </svg>
  );
};
export default SvgClapperboardEdit;
