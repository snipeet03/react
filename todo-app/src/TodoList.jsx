import { set } from "mongoose";
import React , {useState} from "react";

function TodoList(){
	const[tasks, setTasks] = useState([ "Eat the breakfast , Take a shower , Go to the school "]);
	const [newTask, setNewTask] = useState("");

	function handleImputChange(e){
		setNewTask(e.target.value);
	}


	function addTask(){

	}

	function deleteTask(index){

	}


	function moveTaskUp(index) {

	}

	function moveTaskDown(index) {

	}



	return( 
		<div className = "to-do-list">
			<h1>Todo-List</h1>

			<div>
				<input type="text" value = {newTask} placeholder="Enter the task" onChange = {handleImputChange} />
				<button className="add-button" onClick={addTask} >Add Task</button>
			</div>

			<ol>
				{tasks.map((task, index) => (
					<li key={index}>
						{task}
						<button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
						<button className="move-up-button" onClick={() => moveTaskUp(index)}>Move Up</button>
						<button className="move-down-button" onClick={() => moveTaskDown(index)}>Move Down</button>
					</li>
				))}
			</ol>

		</div>
	)


}

export default TodoList;