import { routingStore, history } from "./routing";

export class Stores {
  routing = routingStore
  history = history
}

export const stores = new Stores