/* eslint-disable react/prop-types */
import ToDoListButton from "./ToDoListButton"


function ToDoList({ tasks, setCompleted, move, remove }) {

    // urutkan tasks yang ada di dalam list, agar berurutan dari paling terakhir ke paling baru(desc)
    tasks.sort((a,b) => b.id - a.id)

    return (
        <div className="wrapper">
        <ul>
            {
                tasks.map((item) => {

                    let radioCompleted = '';
                    let classCompleted = ''

                    if (item.isCompleted){
                        radioCompleted = '✅'
                        classCompleted = 'strike'
                    } else {
                        radioCompleted = '◻️'
                    }

                    return(
                        <li key={item.id}>
                            <div className='left'><button onClick={() => setCompleted(item.id)} >{radioCompleted}</button></div>
                            <div className={`center ${classCompleted}`}>{item.task} - {item.id}</div>
                            <div className='right'>
                                <ToDoListButton id={item.id} tasks={tasks} move={move} remove={remove} />
                            </div>
                        </li>
                    )
                })
            }
        </ul>
        </div>
  )
}

export default ToDoList