import Header from "./Header"
import Footer from "./Footer"
import Card from "./Card";
import Button from "./Button/Button";
import Student from "./Student";
import List from "./List"
import MyComponent from "./MyComponent"

function App() {
  return(
    <>
      <Header> </Header>

      <Card></Card>

      <Student  id={55} name="Stefan" age={22} isStudent={true}></Student>
      <Student id={155} name="Kiro" age={23} isStudent={false}></Student>

      <List></List>

      <MyComponent></MyComponent>

      <Footer></Footer>

      <Button></Button>
    </>
  );
}

export default App
