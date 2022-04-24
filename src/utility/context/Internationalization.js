// ** React Imports
import { useState, createContext } from "react";

// ** Intl Provider Import
import { IntlProvider } from "react-intl";

// ** Core Language Data
import messagesEn from "../../assets/data/locales/en.json";
import messagesDe from "../../assets/data/locales/de.json";
import messagesFr from "../../assets/data/locales/fr.json";
import messagesPt from "../../assets/data/locales/pt.json";
import messagesSa from "../../assets/data/locales/sa.json";

// ** User Language Data
import userMessagesEn from "@src/assets/data/locales/en.json";
import userMessagesDe from "@src/assets/data/locales/de.json";
import userMessagesFr from "@src/assets/data/locales/fr.json";
import userMessagesPt from "@src/assets/data/locales/pt.json";
import userMessagesSa from "@src/assets/data/locales/sa.json";

// ** Menu msg obj
const menuMessages = {
  en: { ...messagesEn, ...userMessagesEn },
  de: { ...messagesDe, ...userMessagesDe },
  fr: { ...messagesFr, ...userMessagesFr },
  pt: { ...messagesPt, ...userMessagesPt },
  sa: { ...messagesSa, ...userMessagesSa },
};

// ** Create Context
const Context = createContext();

const IntlProviderWrapper = ({ children }) => {
  // ** States
  const [locale, setLocale] = useState("en");
  const [messages, setMessages] = useState(menuMessages["en"]);

  // ** Switches Language
  const switchLanguage = (lang) => {
    setLocale(lang);
    setMessages(menuMessages[lang]);
  };

  return (
    <Context.Provider value={{ locale, switchLanguage }}>
      <IntlProvider
        key={locale}
        locale={locale}
        messages={messages}
        defaultLocale="en"
      >
        {children}
      </IntlProvider>
    </Context.Provider>
  );
};

export { IntlProviderWrapper, Context as IntlContext };
