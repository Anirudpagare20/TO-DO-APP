import "./App.css";
import Todos from "./Components/Todos";

const App = () => {
	return (
		<div className='container'>
			<h1 className='text-center'>TO-DO-APP</h1>
			<Todos />
		</div>
	);
};

export default App;