import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    fontFamily: string;
    maxWidth: string;
    spacing: {
      large: string;
      medium: string;
      small: string;
    }
    colors: {
      primary: string;
      secondary: string;
      danger: string;
      caution: string;
      success: string;
      background: string;
      title: string;
      text: string;
    };
  }
}
