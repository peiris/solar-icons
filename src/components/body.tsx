import * as React from "react";
import type { SVGProps } from "react";
const SvgBody = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="M12.062 22h-.124c-.76 0-1.139 0-1.469-.15-.33-.149-.567-.428-1.041-.986l-2.382-2.803c-.465-.547-.697-.82-.818-1.145-.12-.324-.12-.675-.12-1.376v-5.263c0-.685 0-1.027-.148-1.328-.147-.301-.423-.524-.975-.97l-.208-.167C3.595 6.858 3.004 6.38 3 5.69 2.996 5 3.52 4.566 4.568 3.7c.159-.132.316-.255.468-.364.573-.41 1.402-.863 1.986-1.166a1.581 1.581 0 0 1 1.394-.016l.264.124c.07.032.128.082.171.142 1.498 2.116 4.8 2.116 6.298 0a.437.437 0 0 1 .171-.142l.264-.124a1.581 1.581 0 0 1 1.394.016c.584.303 1.413.756 1.986 1.166.152.11.31.232.468.363C20.48 4.566 21.004 5 21 5.69c-.005.69-.596 1.168-1.777 2.122l-.208.167c-.552.446-.828.669-.975.97-.147.3-.147.643-.147 1.328v5.263c0 .701 0 1.052-.121 1.376-.12.324-.353.598-.818 1.145l-2.382 2.803c-.474.558-.711.837-1.041.987-.33.149-.71.149-1.469.149Z" />
    </svg>
  );
};
export default SvgBody;
