import Card from "react-bootstrap/Card";
import UserInfo from "./components/UserInfo"
import { UserInfoProps } from "./interfaces/UserInfoProps"
import 'bootstrap/dist/css/bootstrap.css';
import CardComponent from "./components/CardComponent";


function App() {

  const User: UserInfoProps ={
    username: "8-bit Hero",
    age: 50,
    email: "PongChamp87@gmail.com"
  }

  return (
    <>
     <UserInfo {...User} />
     <CardComponent>
     <Card style={{ width: '20rem' }}>
      <Card.Body>
        <Card.Title>{User.username}</Card.Title>
        <Card.Text>
          For this Card Component, I decided to type some of my own text, along
          with adding some information from the first question!
        </Card.Text>
        <Card.Text>
          The Current age of {User.username} is {User.age}
        </Card.Text>
      </Card.Body>
    </Card>
    </CardComponent>     
    </>
  )
}

export default App
