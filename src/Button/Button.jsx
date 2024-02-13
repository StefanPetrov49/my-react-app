import styles from './Button.module.css'

function Button(){

    const handleClick = () => console.log("Test")

    const handleClick2 = (name) => console.log(`${name} stop clicking`)

    let count = 0
    const handleClick3 = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked ${count} time/s`)
        }
        else{
            console.log(`${name} stop clicking`)
        }
    }

    return(
        <button className={styles.button} onClick={() => handleClick3("Stefan")}>Click me!</button>
    );
}
export default Button