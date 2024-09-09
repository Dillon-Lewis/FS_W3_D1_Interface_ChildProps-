import { UserInfoProps } from "../interfaces/UserInfoProps"



const UserInfo = ({username, age, email}: UserInfoProps) => {
  return (
    <>
    <h1> User Information</h1>
    <h3>{username}</h3>
    <h3>{age}</h3>
    <h3>{email}</h3>
    </>
  )
}

export default UserInfo