import React from 'react'
import "../App.css"

export default class TodoRow extends React.Component {

    handleCheckBoxChanged=()=>{
        const {id} = this.props;
        this.props.checkBoxChanged(id);
    }

    render(){
        const {text,isChecked} = this.props;
        return (
            <div className="todo_row">
                <p>{text}</p>
                <input type="checkbox" checked={isChecked} onChange={this.handleCheckBoxChanged} /> 
            </div>
        )
    }

} 