import './App.css'
import React, { Component } from 'react'
import Header from './components/Header/Header'
import List from './components/List/List'
import Footer from './components/Footer/Footer'

// 创建'外壳'组件App
export default class App extends Component {
    // 状态在哪里，操作状态的方法就在哪里

    // 初始化状态
    state = {
        todos: [
            { id: '001', name: 'eat', done: true },
            { id: '002', name: 'sleep', done: true },
            { id: '003', name: 'code', done: false },
        ]
    }

    // addTodo用于添加一个todo，接收的参数是todo对象
    addTodo = (todoObj) => {
        // 获取原todos
        const { todos } = this.state
        // 追加一个todo
        const newTodos = [todoObj, ...todos]

        this.setState({ todos: newTodos })
    }

    updateTodo = (id, done) => {
        // 获取状态中的todos
        const { todos } = this.state

        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            if (todoObj.id === id) {
                return { ...todoObj, done }
            } else {
                return todoObj
            }
        })

        this.setState({ todos: newTodos })
    }

    deleteTodo = (id) => {
        // 获取状态中的todos
        const { todos } = this.state

        // 匹配处理数据
        const newTodos = todos.filter((todoObj) => {
            return todoObj.id !== id
        })

        this.setState({ todos: newTodos })
    }

    checkAll = (status) => {
        // 获取状态中的todos
        const { todos } = this.state

        // 匹配处理数据
        const newTodos = todos.map((todoObj) => {
            return { ...todoObj, done: status }
        })

        // 更新状态
        this.setState({ todos: newTodos })
    }

    // 清除用于清除所有已完成的
    clearAllDone = () => {
        // 获取状态中的todos
        const { todos } = this.state

        // 过滤数据
        const newTodos = todos.filter((todoObj) => {
            return todoObj.done === false
        })

        // 更新状态
        this.setState({ todos: newTodos })
    }

    render () {
        const { todos } = this.state

        return (
            <div className="todo-container">
                <div className="todo-wrap">
                    <Header addTodo={this.addTodo}/>
                    <List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
                    <Footer todos={todos} checkAll={this.checkAll} clearAllDone={this.clearAllDone}/>
                </div>

            </div>
        )
    }
}

