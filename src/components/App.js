import React, { useEffect, useState } from "react";

function App() {
    const [dogImage, setDogImage] = useState("")
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(data => {
            setDogImage(data.message)
            setIsLoaded(true)
        })
    }, [])

    if (!isLoaded) return <p>Loading...</p>

    return (
        <img src={dogImage} alt="A Random Dog"></img>
    )
}

export default App