/* eslint-disable react/prop-types */
function ToDoListButton({ id, tasks, move, remove }) {

    let idData = id;
    let currentIndex = tasks.findIndex((item) => item.id == idData)

    let prevIndex = currentIndex-1;
    let nextIndex = currentIndex+1;

    let prevButton = '';
    if(tasks[prevIndex] != undefined){
        prevButton = '👆';
    } else {
        prevIndex = '';
    }

    let nextButton = '';
    if(tasks[nextIndex] != undefined){
        nextButton = '👇';
    } else {
        nextIndex = '';
    }

    return (
        <>
            <span><button onClick={() => move(currentIndex, prevIndex)} >{prevButton}</button></span>
            <span><button onClick={() => move(currentIndex, nextIndex)} >{nextButton}</button></span>
            <span><button onClick={() => remove(id)}>🗑️</button></span>
        </>
    )
    }

export default ToDoListButton