import * as React from "react";
import type { SVGProps } from "react";
const SvgDonutBitten = (props: SVGProps<SVGSVGElement>) => {
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
        d="M12.28 21.554a1.797 1.797 0 0 1 .664-1.926c.493-.364 1.078-.483 1.571-.366.065.016.134 0 .181-.047a.178.178 0 0 0 .017-.233l-.093-.127c-.612-.827-.307-2.09.68-2.834a31.904 31.904 0 0 0-.471-.314l-.178-.116a31.79 31.79 0 0 1-.64-.425c-.582.37-1.271.584-2.01.584a3.74 3.74 0 0 1-2.763-1.214c-.407.221-.883.444-1.374.635-.801.312-1.735.579-2.532.579-1.03 0-2.094-.446-2.92-.9C3.64 18.986 7.469 22 12.002 22c.213 0 .34-.242.28-.446ZM9.75 12a2.25 2.25 0 1 1 3.83 1.602.75.75 0 0 0-.142.126l-.01.012A2.25 2.25 0 0 1 9.75 12Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M19.48 14.795c.707-.523 1.607-.539 2.147-.078.243-.864.373-1.775.373-2.717a9.954 9.954 0 0 0-1.565-5.374l-.905.904a.75.75 0 1 1-1.06-1.06l1-1a.74.74 0 0 1 .058-.053A9.976 9.976 0 0 0 12.001 2a9.953 9.953 0 0 0-5.375 1.565l.904.905a.75.75 0 1 1-1.06 1.06l-1-1a.758.758 0 0 1-.053-.058 9.976 9.976 0 0 0-3.381 8.372c.216.154.484.333.784.512.818.487 1.752.894 2.512.894.516 0 1.243-.187 1.987-.477.42-.163.816-.348 1.145-.524a3.75 3.75 0 1 1 6.646.848l.371.245.17.11c.477.313 1.062.7 1.38 1.018a.747.747 0 0 1 .037.04c.475.059.901.28 1.182.66l.275.373a.086.086 0 0 0 .13.01.089.089 0 0 0 .024-.075c-.078-.586.213-1.249.8-1.683ZM16.45 4.4a.75.75 0 0 1 .15 1.05l-1.5 2a.75.75 0 1 1-1.2-.9l1.5-2a.75.75 0 0 1 1.05-.15Zm-5.98-.93a.75.75 0 0 0 0 1.06l1 1a.75.75 0 1 0 1.06-1.06l-1-1a.75.75 0 0 0-1.06 0ZM8.41 7.56a.75.75 0 0 0 .918.53l1.366-.366a.75.75 0 0 0-.388-1.448l-1.366.366a.75.75 0 0 0-.53.918Zm-2.513-.386a.75.75 0 0 0-.372.993l.585 1.287a.75.75 0 0 0 1.365-.62L6.89 7.545a.75.75 0 0 0-.993-.372Zm10.854 3.964a.75.75 0 0 0 .714-.784L17.4 8.941a.75.75 0 0 0-1.498.07l.066 1.414a.75.75 0 0 0 .784.713Zm1.686.92a.75.75 0 0 0 1.058.068l1.678-1.478a.75.75 0 0 0-.99-1.126L18.503 11a.75.75 0 0 0-.067 1.059ZM6.943 10.896a.75.75 0 0 1 .162 1.048l-.835 1.141a.75.75 0 0 1-1.21-.886l.835-1.14a.75.75 0 0 1 1.048-.163Zm-3.38-2.706a.75.75 0 0 0-.707.79l.078 1.413a.75.75 0 0 0 1.498-.084l-.079-1.412a.75.75 0 0 0-.79-.707Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgDonutBitten;