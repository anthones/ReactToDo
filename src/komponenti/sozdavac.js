import React from 'react';

export default class Sozdavac extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            error: null
        };
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <form onSubmit={this.handleCreate.bind(this)}>
                <input type="text" placeholder="Додај нов потсетник" ref="createInput" />
                <button className="btn btn-success dodaj-kopce">Додај</button>
                {this.renderError()}
            </form>
        );
    }

    handleCreate(event) {
        event.preventDefault();

        const createInput = this.refs.createInput;
        const task = createInput.value;
        const validateInput = this.validateInput(task);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.dodajNovo(task);
        this.refs.createInput.value = '';
    }

    validateInput(task) {
        if (!task) {
            return 'Ве молиме внесете барем нешто.';
        } else if (_.find(this.props.todos, todo => todo.task === task)) {
            return 'Потсетникот веќе постои.';
        } else {
            return null;
        }
    }
}