import Routes from "./Routes/index";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./Styles/global";

function App() {
  return (
    <>
      <Routes/>
      <ToastContainer/>
      <GlobalStyle/>
    </>
  );
}

export default App;
