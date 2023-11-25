import {Link} from "react-router-dom"

function Home(props) {
  return (
    <div>
        <div  className="">
            <Link to="/login" >Login</Link>
        </div>
        <div  className="">
        <Link to="/signup">Signup</Link>
        </div>
        <div>
            <p>{ props.name ? `Welcome - ${props.name}` : "Login Please"}

</p>
        </div>
      
    </div>
  )
}

export default Home