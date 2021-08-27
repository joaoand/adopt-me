import { StrictMode, useState } from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import SearchParams from "./SearchParams";
import Details from "./Details";
import ThemeContext from "./ThemeContext";

// const App = () => {
//   return (
//   <div>
//     <h1>Adopt Me!</h1>
//     <Pet name="Luna" animal="Dog" breed="Havanese" />
//     <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
//     <Pet name="Beam" animal="Dog" breed="Wheaten Terrier" />
//   </div>
//   )
// }

const App = () => {
  //Esto es un hook aunque no le coloquemos [theme, setTheme]
  const theme = useState("darkblue");

  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">
              <h1>Adopt Me!</h1>
            </Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};

// Instanciamos el componente y lo colocamos dentro de root
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
