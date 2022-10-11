
import "bootstrap/dist/css/bootstrap.min.css"
import 'material-icons/iconfont/material-icons.css';


export default function Lista() {

    let contato =
        [
            {
                id: 1,
                nome: 'Alisson',
                telefone: '85 96633-4466',
                cidade: 'Maracanau-CE'
            },
            {
                id: 2,
                nome: 'Sintia',
                telefone: '85 96633-4466',
                cidade: 'Maracanau-CE'
            },
            {
                id:3,
                nome: 'Keila',
                telefone: '85 96633-4466',
                cidade: 'Maracanau-CE'
            }
        ]


    return (
        <div>
            <h1 className="container text-center mt-5">Lista de Contatos</h1>
            <hr />

            <table className=" table table-dark table-striped text-center mt-5">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Cidade</th>
                        {/* <th>
                        <button>Editar</button>
                        <button>Excluir</button>
                        </th> */}
                    </tr>
                </thead>
                <tbody>
                    {contato.map((cont) => {
                        return (
                            <tr>
                                <td>{cont.id}</td>
                                <td>{cont.nome}</td>
                                <td>{cont.telefone}</td>
                                <td>{cont.cidade}</td>
                                
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}