import React, {useState} from "react"
import axios from "axios"
const BASE_URL = "https://req-header-prsr.herokuapp.com"

const App = () => {
    const [result, setResult] = useState({})

    const handleClick = (data) => {
        axios.get(`${BASE_URL}/whoami`).then((response) => {
            setResult(response.data)
            console.log(response.data)
            console.log(result)
        })
    }

    return(
        <div className="container">
            <button className="btn" onClick={handleClick}>Who am I ?</button>
            {result.ipaddress ? (
                <div className="info">
                    <div>
                    <p>IP Adress:</p><h2> {result.ipaddress}</h2>
                    </div>
                    <div>
                    <p>Language:</p><h2> {result.language}</h2>
                    </div>
                    <div>
                    <p>Software:</p><h2> {result.software}</h2>
                    </div>
                    
                </div>
            ) : (
                <div></div>
            )}

        </div>
    )
}

export default App