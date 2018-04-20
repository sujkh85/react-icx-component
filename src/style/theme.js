// 테마쪽에서는 각종 폰트사이즈와 컬러를 정의 합니다.
// styled-component 에서 공통 스타일정의 합니다.
import  {fontSize,fontWeight} from './font';
import { spacing } from './spacing';
import color from './color';

const theme = {
  main: 'mediumseagreen',
  color: {
    default: color.default.color,
    primary: color.primary.color,
    secondary: color.secondary.color,
    disabled: color.disabled.color,
  },
  bg: {
    default: color.default.backgroundColor,
    primary: color.primary.backgroundColor,
    secondary: color.secondary.backgroundColor,
    disabled: color.disabled.backgroundColor,
  },
  ...fontSize,
  ...spacing
};

export default theme