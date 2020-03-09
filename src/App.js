import React, {Component} from 'react';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      currentToDo: "",
    }
  };

//This method fires when the input value changes
  handleChange = (event) => {
    this.setState({
      currentToDo:event.target.value,
  })

  };

//This method fires when the form is submitted
  addTask = (event) => {
    event.preventDefault();

    this.setState({
      todos : [...this.state.todos,this.state.currentToDo],
    })



    console.log("The addTask Method was executed",event);
  };

  render () {
    var {todos} = this.state;
    return (
      <div className="container">
        <form onSubmit= {this.addTask}>
        <label htmlFor="taskName">Task Name :</label>
        <input onChange={this.handleChange} name="taskName" type="text" placeholder="Add todo here" />
        <button type="submit">Add Task</button>    {/*after hitting submit the whole form is submitted*/}
        </form>
        <ul>
            {todos.map(el => {
              return(
                <li key={el}>
                 {el}
                 </li>
              )
            }
          )}
            </ul>
      </div>
    );
  };
};

export default TodoList;
