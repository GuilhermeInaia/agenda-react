// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css"
// import 'material-icons/iconfont/material-icons.css';

// export default function App() {

//   return (
//     <div>
//       <h1 className="container text-center mt-5">Lista de Contatos</h1>
//       <table className=" table table-dark table-striped text-center mt-5">
//         <thead>
//           <tr>
//             {/* <th>ID</th> */}
//             <th>Nome</th>
//             <th>Celular</th>
//             <th>Cidade</th>
//           </tr>
//         </thead>
       
//         <tbody className="text-end" id="tabelaAgenda">
//         <div>
//           <button>Editar</button>
//           <button>Excluir</button>
//         </div>
//         </tbody>
//       </table>
//     </div>
//   );
// }

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"
// import 'material-icons/iconfont/material-icons.css';

export default function Novo() {

    const incluir =[
        {
            nome: "Guilherme",
            celular: "(85) 96473-2824",
            cidade: "Fortaleza"
        }
    ];

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
          <button className="btn btn-lg btn-primary btn-md mb-3" onSubmit={incluir}>Enviar</button>
          {/* <a className="btn btn-lg btn-primary btn-md">Lista de Contatos</a> */}
          </div>
        </form>
      </div>
    </div>

);
}

