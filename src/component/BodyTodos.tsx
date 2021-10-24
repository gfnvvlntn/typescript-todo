import React, {Component} from "react";
import styles from './bodyTodo.module.css'

type Todolist = {
    title: string
    isDone: boolean
    id: number
}

interface BodyTodosProps {
    todoList: Todolist[];
    updateTodo: (list: Todolist[]) => void
}

interface BodyTodosState {
    isChecked: boolean
}

class BodyTodos extends Component<BodyTodosProps, BodyTodosState> {
    state = {isChecked: false,};

    deleteAllSelectTodoItem = ():void => {
        let list = this.props.todoList.filter((el) => !el.isDone);
        this.props.updateTodo(list)
    };

    selectAllTodoItem = (checked: boolean):void => {
        let list = [...this.props.todoList]
        list.forEach((el) => {
            el.isDone = !checked;
            this.props.updateTodo(list)
        });
    };


    handleChange = () => {
        this.setState({isChecked: !this.state.isChecked})
    }

    handleInputClick = () => {
        this.selectAllTodoItem(this.state.isChecked)
    }

    handleButtonClick = () => {
        this.deleteAllSelectTodoItem();
        if (this.state.isChecked) {
            this.setState({isChecked: !this.state.isChecked})
        }
    }





    render() {
        return (
            <>
                <div className={styles.content}>
                    <h2>todo list</h2>
                    <div className={styles.title}>
                        <input
                            type="checkbox"
                            checked={this.state.isChecked}
                            onChange={this.handleChange}
                            onClick={this.handleInputClick}
                        />
                        <button onClick={this.handleButtonClick}>
                            delete all done
                        </button>
                    </div>
                </div>
                <hr/>
            </>
        );
    }
}

export default BodyTodos;
