import * as React from 'react';
import Svg, {G, Ellipse, Defs, RadialGradient, Stop} from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const EllipsePurple = props => (
  <Svg
    width={231}
    height={97}
    viewBox="0 0 231 97"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G filter="url(#filter0_f_1314_14755)">
      <Ellipse
        cx={80.5}
        cy={62.5}
        rx={70.5}
        ry={11.5}
        fill="url(#paint0_radial_1314_14755)"
      />
    </G>
    <Defs>
      <RadialGradient
        id="paint0_radial_1314_14755"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(79.6296 61.4219) rotate(9.99502) scale(72.4703 25.7182)">
        <Stop offset={0.546875} stopColor="#DB52F0" />
        <Stop offset={1} stopColor="white" stopOpacity={0} />
      </RadialGradient>
    </Defs>
  </Svg>
);
export default EllipsePurple;
