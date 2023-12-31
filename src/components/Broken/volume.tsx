import * as React from "react";
import type { SVGProps } from "react";
const SvgVolume = (props: SVGProps<SVGSVGElement>) => {
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
        strokeLinecap="round"
        
        d="M5.959 8.577a3.215 3.215 0 0 1 1.381-1.3C7.94 7 8.626 7 10 7c.512 0 .768 0 1.016-.042.245-.042.485-.113.712-.214.23-.101.444-.242.871-.524l.22-.144C15.36 4.399 16.632 3.56 17.7 3.925c.205.07.403.17.58.295.922.648.993 2.157 1.133 5.174A68.21 68.21 0 0 1 19.5 12c0 .532-.035 1.488-.087 2.605-.14 3.018-.21 4.526-1.133 5.175a2.313 2.313 0 0 1-.58.295c-1.067.364-2.339-.474-4.882-2.151l-.219-.144c-.427-.282-.64-.423-.871-.525a2.998 2.998 0 0 0-.712-.213C10.768 17 10.512 17 10 17c-1.374 0-2.06 0-2.66-.277a3.215 3.215 0 0 1-1.381-1.3c-.314-.582-.35-1.186-.424-2.395-.011-.179-.02-.356-.026-.528"
      />
    </svg>
  );
};
export default SvgVolume;
