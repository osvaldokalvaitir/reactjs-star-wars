import React from "react";
import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import { store } from "./store/store";

import { addLocaleData, IntlProvider } from "react-intl";
import en from "react-intl/locale-data/en";
import pt from "react-intl/locale-data/pt";
import { flattenMessages } from "./intl/utils";
import messages from "./intl/messages";

import App from "./App";

import "./style.css";

import registerServiceWorker from "./registerServiceWorker";

addLocaleData([...en, ...pt]);
// Se as linhas bloqueadas do inglês forem liberadas, bloquear estas linhas abaixo
const locale =
  (navigator.languages && navigator.languages[0]) ||
  navigator.language ||
  navigator.userLanguage ||
  "pt-BR";

// Linhas para testar o idioma inglês
// let params = new URLSearchParams(document.location.search.substring(1))
// let locale = params.get("lang") || 'en-US'

ReactDOM.render(
  <IntlProvider locale={locale} messages={flattenMessages(messages[locale])}>
    <Provider store={store}>
      <App />
    </Provider>
  </IntlProvider>,
  document.getElementById("root")
);
registerServiceWorker();
