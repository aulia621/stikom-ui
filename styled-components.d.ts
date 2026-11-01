import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    font: {
      family: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    space: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    radius: {
      sm: string;
      md: string;
      lg: string;
      pill: string;
    };
    color: {
      bg: string;
      surface: string;
      text: string;
      muted: string;
      primary: string;
      secondary: string;
      accent: string;
      border: string;
      onPrimary: string;
    };
    name: string;
  }
}
