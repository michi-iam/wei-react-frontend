import MeineNavbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Category from "./components/category/Category";

function App() {
  return (
    <div className="App">
        <MeineNavbar />
        <Header title="Teil dein Schmeil" subTitle="Postkarten - die schönen Dinge im Briefkasten" />
        <div id="showfield" className="showfield row justify-content-center">

        </div>
        <div className="container overflow-hidden">
          <Category />
        </div>
    </div>
  );
}

export default App;
