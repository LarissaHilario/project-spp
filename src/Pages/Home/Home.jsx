import { setTokens } from "../../Helpers/auth"
import People from "./Components/Patients/Pacientes"


const Home=()=>{

    console.log(setTokens.token)
    return(
    <div className="App">
     <People></People>
     
    </div>
    )
}

export default Home