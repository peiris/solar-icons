import * as React from "react";
import type { SVGProps } from "react";
const SvgRouting3 = (props: SVGProps<SVGSVGElement>) => {
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
      <circle cx={5} cy={5} r={3} />
      <circle cx={19} cy={19} r={3} />
      <path d="M11 4.25a.75.75 0 0 0 0 1.5v-1.5ZM13 19l.53.53a.75.75 0 0 0 0-1.06L13 19Zm4.206-10.313.402.633-.402-.633ZM6.795 15.313l.402.632-.402-.632Zm5.236 1.657a.75.75 0 1 0-1.061 1.06l1.06-1.06Zm-1.061 3a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm5.162-15.72H11v1.5h5.132v-1.5ZM13 18.25H7.868v1.5H13v-1.5Zm3.803-10.195L6.392 14.68l.805 1.265L17.61 9.32l-.806-1.265ZM13.53 18.47l-1.5-1.5-1.06 1.06 1.5 1.5 1.06-1.06Zm-1.06 0-1.5 1.5 1.06 1.06 1.5-1.5-1.06-1.06Zm-4.602-.22c-1.25 0-1.726-1.633-.67-2.305l-.806-1.265c-2.321 1.477-1.275 5.07 1.476 5.07v-1.5Zm8.264-12.5c1.25 0 1.726 1.633.671 2.305l.805 1.265c2.322-1.477 1.275-5.07-1.476-5.07v1.5Z" />
    </svg>
  );
};
export default SvgRouting3;
