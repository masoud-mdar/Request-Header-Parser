import React, {useState} from "react"
import axios from "axios"
const BASE_URL = "https://req-header-prsr.herokuapp.com"

const App = () => {
    const [result, setResult] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {
        setIsLoading(true)
        axios.get(`${BASE_URL}/whoami`).then((response) => {
            setResult(response.data)
            setIsLoading(false)
        })
    }

    return(
        <div>
            {!isLoading ? (

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

            ) : (
                <div className="loading"><h1>Loading...</h1></div>
            )}
        </div>

    )
}

export default App