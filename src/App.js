import React from 'react';
import './App.css';
import TitleApp from './components/TitleApp'
import ListTodos from './components/ListTodos'
import AddNewTodoForm from './components/AddNewTodoForm'
import TodoStats from './components/TodoStats'

class App extends React.Component {

  state={
    todoList:[]
  }

  checkBoxChanged=(id)=>{
    const newTodoList=this.state.todoList.map( (todo,index) => {
        if(index!==id) return todo;
        todo.isChecked=!todo.isChecked;
        return todo;
    } )
    this.setState({
      todoList:newTodoList
    })
  }

  getTotalNumberTodos=()=>this.state.todoList.length;

  getTotalNumberUncheckedTodos=()=>this.state.todoList.filter( todo => !todo.isChecked ).length

  addTodo=(text,isChecked=false)=>{
      const newTodo={
        text,
        isChecked
      }
      this.setState({
        todoList:[...this.state.todoList,newTodo]
      })
  }

  render(){
    return(
      <div className="app">
          <TitleApp />
          <TodoStats total={this.getTotalNumberTodos()} unchecked={this.getTotalNumberUncheckedTodos()} />
          <ListTodos todos={this.state.todoList} checkBoxChanged={this.checkBoxChanged}  />
          <AddNewTodoForm addTodo={this.addTodo} />
      </div>
    )
  }

}

export default App;
