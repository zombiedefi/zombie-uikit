import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="136" height="34" viewBox="0 0 136 34" {...props}>
      <defs>
        <filter id="u47apuouga">
          <feColorMatrix
            in="SourceGraphic"
            values="0 0 0 0 0.219608 0 0 0 0 0.541176 0 0 0 0 0.968627 0 0 0 1.000000 0"
          />
        </filter>
      </defs>
      <g fill="none" fill-rule="evenodd">
        <g>
          <g>
            <text fill="#414859" font-size="20" font-weight="500" transform="translate(-56 -16) translate(56 16)">
              <tspan x="38" y="24" style={{ fontFamily: "Rubik Medium" }}>
                Zombie{" "}
              </tspan>{" "}
              <tspan x="85.62" y="24" font-family="Rubik Light" font-weight="300">
                Defi
              </tspan>
            </text>
            <g>
              <g fill="#388af7">
                <path
                  d="M.358 13.832C.543 6.206 6.875.173 14.501.358c7.627.185 13.66 6.517 13.474 14.143-.012.483-.174.925-.473 1.288-.286.347-.656.575-1.022.728-.711.297-1.602.39-2.485.396-3.809.026-7.117 3.302-7.333 7.166-.05.901-.204 1.818-.592 2.539-.201.373-.483.727-.879.984-.404.264-.868.385-1.36.373C6.207 27.79.174 21.458.359 13.832z"
                  transform="translate(2.833 2.833)"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </Svg>

    // <Svg viewBox="0 0 205 26" {...props}>
    //   <image width="205" height="26" href={isDark ? '/images/egg/LogoTextNewDark.png' : '/images/egg/LogoTextNewWhite.png'}/>
    // </Svg>
  );
};

export default Logo;
