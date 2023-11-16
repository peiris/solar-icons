import * as React from "react";
import type { SVGProps } from "react";
const SvgSledgehammer = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m18.66 8.286.368-.368c.342-.343.514-.514.617-.692a1.562 1.562 0 0 0 0-1.562c-.103-.178-.275-.35-.617-.692-.342-.342-.514-.514-.692-.616a1.562 1.562 0 0 0-1.562 0c-.178.102-.35.274-.692.616l-.368.368m-4.419 10.31-5.523 5.524c-.343.343-.514.514-.692.617a1.562 1.562 0 0 1-1.562 0c-.179-.103-.35-.274-.692-.617-.343-.342-.514-.514-.617-.692a1.562 1.562 0 0 1 0-1.562c.103-.178.274-.35.617-.692l5.523-5.523m-.736-.737 4.419 4.42c1.735 1.735 2.603 2.603 3.682 2.603 1.078 0 1.946-.868 3.682-2.604C21.132 14.651 22 13.783 22 12.705c0-1.079-.868-1.947-2.604-3.682l-4.419-4.42C13.242 2.869 12.374 2 11.295 2c-1.078 0-1.946.868-3.682 2.604C5.877 6.34 5.009 7.208 5.009 8.286c0 1.079.868 1.947 2.604 3.682Z" />
    </svg>
  );
};
export default SvgSledgehammer;