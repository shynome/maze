import { createHashHistory } from "history";
import { RouterStore, syncHistoryWithStore } from "mobx-react-router";

export const routingStore = new RouterStore()
export const hashHistory = createHashHistory()
export const history = syncHistoryWithStore(hashHistory,routingStore)
