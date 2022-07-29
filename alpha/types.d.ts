import { useRouter } from "next/router";
import { Locale, LocaleString } from "lib/interfaces";

declare module "*module.css" {
  const styles: {
    [className: string]: string;
  };
  export default styles;
}

// TODO: find a way to extend the BaseRouter or Router to prevent use of as keyword
declare global {
  type TRouter = ReturnType<typeof useRouter> & {
    locale: keyof LocaleString;
    locales: Locale[];
  };
}
