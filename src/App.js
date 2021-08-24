import {StrictMode} from "react";
import ReactDOM from 'react-dom'; 
import Pet from "./Pet"; 
import SearchParams from './SearchParams';
import searchParams from './SearchParams'

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
  return (
  <div>
    <h1>Adopt Me!</h1>
    <SearchParams />
  </div>
  )
}

// Instanciamos el componente y lo colocamos dentro de root
ReactDOM.render(<StrictMode>
   <App />
</StrictMode>
 ,
  document.getElementById("root")
);
