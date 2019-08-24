import React from 'react'
import "../App.css"

const TodoStats=({total,unchecked})=>(
    <div className="todo_stats">
        <div>
            <p>Total:{total}</p>
        </div>
        <div>
            <p>Unchecked:{unchecked}</p>
        </div>
    </div>
)

export default TodoStats;