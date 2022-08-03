import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
// import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-7q63xeg1.us.auth0.com"
      clientId="VaaVsL35Wyuz0zUATe3OG2jucxJGmcPe"
      redirectUri={window.location.origin}
    > */}
    <Router>
      <App />
    </Router>
    {/* </Auth0Provider> */}
  </React.StrictMode>
);
