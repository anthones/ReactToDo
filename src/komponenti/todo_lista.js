import _ from 'lodash';
import React from 'react';
import TodoListaPredmet from './todo_lista_predmet';

export default class TodoLista extends React.Component {
    renderItems() {
        const props = _.omit(this.props, 'zadaca');

        return _.map(this.props.zadaca, (todo, index) => <TodoListaPredmet key={index} {...todo} {...props} />);
    }

    oznaciProcitani() {

    }

    render() {
	    return (
	        <ul>
	            {this.renderItems()}
	        </ul>
	    );
  }
}