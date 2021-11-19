import React from "react";
import "./App.css";
import Input from "./Components/Input/Input";
import Button from "./Components/Button/Button";
import ListItem from "./Components/ListItem/ListItem";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      inputValue: "",
      todoList: [],
    };
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  onClickBtn = () => {
    const { inputValue, todoList } = this.state;
    this.setState({
      todoList: [inputValue, ...todoList],
      inputValue: '',
    });
  }

  onRemoveItem = (toDoName) => {
    const { todoList } = this.state;
    const toDoId = todoList.findIndex((str) => str === toDoName);
    const newTodoList = [...todoList.slice(0, toDoId), ...todoList.slice(toDoId + 1)]

    this.setState({
      todoList: newTodoList,
    })
  }

  render() {
    const { inputValue, todoList } = this.state;
    const todoListItem = todoList.map((todostr) => {
      return(
        <ListItem key= {todostr} toDoName={todostr} remove = {this.onRemoveItem}/>
      )
    })

    return (
      <div>
        <div className="header-text">
          <h1>Список задач</h1>
        </div>

        <div className="control-panel">
          <Input value={inputValue} onChange={this.onChangeInput} />

          <Button  onClick={this.onClickBtn}name="Добавить задачу" />
        </div>

        <div className="table-list">
          {todoListItem}
        </div>
      </div>
    );
  }
}

export default App;
