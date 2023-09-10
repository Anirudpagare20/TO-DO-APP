import { useState } from "react";

const AddTodo = props => {
	const [value, setValue] = useState(props.addTodoValue);

	const handleChange = e => {
		setValue(e.target.value);
	};

	const clearInput = () => {
		setValue("");
	};

	const addTodo = e => {
		e.preventDefault();
		props.fooAddTodo(value);
		clearInput();
	};

	return (
		<form onSubmit={addTodo}>
			<div className='input-group mb-3'>
				<input
					type='text'
					className='form-control'
					id='todoValue'
					placeholder='ToDo'
					value={value}
					onChange={handleChange}
				/>
				<div className='input-group-append'>
					<button className='btn btn-success' type='submit' id='button-addon2'>
						Add New To-Do
					</button>
				</div>
			</div>
		</form>
	);
};

export default AddTodo;