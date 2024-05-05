import i18next from "i18next";
import i18nextBrowserLanguagedetector, {
  DetectorOptions,
} from "i18next-browser-languagedetector";
import { eng } from "./en";
import { esp } from "./es";

const options: DetectorOptions = {
  // order and from where user language should be detected
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
    "path",
    "subdomain",
  ],

  // keys or params to lookup language from
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  lookupFromPathIndex: 0,
  lookupFromSubdomainIndex: 0,

  // cache user language on
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"], // languages to not persist (cookie, localStorage)

  // optional expiry and domain for set cookie
  cookieMinutes: 10,
  cookieDomain: "myDomain",

  // optional htmlTag with lang attribute, the default is:
  htmlTag: document.documentElement,

  // optional set cookie options, reference:[MDN Set-Cookie docs](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie)
  cookieOptions: { path: "/", sameSite: "strict" },

  // optional conversion function used to modify the detected language code
  convertDetectedLanguage: (lng: string) => lng.replace("-", "_"),
};

i18next.use(i18nextBrowserLanguagedetector).init({
  supportedLngs: ["en", "es"],
  detection: options,
  interpolation: {
    escapeValue: false,
  },
  fallbackLng: "en",
  resources: {
    en: {
      translation: eng,
    },
    es: {
      translation: esp,
    },
  },
});
document.documentElement.lang = i18next.language;
export { i18next };
export default i18next;
