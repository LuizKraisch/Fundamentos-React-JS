import React from 'react'
import produtos from '../../data/produtos'
import './ListaProdutos.css'

export default props => {

    const Produtos = produtos.map((produto, i) => {
        return (
            <tr className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td><b>{produto.id}</b></td> 
                <td>{produto.nome}</td>
                <td>R$ {produto.preco}</td>
            </tr>
        )
    })

    return (
        <div className="TabelaProdutos">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                </tr>
                    {Produtos}
            </table>
        </div>
    )
}