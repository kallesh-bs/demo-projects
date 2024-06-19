import React, { useRef, useState } from 'react'
import AppName from '../AppName'
import { Link } from 'react-router-dom';


export default function TodoApp() {

    const [todo, setTodo] = useState([])
    const [dodone, setDodone] = useState([])
    let inputRef = useRef();
    console.log(todo);

    // todo.map((x, i) => <div key={Math.random() + ""}>{x}</div>)

    function addToDo() {
        if (inputRef.current.value !== '') {
            setTodo([...todo, inputRef.current.value])
        }
    }

    function deleteTodo(i) {
        setTodo(todo.filter((x, y) => y !== i))
    }

    function taskDone(x, i) {
        setTodo(todo.filter((x, y) => y !== i))
        setDodone([...dodone, x])
    }

    function deleteDoDone(i) {
        setDodone(dodone.filter((x, y) => y !== i))
    }

    return (<>
        <div>
            <AppName appname={"ToDo App"} />
        </div>
        <div style={{ margin: "0px 40%" }}>

            <div>
                <input type="text" ref={inputRef} style={{ padding: "5px" }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            addToDo();
                        }
                    }} />
                &nbsp;
                <button onClick={addToDo} style={{ padding: "5px", cursor: "pointer", width: "60px" }}> Add</button>
            </div>
            <div>
                <br />

                {todo.length !== 0 ?
                    <table border={1} className='tbl1'>
                        <thead>
                            <tr>
                                <th colSpan={2}>Task ToDo List</th>
                            </tr>
                            <tr>
                                <th >Task Name</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {todo.map((x, i) => <tr key={Math.random() + ""}>
                                <td style={{ backgroundColor: "#fff9c4", textAlign: "center" }} >{x}  </td>
                                <td><Link onClick={() => taskDone(x, i)}>Done</Link> &nbsp;&nbsp;&nbsp; <Link onClick={() => deleteTodo(i)}>Delete</Link></td>
                                {/* <td> {x}</td> */}
                            </tr>)}
                        </tbody>
                    </table>
                    :
                    <table border={1} className='tbl1'>
                        <thead>
                            <tr>
                                <th colSpan={3}>Task ToDo List</th>
                            </tr>
                            <tr>
                                <th>Task Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td colSpan={3} style={{ textAlign: "center" }}>No Data Available</td></tr>
                        </tbody>
                    </table>}

                <br />

                {dodone.length !== 0 ?
                    <table border={1} className='tbl1'>
                        <thead>
                            <tr>
                                <th colSpan={3}>Task Completed List</th>
                            </tr>
                            <tr>
                                <th>Task Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dodone.map((x, i) => <tr key={Math.random() + ""}>
                                <td style={{ backgroundColor: "#7bdcb5", textAlign: "center" }}>{x}  </td>
                                <td>Completed</td>
                                <td><Link onClick={() => deleteDoDone(i)}>Delete</Link></td>
                            </tr>)}
                        </tbody>
                    </table>
                    :
                    <table border={1} className='tbl1'>
                        <thead>
                            <tr>
                                <th colSpan={3}>Task Completed List</th>
                            </tr>
                            <tr>
                                <th>Task Name</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr><td colSpan={3} style={{ textAlign: "center" }}>No Data Available</td></tr>
                        </tbody>
                    </table>}
            </div>
        </div >
    </>

    )
}
