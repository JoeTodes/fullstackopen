import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Button = (props) =>
    <button onClick={props.handleClick}>{props.text}</button>



const Statistic = (props) => {
    return (
        <tr>
            <td>{props.text}</td>
            <td>{props.value}</td>
        </tr>
    )
}

const Statistics = (props) => {
    const total = () => {
        return (props.good + props.neutral + props.bad)
    }
    const average = () => {
        return ((props.good - props.bad) / total())
    }
    const positive = () => {
        return (props.good * 100 / total())
    }

    if (total() === 0) {
        return (
            <div>
                <h2>statistics</h2>
                <p>No feedback given</p>
            </div>
        )
    } else {
        return (
            <div>
                <h2>statistics</h2>
                <table>
                    <tbody>
                        <Statistic text="good" value={props.good}></Statistic>
                        <Statistic text="neutral" value={props.neutral}></Statistic>
                        <Statistic text="bad" value={props.bad}></Statistic>
                        <Statistic text="all" value={total()}></Statistic>
                        <Statistic text="average" value={average()}></Statistic>
                        <Statistic text="positive" value={positive()}></Statistic>
                    </tbody>
                </table>


            </div>
        )
    }

}

const App = () => {
    // save clicks of each button to own state
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const setToValue = (setter, value) => {
        setter(value);
    }

    return (
        <div>
            <h2>give feedback</h2>
            <Button text="good" handleClick={() => setToValue(setGood, good + 1)}></Button>
            <Button text="neutral" handleClick={() => setToValue(setNeutral, neutral + 1)}></Button>
            <Button text="bad" handleClick={() => setToValue(setBad, bad + 1)}></Button>
            <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById('root')
)