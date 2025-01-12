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

   const new_Todo =  {

     task: "cook things",
     id: 15288170844556,
     completed: false
   }

    handleAdd = () => {
      this.setState({
        ...this.state,
        todos: [...this.state.todos, newTodo]
      });
    }




   handleClear = () => {
      this.setState({
        ...this.state,
        todos: this.state.todos.filter(todo => {
          return (todo.completed === false)
        })

      })
   }
   handleToggle = (clickedId) => {
     

     this.setState({
       ...this.state, 
       todos: this.state.todos.map(todo => {
         if (todo.id === clickedId){
           return {
             ...todo, 
             completed: !todo.completed
           }
         }

           return todo
         
       })
     })

   }
   
  render() {
    const { todos } = this.state;

    return (
      <div>
        <h1>Todos</h1>
       <TodoList  handleToggle={this.handleToggle} todos={todos}/>
       <Form handleAdd = {this.handleAdd} />
        <button onClick = {this.handleClear}>Hide Completed</button>
      
      </div>
    )
  }
}
export default App;
