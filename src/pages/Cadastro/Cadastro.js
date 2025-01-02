import React from 'react';

const Cadastro = () => {
    return (
        <div className="cadastro">
            <h1>Cadastro de Clientes</h1>
            <form>
                <label>
                    Nome:
                    <input type="text" name="nome" />
                </label>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Telefone:
                    <input type="tel" name="telefone" />
                </label>
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    );
};

export default Cadastro;
