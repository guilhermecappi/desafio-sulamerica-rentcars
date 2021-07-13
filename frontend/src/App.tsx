import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Routes } from "./routes";
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";
import { UserContextProvider } from "./context/UserContext";

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <GlobalStyle />
        <ToastContainer autoClose={3000} />
        <Header />
        <Routes />
      </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
