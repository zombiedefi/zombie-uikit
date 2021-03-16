import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g fill="none" fill-rule="evenodd">
        <g fill="#000">
          <g>
            <path
              fill-rule="nonzero"
              d="M9 7.75c.414 0 .75.336.75.75v5c0 .414-.336.75-.75.75s-.75-.336-.75-.75v-5c0-.414.336-.75.75-.75zM9 6c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"
              transform="translate(-3 -3) translate(3 3)"
            />
            <path
              d="M.25 9C.25 4.168 4.168.25 9 .25S17.75 4.168 17.75 9 13.832 17.75 9 17.75.25 13.832.25 9zM9 1.75C4.996 1.75 1.75 4.996 1.75 9S4.996 16.25 9 16.25s7.25-3.246 7.25-7.25S13.004 1.75 9 1.75z"
              transform="translate(-3 -3) translate(3 3)"
            />
          </g>
        </g>
      </g>
    </Svg>
  );
};

export default Icon;
