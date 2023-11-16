import * as React from "react";
import type { SVGProps } from "react";
const SvgCrown = (props: SVGProps<SVGSVGElement>) => {
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
      <path d="m19.87 12.388-.745-.08.746.08Zm-.183 1.705.746.08-.746-.08Zm-15.374 0-.746.08.746-.08Zm-.184-1.705.746-.08-.746.08Zm4.631-1.454.655.365-.655-.365Zm1.79-3.209-.655-.365.655.365Zm2.9 0-.655.366.656-.366Zm1.79 3.209.655-.365-.655.365Zm.764 1.025-.303.687.303-.687Zm1.467-.714-.53-.531.53.531Zm-1.018.777-.102-.743.102.743Zm-9.923-.777-.53.532.53-.532Zm1.017.777.102-.743-.102.743Zm.45-.063.301.687-.302-.687Zm-2.285 8.194.5-.559-.5.56Zm12.576 0-.5-.559.5.56Zm.576-10.173.568-.49-.567.49Zm-5.956-3.197-.341-.668.34.668Zm-1.816 0 .341-.668-.34.668Zm8.033 5.525-.183 1.705 1.49.16.184-1.704-1.491-.16Zm-6.037 7.942h-2.176v1.5h2.176v-1.5Zm-8.03-6.237-.183-1.705-1.491.16.183 1.705 1.492-.16Zm4.357-2.714 1.79-3.208-1.31-.73-1.79 3.208 1.31.73Zm3.38-3.208 1.79 3.208 1.31-.73-1.79-3.209-1.31.73Zm1.79 3.208c.162.29.31.56.455.765.149.211.351.445.662.582l.604-1.373c.056.024.046.05-.039-.071a8.22 8.22 0 0 1-.372-.633l-1.31.73Zm2.356-.585c-.258.258-.412.41-.533.507-.115.093-.117.066-.057.058l.205 1.486c.336-.047.595-.216.796-.378.195-.158.412-.376.648-.61l-1.059-1.063Zm-1.24 1.932c.269.118.565.159.855.119l-.205-1.486a.083.083 0 0 1-.045-.006l-.605 1.373Zm-9.7-.87c.235.235.452.453.647.61.201.164.46.332.796.379l.205-1.486c.06.008.058.035-.057-.058a8.265 8.265 0 0 1-.533-.507L6 11.777Zm2.104-1.207a8.23 8.23 0 0 1-.373.633c-.084.12-.094.095-.038.07l.604 1.374c.31-.137.514-.37.662-.582.144-.206.293-.475.455-.765l-1.31-.73Zm-.661 2.196c.29.04.586-.001.854-.12l-.604-1.372a.083.083 0 0 1-.045.006l-.205 1.486Zm3.468 7.485c-1.438 0-2.445-.001-3.213-.1-.748-.095-1.17-.273-1.487-.556l-1 1.118c.63.564 1.39.81 2.296.926.886.113 2.006.112 3.404.112v-1.5Zm-7.345-6.077c.148 1.378.266 2.727.466 3.821.101.552.229 1.072.405 1.523.175.448.417.875.774 1.195l1-1.118c-.116-.104-.248-.294-.377-.623a6.926 6.926 0 0 1-.326-1.247c-.188-1.022-.297-2.28-.45-3.711l-1.492.16Zm15.375-.16c-.154 1.431-.264 2.689-.45 3.71-.093.507-.2.922-.327 1.248-.129.329-.261.52-.377.623l1 1.118c.357-.32.599-.747.774-1.195.176-.451.304-.971.405-1.523.2-1.094.318-2.443.466-3.82l-1.491-.161Zm-5.854 7.737c1.398 0 2.518.001 3.404-.112.907-.116 1.666-.362 2.296-.926l-1-1.118c-.317.283-.739.46-1.487.556-.768.099-1.775.1-3.213.1v1.5ZM10.75 5c0-.69.56-1.25 1.25-1.25v-1.5A2.75 2.75 0 0 0 9.25 5h1.5ZM12 3.75c.69 0 1.25.56 1.25 1.25h1.5A2.75 2.75 0 0 0 12 2.25v1.5ZM20.75 9a.75.75 0 0 1-.75.75v1.5A2.25 2.25 0 0 0 22.25 9h-1.5Zm-1.5 0a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 17.75 9h1.5Zm.75-.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 20 6.75v1.5ZM4 9.75A.75.75 0 0 1 3.25 9h-1.5A2.25 2.25 0 0 0 4 11.25v-1.5ZM3.25 9A.75.75 0 0 1 4 8.25v-1.5A2.25 2.25 0 0 0 1.75 9h1.5ZM4 8.25a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 4 6.75v1.5Zm16 1.5a.9.9 0 0 1-.009 0l-.017 1.5H20v-1.5Zm.616 2.719c.049-.45.091-.843.114-1.171a4.55 4.55 0 0 0-.004-.898l-1.487.2c.015.11.016.29-.005.592-.02.294-.06.657-.11 1.116l1.492.16Zm-.625-2.719a.747.747 0 0 1-.559-.26l-1.135.98c.406.47 1.006.772 1.677.78l.017-1.5Zm-.559-.26A.744.744 0 0 1 19.25 9h-1.5c0 .561.207 1.076.547 1.47l1.135-.98ZM18 11.777c.677-.675 1.026-1.015 1.258-1.159l-.787-1.276c-.42.26-.924.768-1.53 1.372L18 11.777ZM4.75 9a.744.744 0 0 1-.182.49l1.135.98c.34-.394.547-.909.547-1.47h-1.5Zm2.309 1.714c-.606-.604-1.11-1.113-1.53-1.372l-.787 1.276c.232.144.58.484 1.258 1.159l1.059-1.063ZM4.568 9.49a.747.747 0 0 1-.559.26l.017 1.5a2.25 2.25 0 0 0 1.677-.78l-1.135-.98Zm-.559.26a.91.91 0 0 1-.009 0v1.5h.026l-.017-1.5Zm.866 2.558a32.52 32.52 0 0 1-.109-1.116 3.204 3.204 0 0 1-.005-.592l-1.487-.2a4.556 4.556 0 0 0-.004.898c.023.328.065.72.114 1.17l1.491-.16ZM13.25 5c0 .485-.276.907-.683 1.115l.681 1.336A2.75 2.75 0 0 0 14.75 5h-1.5Zm-.683 1.115c-.17.086-.361.135-.567.135v1.5a2.74 2.74 0 0 0 1.249-.3l-.682-1.335Zm1.538 1.245c-.206-.37-.391-.703-.561-.975l-1.272.795c.146.234.31.53.523.91l1.31-.73ZM12 6.25c-.206 0-.398-.05-.567-.135l-.681 1.336c.375.191.8.299 1.248.299v-1.5Zm-.567-.135A1.25 1.25 0 0 1 10.75 5h-1.5a2.75 2.75 0 0 0 1.502 2.45l.681-1.335Zm-.228 1.976c.212-.382.377-.677.523-.91l-1.272-.796c-.17.272-.355.605-.561.975l1.31.73ZM5 17.5h14" />
    </svg>
  );
};
export default SvgCrown;