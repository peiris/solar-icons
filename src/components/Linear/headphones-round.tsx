import * as React from "react";
import type { SVGProps } from "react";
const SvgHeadphonesRound = (props: SVGProps<SVGSVGElement>) => {
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
        stroke="currentColor"
        
        d="M21 17v-5a9 9 0 1 0-18 0v5"
      />
      <path
        stroke="currentColor"
        strokeLinecap="round"
        
        d="M22 15.5v2M2 15.5v2"
      />
      <path
        stroke="currentColor"
        
        d="M8 13.845c0-.765 0-1.147-.175-1.413a1.015 1.015 0 0 0-.34-.322c-.271-.156-.637-.12-1.368-.048-1.232.121-1.848.182-2.29.514a2.055 2.055 0 0 0-.55.63C3 13.697 3 14.34 3 15.629v1.565c0 1.275 0 1.913.282 2.406.106.184.238.35.392.492.413.38 1.014.5 2.218.736.847.167 1.271.251 1.584.075a1.01 1.01 0 0 0 .3-.259C8 20.356 8 19.908 8 19.01v-5.165ZM16 13.845c0-.765 0-1.147.175-1.413.088-.133.204-.244.34-.322.271-.156.637-.12 1.368-.048 1.232.121 1.848.182 2.29.514.223.169.41.383.55.63.277.49.277 1.133.277 2.422v1.565c0 1.275 0 1.913-.282 2.406-.105.184-.238.35-.392.492-.413.38-1.014.5-2.218.736-.847.167-1.271.251-1.584.075a1.008 1.008 0 0 1-.3-.259C16 20.356 16 19.908 16 19.01v-5.165Z"
      />
    </svg>
  );
};
export default SvgHeadphonesRound;
