import React from 'react'
import "../App.css"

export default class AddNewTodoForm extends React.Component{
    
    state={
        text:""
    }

    handleTextChange=(text)=>{
        this.setState({
            text:text.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state.text);
        this.setState({
            text:""
        })
    }
    
    render(){
        return (
            <div className="app_form">
                <form onSubmit={this.handleSubmit} >
                    <input type="text" value={this.state.text} onChange={this.handleTextChange} />
                    <input type="submit" onSubmit={this.handleSubmit} />
                </form>
            </div>
        )
    }
}