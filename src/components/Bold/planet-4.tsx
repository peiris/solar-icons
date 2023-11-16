import * as React from "react";
import type { SVGProps } from "react";
const SvgPlanet4 = (props: SVGProps<SVGSVGElement>) => {
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
        d="M17.846 15.572a8.04 8.04 0 0 0-.152-3.773l-.738-.045h-.008l-.039-.002a8.8 8.8 0 0 0-.845.029c-.582.047-1.406.164-2.353.442-.194.057-.419.161-.725.316l-.191.098c-.25.128-.541.277-.854.417-.813.364-1.83.696-3.157.696-1.893 0-3.453-.54-4.537-1.075a9.953 9.953 0 0 1-1.264-.743 7.206 7.206 0 0 1-.436-.328l-.027-.022-.008-.008-.003-.002-.001-.001.484-.557-.485.556-.102-.089a8.059 8.059 0 0 0-.305 3.784l.37-.015.03.75-.03-.75h.031a7.124 7.124 0 0 1 .365-.005c.243.002.588.01 1.003.037a15.84 15.84 0 0 1 3.086.498c.356.098.709.257 1.038.412l.23.11c.265.126.53.253.825.375a6.934 6.934 0 0 0 2.771.573c2.142 0 4.332-.864 5.32-1.407l.657-.361.05.09Z"
      />
      <path
        fill="currentColor"
        d="M17.202 17.486c-1.273.585-3.316 1.264-5.383 1.264a8.432 8.432 0 0 1-3.348-.688c-.333-.14-.643-.287-.912-.415l-.206-.099c-.329-.154-.576-.261-.794-.32a14.35 14.35 0 0 0-2.788-.45 15.196 15.196 0 0 0-1.224-.03l-.014.001h-.002l-.045.002a8.003 8.003 0 0 0 14.716.735ZM3.043 10.047l.449.392.001.001.013.01.063.052c.058.046.15.115.27.2.244.168.607.398 1.073.628.934.462 2.266.92 3.872.92 1.057 0 1.862-.26 2.544-.565.273-.122.518-.247.764-.374l.216-.11c.306-.155.64-.317.98-.417a13.33 13.33 0 0 1 2.654-.498 10.238 10.238 0 0 1 1.013-.033l.062.002.019.001h.01l-.046.748.046-.747.027.001A7.999 7.999 0 0 0 10 6c-2.98 0-5.58 1.63-6.957 4.047Z"
      />
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M20.53 4.045a2.006 2.006 0 0 0-.306-.53c.326-.091.549-.097.606.003.058.1-.058.29-.3.527ZM17.106 6.02c-.326.091-.548.097-.606-.003-.058-.1.058-.29.3-.527a2.018 2.018 0 0 0 .306.53Zm0 0c.455-.126 1.113-.418 1.81-.82.695-.402 1.277-.825 1.614-1.156a2 2 0 0 1-3.424 1.976Zm-.306-.53a2 2 0 0 1 3.424-1.977c-.455.127-1.113.419-1.809.82-.696.403-1.278.826-1.615 1.157Z"
        clipRule="evenodd"
      />
    </svg>
  );
};
export default SvgPlanet4;