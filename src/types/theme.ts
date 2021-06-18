// import { UI_TEXT_SIZES, UI_LAYOUT_SIZES, UI_MEDIA_QUERIES } from 'appConstants/ui';

export interface IPalette {
  background: {
    primary: string;
    secondary: string;
    activeNavButton: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  icons: {};
  state: {};
  fills: {};
  elevationShadows: {};
  fieldShadows: {};
  colors: {
    white: string;
  };
}

export interface ITheme {
  palette: IPalette;
  //   text_sizes: typeof UI_TEXT_SIZES;
  //   layout_sizes: typeof UI_LAYOUT_SIZES;
  //   media_queries: typeof UI_MEDIA_QUERIES;
}
