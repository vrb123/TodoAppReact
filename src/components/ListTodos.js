import React from 'react'
import TodoRow from './TodoRow'
import "../App.css"

export default class ListTodos extends React.Component {

    checkBoxChanged=(id)=>{
        this.props.checkBoxChanged(id);
    }

    render(){
        return (
            <div className="list_todos">
                {this.props.todos.map( (todo,id) => <TodoRow key={id} id={id} {...todo} checkBoxChanged={this.checkBoxChanged}  /> )} 
            </div>
        )
    }

}