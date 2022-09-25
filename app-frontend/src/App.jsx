// import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceListView from "./views/ServiceListView";
import ServiceView from "./views/ServiceView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import HomepageView from "./views/HomepageView";
import ChatBot from "react-simple-chatbot";

// all available config props
const config = {
  width: "400px",
  height: "500px",
  floating: true,
};

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <BrowserRouter>
      <>
        <ChatBot
          steps={[
            {
              id: "1",
              message: "What number I am thinking?",
              trigger: "2",
            },
            {
              id: "2",
              options: [
                { value: 1, label: "Number 1", trigger: "4" },
                { value: 2, label: "Number 2", trigger: "3" },
                { value: 3, label: "Number 3", trigger: "3" },
              ],
            },
            {
              id: "3",
              message: "Wrong answer, try again.",
              trigger: "2",
            },
            {
              id: "4",
              message: "Awesome! You are a telepath!",
              end: true,
            },
          ]}
          {...config}
        />
        <Routes>
          <Route path="/services" element={<ServiceListView />} />
          <Route path="/service/:id" element={<ServiceView />} />
          <Route path="/login" element={<LoginView />} />
          <Route path="/register" element={<RegisterView />} />
          <Route path="/" element={<HomepageView />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};

export default App;
