import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import 'material-icons/iconfont/material-icons.css';
//import Novo from "./components/NovoContato/novo"
import Lista from "./components/ListaContato/lista";

export default function App() {

  return (
    <div>

      {/* <Novo/> */}
      <Lista/>
    </div>
  );
}




