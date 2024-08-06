import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect, SvgProps } from "react-native-svg";
const HearthandIcon = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    
  >
    <G clipPath="url(#clip0_1280_3340)">
      <Path
        d="M12 5C13.5 3.5 14.74 3 16.5 3C17.9587 3 19.3576 3.57946 20.3891 4.61091C21.4205 5.64236 22 7.04131 22 8.5C22 10.79 20.49 12.54 19 14L12 21L5 14C3.5 12.55 2 10.8 2 8.5C2 7.04131 2.57946 5.64236 3.61091 4.61091C4.64236 3.57946 6.04131 3 7.5 3C9.26 3 10.5 3.5 12 5ZM12 5L9.0401 7.96C8.83692 8.16171 8.67567 8.40162 8.56562 8.66593C8.45558 8.93023 8.39893 9.2137 8.39893 9.5C8.39893 9.7863 8.45558 10.0698 8.56562 10.3341C8.67567 10.5984 8.83692 10.8383 9.0401 11.04C9.8601 11.86 11.1701 11.89 12.0401 11.11L14.1101 9.21C14.629 8.73919 15.3045 8.47839 16.0051 8.47839C16.7057 8.47839 17.3813 8.73919 17.9001 9.21L20.8601 11.87M18 15L16 13M15 18L13 16"
        stroke="#808080"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_1280_3340">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default HearthandIcon;
