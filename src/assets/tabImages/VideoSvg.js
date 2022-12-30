import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function VideoSvg(props) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M20 .875C20 .392 19.627 0 19.167 0c-.46 0-.834.392-.834.875v19.25c0 .483.373.875.834.875.46 0 .833-.392.833-.875V.875zM3.077.613C1.791-.356 0 .61 0 2.272v16.594c0 1.614 1.7 2.59 2.994 1.718l11.633-7.836c1.157-.779 1.2-2.537.083-3.378L3.077.613zm-1.41 1.659c0-.237.256-.375.44-.237l11.632 8.758a.3.3 0 01-.012.482L2.094 19.111c-.184.124-.427-.015-.427-.245V2.271z"
        fill={props.focused ? '#32A7E2' : '#2D303E'}
      />
    </Svg>
  );
}

export default VideoSvg;
