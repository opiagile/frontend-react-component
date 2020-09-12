import React from 'react';
import Header from './components/Header';

function App(){
    return (
        <> 
            <Header title="Homepage"></Header>
                <ul>
                    <li>Projetos</li>
                    <li>Relatórios</li>
                </ul>
            <Header title="Cadastro">
                <ul>
                    <li>Principal</li>
                    <li>login</li>
                    <li>Projetos</li>
                </ul>
            </Header>
        </> 
    );
}

export default App;