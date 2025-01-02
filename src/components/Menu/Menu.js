import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/cadastro">Cadastro</Link></li>
                <li><Link to="/venda">Venda</Link></li>
                <li><Link to="/estoque">Estoque</Link></li>
                <li><Link to="/financeiro">Financeiro</Link></li>
                <li><Link to="/planejamento">Planejamento</Link></li>
            </ul>
        </nav>
    );
};

export default Menu;
