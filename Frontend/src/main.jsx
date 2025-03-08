// // // import { StrictMode } from 'react'
// // // import {React} from 'react'
// // // import { createRoot } from 'react-dom/client'
// // // import './index.css'
// // // import App from './App.jsx'

// // // createRoot(document.getElementById('root')).render(
// // //   <StrictMode>
// // //     <App />
// // //   </StrictMode>,
// // // )
// // import React from "react"; // ✅ Ensure this is present
// // import ReactDOM from "react-dom/client";
// // import App from "./App.jsx";
// // import "./index.css";

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <React.StrictMode>
// //     <App />
// //   </React.StrictMode>
// // );
// // import React from "react";
// // import ReactDOM from "react-dom/client";
// // import { BrowserRouter } from "react-router-dom";
// // import App from "./App";

// // ReactDOM.createRoot(document.getElementById("root")).render(
// //   <BrowserRouter>
// //     <App />
// //   </BrowserRouter>
// // );
// import React from "react";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router-dom"; // ✅ Import BrowserRouter
// import App from "./App.jsx";
// import "./index.css";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <BrowserRouter> {/* ✅ Wrap App inside BrowserRouter */}
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>
// );
// import React from "react";
// import ReactDOM from "react-dom/client"; // Correct import for React 18
// import { BrowserRouter } from "react-router-dom";
// import App from "./App";
// import "./index.css"; // Ensure this line is present!

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
// import "./index.css"; // Ensure this line is present!

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
// import { CartProvider } from "./Context/CartContext";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
