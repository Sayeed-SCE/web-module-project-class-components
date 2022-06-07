import React from 'react'
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import Form from './Form';



 class App extends React.Component {
   constructor(){
     super();
     this.state = {
       todos:[
        {
          name: 'Learn React',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Walk the dog',
          id: 1528817084358,
          completed: false
        },
        {
          name: 'have fun',
          id: 152881708445546,
          completed: false
        }
      ]

     }
   }
   
  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todos</h1>
       <TodoList todos={todos}/>
       <Form />
        <button>Hide Completed</button>
      
      </div>
    )
  }
}
export default App;
