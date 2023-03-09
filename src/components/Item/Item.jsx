import React, { Component } from 'react'
import './Item.css'
import PropTypes from 'prop-types'

class Item extends Component {

    state = {
        // 标识鼠标移入，移出
        mouse: false,
        deleteTodo: PropTypes.func.isRequired,
        updateTodo: PropTypes.func.isRequired,
    }

    // 鼠标移入，移出的回调
    handleMouse = (flag) => {
        return () => {
            this.setState({ mouse: flag })
        }
    }

    // 勾选、取消勾选某一个TODO的回调
    handleCheck = (id) => {
        return (event) => {
            this.props.updateTodo(id, event.target.checked)
        }
    }

    // 删除一个todo的回调
    handleDelete = (id) => {
        return () => {
            this.props.deleteTodo(id)
        }
    }

    render () {
        const { id, name, done } = this.props

        return (
            <li style={{ backgroundColor: this.state.mouse ? '#ddd' : 'white' }} onMouseEnter={this.handleMouse(true)}
                onMouseLeave={this.handleMouse(false)}>
                <label>
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)}/>
                    <span>{name}</span>
                </label>
                <button onClick={this.handleDelete(id)} className="btn btn-danger"
                        style={{ display: this.state.mouse ? 'block' : 'none' }}>
                    Delete
                </button>
            </li>
        )
    }
}

export default Item
