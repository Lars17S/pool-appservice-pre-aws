// import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ServiceListView from "./views/ServiceListView";
import ServiceView from "./views/ServiceView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import HomepageView from "./views/HomepageView";
import React, { useState } from "react";
import Chatbot from "react-chatbot-kit";
import { ConditionallyRender } from "react-util-kit";
import { ReactComponent as ButtonIcon } from "./chatbot/icons/robot.svg";
import "react-chatbot-kit/build/main.css";
import "./App.css";

import ActionProvider from "./chatbot/ActionProvider";
import MessageParser from "./chatbot/MessageParser";
import config from "./chatbot/config";


const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  const [showChatbot, toggleChatbot] = useState(true);
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
      <div className="app-chatbot-container">
          <ConditionallyRender
            ifTrue={showChatbot}
            show={
              <Chatbot
                config={config}
                messageParser={MessageParser}
                actionProvider={ActionProvider}
              />
            }
          />
        </div>

        <button
          className="app-chatbot-button"
          onClick={() => toggleChatbot((prev) => !prev)}
        >
          <ButtonIcon className="app-chatbot-button-icon" />
        </button>
    </BrowserRouter>
  );
};

export default App;
