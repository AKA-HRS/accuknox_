import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}></Route>
          </Routes>
        </Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
