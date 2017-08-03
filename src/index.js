import React from 'react';
import ReactDOM from 'react-dom';
import Sozdavac from './komponenti/sozdavac';
import TodoLista from './komponenti/todo_lista';

const zadaca = [
{
    task: 'Плати сметки',
    eZavrseno: false
},
{
    task: 'Нахрани мачка',
    eZavrseno: true
}
];

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            zadaca
        };
    }

    render() {
        return (
            <div>
                <h1>Потсетник</h1>
                <Sozdavac zadaca={this.state.zadaca} dodajNovo={this.dodajNovo.bind(this)} />
                <TodoLista
                    zadaca={this.state.zadaca}
                    smeniZadaca={this.smeniZadaca.bind(this)}
                    zacuvajZadaca={this.zacuvajZadaca.bind(this)}
                    izbrisiZadaca={this.izbrisiZadaca.bind(this)}
                />
            </div>
        );
    }

    smeniZadaca(task) {
        const najdovVrednost = _.find(this.state.zadaca, todo => todo.task === task);
        najdovVrednost.eZavrseno = !najdovVrednost.eZavrseno;
        this.setState({ zadaca: this.state.zadaca });
    }

    dodajNovo(task) {
        this.state.zadaca.push({
            task,
            eZavrseno: false
        });
        this.setState({ zadaca: this.state.zadaca });
    }

    zacuvajZadaca(stara, nova) {
        const najdovVrednost = _.find(this.state.zadaca, todo => todo.task === stara);
        najdovVrednost.task = nova;
        this.setState({ zadaca: this.state.zadaca });
    }

    izbrisiZadaca(brishi) {
        _.remove(this.state.zadaca, todo => todo.task === brishi);
        this.setState({ zadaca: this.state.zadaca });
    }
}

ReactDOM.render(<App />, document.getElementById('app'));