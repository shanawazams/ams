import React from "react";

import { About, Footer, Header, Skills, Testimonial, Work } from "./container";
import { Navbar } from "./components";
import { Auth0Provider } from "@auth0/auth0-react";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Auth0Provider
        domain="dev-ag83r6izn72n0nd8.us.auth0.com"
        clientId="l4nQU6APomdU7UvPgZAiGKPOMoHam9vR"
        authorizationParams={{
          redirect_uri: window.location.origin,
        }}
      >
        <Navbar />
        <Header />
        <About />
        <Work />
        <Skills />
        <Testimonial />
        <Footer />
      </Auth0Provider>
    </div>
  );
}

export default App;
