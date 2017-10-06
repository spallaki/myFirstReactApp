import React from 'react';
import ReactDOM from 'react-dom';

var dummyData = ['homework', 'cook', 'walk', 'shower', 'sleep'];

class TodoList extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      task: ''
  }
}
  render() {
    return(
      <ul>
       {dummyData.map((dummyData) => (
         <li><button> X </button>{dummyData}</li>)
       )}
     </ul>
  )}
}

class InputLine extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <form>
          <input type='text' placeholder='task' />
          <input type='submit' value='Add todo'/>
     </form>
    )
  }
}

class TodoApp extends React.Component{
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}


ReactDOM.render(<TodoApp />, document.getElementById('root'));
