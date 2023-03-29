import { useState } from "react";
import "./App.css";
import Store from "./components/Store/Store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <Store></Store>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
