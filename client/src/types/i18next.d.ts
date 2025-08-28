declare module 'react-i18next' {
  export interface TFunction {
    (key: string, options?: any): string;
    (key: string, defaultValue?: string, options?: any): string;
  }

  export function useTranslation(ns?: string | readonly string[]): {
    t: TFunction;
    i18n: {
      language: string;
      changeLanguage: (lng: string) => Promise<any>;
      [key: string]: any;
    };
    ready: boolean;
  };
  
  export const Trans: any;
  export const Translation: any;
  export const I18nextProvider: any;
  export const initReactI18next: any;
}

declare module 'i18next' {
  export interface i18n {
    language: string;
    changeLanguage: (lng: string) => Promise<any>;
    t: (key: string, options?: any) => string;
    use: (plugin: any) => i18n;
    init: (options: any) => Promise<any>;
    [key: string]: any;
  }
  
  const i18n: i18n;
  export default i18n;
}