import { useState } from "react";
import AddTodo from "./AddTodo";
import Todo from "./Todo";

const Todos = () => {
	const [editTodo, setEditTodo] = useState({});
	const [todos, setTodos] = useState(
		localStorage.getItem("todos")
			? JSON.parse(localStorage.getItem("todos"))
			: [],
	);

	//Local helper method to get date
	function getTime() {
		let d = new Date();
		var n = d.getTime();
		return n;
	}

	//method called from Todo component
	const handleDelete = todo => {
		const todosArr = todos?.filter(t => {
			return t.id !== todo.id;
		});
		setTodos(todosArr);
		localStorage.setItem("todos", JSON.stringify(todosArr));
	};

	const handleDone = todo => {
		const todosArr = [...todos];
		todosArr?.map(t => {
			if (t.id === todo.id) {
				t.isDone = !t.isDone;
			}
			return t;
		});
		setTodos(todosArr);
		localStorage.setItem("todos", JSON.stringify(todosArr));
	};

	//method called from AddTodo component
	const addNewTodo = value => {
		if (value) {
			const todosArr = [...todos];
			todosArr?.push({
				id: getTime(),
				value: value,
				isDone: false,
			});
			setTodos(todosArr);
			localStorage.setItem("todos", JSON.stringify(todosArr));
		} else {
			alert("Please add a value");
		}
	};

	const editTodoFun = todo => {
		const todosArr = [...todos];
		todosArr?.map(t => {
			if (t.id === todo.id) {
				t.value = todo.value;
			}
			return t;
		});
		setEditTodo({});
		setTodos(todosArr);
		localStorage.setItem("todos", JSON.stringify(todosArr));
	};

	const setEditValue = todo => {
		setEditTodo(todo);
	};

	return (
		<div>
			{todos?.length <= 0 && (
				<div className='alert alert-info text-center' role='alert'>
					<b>No Todos Added</b>
				</div>
			)}
			<table className='table'>
				<tbody>
					{todos.map((todo, index) => (
						<tr key={todo.id}>
							<Todo
								index={index + 1}
								todo={todo}
								fooDelete={handleDelete}
								fooDoneDone={handleDone}
								fooEdit={setEditValue}
							/>
						</tr>
					))}
					<tr>
						<td colSpan='4' className='text-center'>
							<AddTodo fooAddTodo={addNewTodo} />
						</td>
					</tr>
				</tbody>
			</table>
			<div className='modal fade' id='exampleModal'>
				<div className='modal-dialog'>
					<div className='modal-content'>
						<div className='modal-header'>
							<h5 className='modal-title' id='exampleModalLabel'>
								Update Todo Value
							</h5>
							<button
								type='button'
								className='btn-close'
								data-bs-dismiss='modal'
								aria-label='Close'></button>
						</div>
						<div className='modal-body'>
							<form
								onSubmit={e => {
									e.preventDefault();
									editTodoFun(editTodo);
								}}>
								<div className='mb-3'>
									<label htmlFor='recipient-name' className='col-form-label'>
										Value:
									</label>
									{editTodo?.value && (
										<input
											type='text'
											className='form-control'
											value={editTodo.value}
											onChange={e =>
												setEditTodo({
													...editTodo,
													value: e.target.value,
												})
											}
										/>
									)}
								</div>
								<div className='modal-footer'>
									<button
										type='button'
										className='btn btn-secondary'
										data-bs-dismiss='modal'>
										Close
									</button>
									<button
										type='submit'
										className='btn btn-primary'
										data-bs-dismiss='modal'>
										Update
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Todos;