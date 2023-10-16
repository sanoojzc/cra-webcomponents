import "./App.css";
import { Provider } from "react-redux";
import store from "./store";
import Cart from "./Cart";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter basename="/cra-webcomponents">
        <Routes>
          <Route exact path="/" element={<h1><a href="/page1">Home Page</a></h1>} />
          <Route
            exact
            path="page1"
            element={
              <Provider store={store}>
                <Cart />
              </Provider>
            }
          />
          <Route exact path="page2" element={<h1>Home Page</h1>} />
          <Route exact path="page3" element={<h1>Home Page</h1>} />
        </Routes>
      </BrowserRouter>
      <Provider store={store}>{/* <Cart /> */}</Provider>
    </>
  );
}

export default App;
