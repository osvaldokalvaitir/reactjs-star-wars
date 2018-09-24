import { combineReducers } from "redux";

import auth from "./auth";
import peoples from "./peoples";
import planets from "./planets";
import species from "./species";
import starships from "./starships";
import users from "./users";
import vehicles from "./vehicles";

const reducers = combineReducers({
  auth,
  peoples,
  planets,
  species,
  starships,
  users,
  vehicles
});

export default reducers;
