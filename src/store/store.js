import { createStore } from "redux";

import rootReducer from "./ducks";

const store = createStore(rootReducer);

export { store };
