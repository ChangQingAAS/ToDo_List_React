import React, { Component } from 'react'
import './Footer.css'

export default class Footer extends Component {

    handleCheckAll = (event) => {
        // console.log(event.target)
        // console.log(event.target.value)
        // console.log(event.target.checked)
        this.props.checkAll(event.target.checked)
    }

    handleClearAllDone = () => {
        this.props.clearAllDone()
    }

    render () {
        const { todos } = this.props
        // 已完成的个数
        const total = todos.length
        const finished = todos.reduce((pre, cur) => pre + (cur.done ? 1 : 0), 0)

        return (

            <div className="todo-footer">
                <label>
                    <input type="checkbox" onChange={this.handleCheckAll} checked={finished === total && total !== 0}/>
                </label>
                已完成{finished} / 全部{total}
                <button onClick={this.handleClearAllDone} className="btn btn-danger">清除已完成任务</button>
            </div>
        )
    }
}
