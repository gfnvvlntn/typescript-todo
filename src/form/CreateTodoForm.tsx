import React, { PureComponent } from "react";
import styles from './createTodoForm.module.css'

interface CreateTodoFormState {
  todo: string;
}

interface CreateTodoFormProps {
  createTodoItem: (value: {
    title: string;
    isDone: boolean;
    id: number;
  }) => void;
}

class CreateTodoForm extends PureComponent<CreateTodoFormProps, CreateTodoFormState> {
  constructor(props: CreateTodoFormProps) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ todo: e.target.value });
  };

  handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!this.state.todo) return;
    this.props.createTodoItem({
      id: new Date().getTime(),
      title: this.state.todo,
      isDone: false,
    });
    this.setState({ todo: "" });
  };

  render() {
    return (
      <div>
        <h2>create a record</h2>
        <form
          action=""
          onSubmit={this.handlerSubmit}
          className={styles.formItem}
        >
          <input
            className={styles.input}
            type="text"
            value={this.state.todo}
            onChange={this.handleChange}
            placeholder="enter todo"
          />
          <button>create</button>
        </form>
        <hr />
      </div>
    );
  }
}

export default CreateTodoForm