import React from "react";
import Header from "./Header";
import TouristInfoCard from "./TouristInfoCard";
import Footer from "./Footer";

import Bookings from "./Bookings";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Header />
      <TouristInfoCard />
      <Bookings />
      <Footer
        Contactinfo={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
