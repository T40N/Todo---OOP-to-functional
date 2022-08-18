import reducer from "./reducer";

class Store {
  static instance;
  listeners = [];
  #state;

  constructor(reducer, initialState) {
    if (Store.instance) return Store.instance;
    Store.instance = this;
    this.reducer = reducer;
    this.#state = initialState;
    this.getState = this.getState.bind(this);
    this.dispatch = this.dispatch.bind(this);
  }

  getState() {
    return this.#state;
  }

  dispatch(action) {
    this.#state = reducer(this.getState(), action);
    this.listeners.forEach((listener) => listener());
  }

  subscribe(listener) {
    this.listeners.push(listener);
  }

  unsubscribe(listener) {
    this.listeners.filter((l) => l !== listener);
  }
}

const store = new Store(reducer, []);

export default store;
