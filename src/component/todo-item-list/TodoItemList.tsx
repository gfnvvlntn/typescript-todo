import React, {Component} from "react";
import Button from '../../primitive/Button'
import styles from './todoItemList.module.css'
import Checkbox from "../../primitive/Checkbox";
import TodoItem from "./TodoItem";

type Todolist = {
    title: string
    isDone: boolean
    id: number
}

interface ItemTodoListProps {
    todoList: Todolist[];
    updateTodo: (list: Todolist[]) => void
}

class ItemTodoList extends Component <ItemTodoListProps> {
    editTodoItem = (newTitle: string, id: number): void => {
        let list = [...this.props.todoList];
        list.forEach((el) => {
            if (el.id === id) {
                el.title = newTitle;
                this.props.updateTodo(list)
            }
        });
    };

    deleteTodoItem = (index: number): void => {
        let list = this.props.todoList.filter((el) => el.id !== index);
        this.props.updateTodo(list)
    };


    selectTodoItem = (checked: boolean, id: number): void => {
        let list = [...this.props.todoList]
        list.forEach((el) => {
            if (el.id === id) {
                el.isDone = checked;
                this.props.updateTodo(list)
            }
        });
    };

    handleTodoItemSubmit = (updateTitle: string, id: number) => {
        this.editTodoItem(updateTitle, id)
    }

    handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.selectTodoItem(e.target.checked, Number(e.target.id))
    }

    render() {
        return (
            <>
                {this.props.todoList.map((el, index) => {
                    return (
                        <li key={el.id} className={styles.todoItemList}>
                            <>
                                <TodoItem handleSubmit={this.handleTodoItemSubmit} id={el.id} title={el.title}/>
                            </>
                            <div className={styles.todoButton}>
                                <Checkbox handleChange={this.handleCheckboxChange} id={el.id} isChecked={el.isDone}/>
                                <Button action={this.deleteTodoItem} id={el.id}>delete</Button>
                            </div>
                        </li>
                    );
                })}
            </>
        )
    }
}

export default ItemTodoList