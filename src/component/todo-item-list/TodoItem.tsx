import React, {Component} from "react";
import styles from "./todoItemList.module.css";

interface TodoItemProps {
    handleSubmit: any
    id: number
    title: string
}

interface TodoItemState {
    updateTitle: string
}

class TodoItem extends Component<TodoItemProps, TodoItemState> {
    state = {
        updateTitle: this.props.title
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({updateTitle: e.target.value})
    }

    render() {
        return (
            <input
                className={styles.inputTodo}
                type="text"
                value={this.state.updateTitle}
                onChange={this.handleChange}
                onBlur={() => {
                    this.props.handleSubmit(this.state.updateTitle, this.props.id)
                }}
            />
        );
    }
}

export default TodoItem