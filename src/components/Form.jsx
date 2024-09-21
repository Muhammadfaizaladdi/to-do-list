/* eslint-disable react/prop-types */
function Form({ addTask, newTask, taskCompleted, tasks }) {
  return (

    <div className="wrapper">
        <header>
            <h3>🔰 TODO LIST </h3><span>{taskCompleted  || '0'} / {tasks.length}</span>
        </header>

        <form className="input-box">
            <input type="text" ref={newTask} placeholder="Add Your Task" />
            <button type="submit" onClick={addTask}>Add Task</button>
        </form>
    </div>

  )
}

export default Form