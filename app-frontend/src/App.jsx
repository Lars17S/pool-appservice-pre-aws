import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceListView from "./views/ServiceListView";
import ServiceView from "./views/ServiceView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import HomepageView from "./views/HomepageView";

const App = () => {
  return (
    <BrowserRouter>
      <>
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
