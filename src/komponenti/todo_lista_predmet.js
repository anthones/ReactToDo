import React from 'react';

export default class TodoListaPredmet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            seIzmenuva: false
        };
    }

    pokaziZadaci() {
        const { task, eZavrseno } = this.props;

        const taskStyle = {
            textDecoration: eZavrseno ? 'line-through' : 'none',
            cursor: 'pointer'
        };

        if (this.state.seIzmenuva) {
            return (
                <span>
                    <form onSubmit={this.kliknavZacuvaj.bind(this)}>
                        <input type="text" defaultValue={task} ref="vnesiIzmena" />
                    </form>
                </span>
            );
        }

        return (
            <span style={taskStyle}
                onClick={this.props.smeniZadaca.bind(this, task)}>
                {task}
            </span>
        );
    }

    pokaziOpcii() {
        if (this.state.seIzmenuva) {
            return (
                <span className="span-kopce">
                    <button className="btn btn-default kopce" onClick={this.kliknavZacuvaj.bind(this)}>Зачувај</button>
                    <button className="btn btn-danger kopce" onClick={this.kliknavOtkazi.bind(this)}>Откажи</button>
                </span>
            );
        }

        return (
            <span className="span-kopce">
                <button className="btn btn-default kopce" onClick={this.kliknavIzmeni.bind(this)}>Измени</button>
                <button className="btn btn-danger kopce" onClick={this.props.izbrisiZadaca.bind(this, this.props.task)}>Избриши</button>
            </span>
        );
    }

    render() {
        return (
            <li>
                {this.pokaziZadaci()}
                {this.pokaziOpcii()}
            </li>
        );
    }

    kliknavIzmeni() {
        this.setState({ seIzmenuva: true });
    }

    kliknavOtkazi() {
        this.setState({ seIzmenuva: false });
    }

    kliknavZacuvaj(event) {
        event.preventDefault();

        const stara = this.props.task;
        const nova = this.refs.vnesiIzmena.value;
        this.props.zacuvajZadaca(stara, nova);
        this.setState({ seIzmenuva: false });
    }
}