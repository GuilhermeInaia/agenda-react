import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
// import 'material-icons/iconfont/material-icons.css';

export default function Novo() {
 
  return (
    <div>
      <h1 className="container text-center mt-5">Agenda Telefônica</h1>

      <div className="card card-body bg-dark text-white col-4 offset-4 mt-4">
        <div className="h3 text-center">Novo Contato</div>
        <hr />

        <form className="">
          <input className="form-control form-control-lg mb-3" type="text" placeholder="Nome"/>
          <input className="form-control form-control-lg mb-3" type="text" placeholder="Celular"/>
          <input className="form-control form-control-lg mb-3" type="text" placeholder="Cidade"/> 
          
          <div className="d-grid">
          <button className="btn btn-lg btn-primary btn-md mb-3">Enviar</button>
          <button className="btn btn-lg btn-primary btn-md">Lista de Contatos</button>
          </div>
        </form>
      </div>
    </div>

);
}