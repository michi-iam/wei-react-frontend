import MeineNavbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Category from "./components/category/Category";

function App() {
  return (
    <div className="App">
        <MeineNavbar></MeineNavbar>
        <Header title="Teil dein Schmeil" subTitle="Postkarten - die schönen Dinge im Briefkasten"></Header>
        <div id="showfield" className="showfield row justify-content-center"></div>
        <div className="container-fluid p-0 overflow-hidden">
          <Category></Category>
        </div>
    </div>
  );
}

export default App;
