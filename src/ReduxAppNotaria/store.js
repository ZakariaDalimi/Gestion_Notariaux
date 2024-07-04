import { createStore } from "redux";
import reducer1 from "./reducers/reducer1";

const store = createStore(reducer1);

export default store;