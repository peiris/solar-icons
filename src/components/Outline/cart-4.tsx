import * as React from "react";
import type { SVGProps } from "react";
const SvgCart4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M10 13.25a.75.75 0 0 0 0 1.5h4a.75.75 0 1 0 0-1.5h-4Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M14.665 2.33a.75.75 0 0 1 1.006.335l1.813 3.626c.428.022.817.055 1.17.106 1.056.151 1.93.477 2.551 1.245.621.769.757 1.691.684 2.755-.07 1.031-.35 2.332-.698 3.957l-.451 2.107c-.235 1.097-.426 1.986-.666 2.68-.25.725-.58 1.32-1.142 1.775-.562.455-1.214.652-1.974.745-.73.089-1.64.089-2.76.089H9.802c-1.122 0-2.031 0-2.761-.089-.76-.093-1.412-.29-1.974-.745-.563-.455-.892-1.05-1.142-1.774-.24-.695-.43-1.584-.666-2.68l-.451-2.107c-.348-1.626-.627-2.927-.698-3.958-.073-1.064.063-1.986.684-2.755.62-.768 1.494-1.094 2.55-1.245.353-.05.743-.084 1.17-.106L8.33 2.665a.75.75 0 0 1 1.342.67L8.212 6.252c.364-.002.747-.002 1.149-.002h5.278c.402 0 .785 0 1.149.002l-1.459-2.917a.75.75 0 0 1 .335-1.006ZM5.732 7.858l-.403.806a.75.75 0 1 0 1.342.67l.787-1.574c.57-.01 1.22-.011 1.964-.011h5.156c.744 0 1.394 0 1.964.01l.787 1.575a.75.75 0 0 0 1.342-.67l-.403-.806.174.023c.884.127 1.317.358 1.597.703.275.34.41.803.356 1.665H3.605c-.054-.862.081-1.325.356-1.665.28-.345.713-.576 1.597-.703l.174-.023ZM4.288 14.1a81.117 81.117 0 0 1-.481-2.35h16.386c-.12.659-.285 1.43-.482 2.35l-.428 2c-.248 1.155-.42 1.954-.627 2.552-.2.58-.404.886-.667 1.098-.262.212-.605.348-1.212.422-.629.077-1.447.078-2.628.078H9.85c-1.18 0-1.998-.001-2.627-.078-.608-.074-.95-.21-1.212-.422-.263-.212-.468-.519-.667-1.098-.207-.598-.38-1.397-.627-2.552l-.429-2Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgCart4;