import React from 'react';

const Dashboard = () => {
    return (
        <div className="dashboard">
            <h1>Dashboard</h1>
            <div className="summary-cards">
                <div className="card">Resumo de Vendas</div>
                <div className="card">Resumo de Estoque</div>
                <div className="card">Resumo Financeiro</div>
                <div className="card">Metas</div>
            </div>
        </div>
    );
};

export default Dashboard;
