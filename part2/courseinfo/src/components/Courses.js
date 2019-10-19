import React from 'react'

const Header = ({ course }) =>
    <h1>{course}</h1>



const Part = ({ name, exercises }) =>
    <p>{name} {exercises}</p>


const Content = ({ parts }) => {

    const listParts = () =>
        parts.map(part =>
            <Part
                key={part.id}
                name={part.name}
                exercises={part.exercises}>
            </Part>)

    return (
        <div>
            {listParts()}
        </div>
    )
}

const Total = ({ parts }) => {
    const count = parts.reduce((s, p) => { return ({ exercises: s.exercises + p.exercises }) }).exercises
    return (
        <b>Number of exercises: {count}</b>
    )
}

const Course = ({ course }) =>
    <div>
        <Header course={course.name}></Header>
        <Content parts={course.parts}></Content>
        <Total parts={course.parts}></Total>
    </div >

const Courses = ({ courses }) => {
    const listCourses = () =>
        courses.map(course =>
            <Course course={course} key={course.id} ></Course>)

    return (
        <div>
            {listCourses()}
        </div>
    )
}

export default Courses