import React from "react";
import "./App.css";
import Main from "./components/Main";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "./reducer/ReducerCity";

function App() {
  const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

export default App;
