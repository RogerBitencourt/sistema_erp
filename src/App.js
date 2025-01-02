import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu';
import Dashboard from './components/Dashboard/Dashboard';
import Cadastro from './pages/Cadastro/Cadastro';
import Venda from './pages/Venda/Venda';
import Estoque from './pages/Estoque/Estoque';
import Financeiro from './pages/Financeiro/Financeiro';
import Planejamento from './pages/Planejamento/Planejamento';

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header />
                <Menu />
                <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/cadastro" component={Cadastro} />
                    <Route path="/venda" component={Venda} />
                    <Route path="/estoque" component={Estoque} />
                    <Route path="/financeiro" component={Financeiro} />
                    <Route path="/planejamento" component={Planejamento} />
                </Switch>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
