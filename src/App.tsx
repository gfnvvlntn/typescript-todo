import React,{Component} from 'react';
import Todos from "./pages/todos/Todos";
import './App.css'



class App extends Component{
    render() {
        return (
            <div className='container'>
                <Todos/>
            </div>
        );
    }
}

export default App;
