import ptBRui from "./locales/pt-BR/ui";
import * as ptBRcontent from "./locales/pt-BR/content";
import enUi from "./locales/en/ui";
import * as enContent from "./locales/en/content";
import esUi from "./locales/es/ui";
import * as esContent from "./locales/es/content";

export const locales = {
  "pt-BR": { ui: ptBRui, content: ptBRcontent },
  en: { ui: enUi, content: enContent },
  es: { ui: esUi, content: esContent },
};

export { I18nProvider, useI18n } from "./I18nContext";
