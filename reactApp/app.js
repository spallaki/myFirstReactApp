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

        // <input type="submit" value="X" />

      <ul>
       {dummyData.map((dummyData) => (<li> <button>
          X
       </button>{dummyData}</li>))}
    </ul>
  )
  }
}


ReactDOM.render(<TodoList />,
   document.getElementById('root'));
