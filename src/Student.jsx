import PropTypes from 'prop-types'

function Student(props){

    const style = {
        border: "1px solid black"
    }
    return(
        <div style = {style}>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

export default Student