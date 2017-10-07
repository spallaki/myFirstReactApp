import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [{
  taskText: "code",
  completed: false
},
  {
    taskText: "eat",
    completed: true
  },
  {
    taskText: "shower",
    completed: true
  },
  {
    taskText: "sleep",
    completed: false
  }]

class InputLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <form>
        <input type="text" placeholder='task'/>
        <input type="submit" value="Add todo" />
      </form>
    )
  }
}

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <li>
        <button> X </button>
        {this.props.completed ? <strike>{this.props.task}</strike> : this.props.task}
      </li>)
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      dummyData.map((data) => <ToDo task={data.taskText} completed={data.completed}/>))
    }
}

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>
      <InputLine />
      <TodoList />
    </div>
  )}
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
