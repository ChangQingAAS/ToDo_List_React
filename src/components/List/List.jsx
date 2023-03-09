import React, { Component } from 'react'
import Item from '../Item/Item'
import './List.css'
import PropTypes from 'prop-types'

class List extends Component {

    // 对接收的props进行类型以及必要性的限制
    static propTypes = {
        deleteTodo: PropTypes.func.isRequired,
        updateTodo: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired
    }

    render () {
        const { todos, updateTodo, deleteTodo } = this.props

        return (
            <ul className="todo-main">
                {
                    todos.map((todo) => {
                        return <Item key={todo.id} {...todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
                    })
                }
            </ul>
        )
    }
}

export default List
