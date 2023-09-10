import React from "react";

const Todo = props => {
	
	function renderTodo() {
		if (props.todo.isDone) return <s>{props.todo.value}</s>;
		else return props.todo.value;
	}

	return (
		<React.Fragment>
			<td style={{ width: 10 }} className='text-center'>
				{props.index}
			</td>
			<td style={{ width: 15 }} className='text-center'>
				<input
					type='checkbox'
					defaultChecked={props.todo.isDone}
					onChange={() => props.fooDoneDone(props.todo)}
				/>
			</td>
			<td>{renderTodo()}</td>

			<td style={{ width: 100 }} className='text-center'>
				<button
					data-bs-toggle='modal'
					data-bs-target='#exampleModal'
					type='button'
					className='btn btn-warning btn-sm'
					onClick={() => props.fooEdit(props.todo)}>
					Edit
				</button>
			</td>
			<td style={{ width: 100 }} className='text-center'>
				<button
					onClick={() => props.fooDelete(props.todo)}
					className='btn btn-danger btn-sm'>
					Delete
				</button>
			</td>
		</React.Fragment>
	);
};

export default Todo;