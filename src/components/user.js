import { useParams } from "react-router-dom";
import PR from "./profileList";
function User({match,  Pr }) {



//extract the id of the user that we clicked on its name 
// const id=match.params.id
const {id}=useParams()
//search fr that very user inside the table of users 
const user=PR.find(el=> el.id==id)

  return (
    <div className='user'>
      <img src='https://www.nicepng.com/png/detail/125-1253785_my-name-is-istabraq-almusally-hi-bubble-png.png' />
    <h1>  this is the profile of {user.name } </h1>
    </div>
  );
}
export default User;
