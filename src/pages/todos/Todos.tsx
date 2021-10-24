import React, {Component} from "react";
import styles from './todo.module.css'

import CreateTodoForm from "../../form/CreateTodoForm";
import BodyTodos from "../../component/BodyTodos";
import ItemTodoList from "../../component/todo-item-list/TodoItemList";

interface TodoItem {
    title: string;
    isDone: boolean;
    id: number;
}

interface TodosState {
    todoList: TodoItem[];
}

class Todos extends Component<{}, TodosState> {
    constructor(props: any) {
        super(props);
        this.state = {
            todoList: [],
        };
    }


    createTodoItem = (newItem: {
        title: string;
        isDone: boolean;
        id: number;
    }): void => {
        this.setState({
            todoList: [
                {
                    title: newItem.title,
                    isDone: newItem.isDone,
                    id: newItem.id,
                },
                ...this.state.todoList,
            ],
        });
    };

    updateTodo = (list: TodoItem[]) => {
        this.setState({todoList: [...list]});
    }

    render() {
        return (
            <div className={styles.container}>
                <CreateTodoForm createTodoItem={this.createTodoItem}/>
                <BodyTodos
                    todoList={this.state.todoList}
                    updateTodo={this.updateTodo}
                />
                <ItemTodoList
                    todoList={this.state.todoList}
                    updateTodo={this.updateTodo}
                />
            </div>
        );
    }
}

export default Todos;
