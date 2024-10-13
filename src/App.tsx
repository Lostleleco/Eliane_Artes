// src/App.js

import Articles from "./components/Articles/Articles";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/NavBar/NavBar";
import Produtcs from "./components/Products/Products";
import Section from "./components/Section/Section";


function App() {
  return (

    <>
      <Navbar />
      <Section />
      <Articles />
      <Produtcs />
      <Footer />
    </>

  );
}

export default App;
