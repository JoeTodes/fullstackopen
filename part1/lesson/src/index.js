import React from 'react';
import ReactDOM from 'react-dom';

const Hello = (props) => (
    <div>
        <p>Hello {props.name}! You are {props.age} years old</p>
    </div>
)

const App = () => {
    const name = "John"
    const age = 2;
    return (
        <div>
            <p>Greeting:</p>
            <Hello name={name} age={age} />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));