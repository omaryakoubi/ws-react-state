import Nav from "./components/Nav";
import AddTodo from "./components/AddTodo";
import React from "react";
import Todos from "./components/Todos";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      newTodo: "",
      todos: ["Group meet at 10:00 AM", "Fix some bugs", "Learn React"],
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  handleInputChange(e) {
    this.setState({ newTodo: e.target.value });
  }

  addTodo() {
    if (this.state.newTodo.trim() !== "") {
      this.setState({
        todos: [this.state.newTodo, ...this.state.todos],
      });
    }
  }

  deleteTodo(e) {
    this.setState({
      todos: this.state.todos.filter((todo) => {
        return todo !== e.target.value;
      }),
    });
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <AddTodo
          newTodo={this.state.newTodo}
          handleInputChange={this.handleInputChange}
          addTodo={this.addTodo}
        />
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
