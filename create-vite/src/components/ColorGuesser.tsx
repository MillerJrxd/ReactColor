import { useState } from "react"

const ColorGuesser = () => {
    const [red, setRed] = useState<number>(0)
    const [green, setGreen] = useState<number>(0)
    const [blue, setBlue] = useState<number>(0)

    const [riddleRed] = useState(Math.floor(Math.random() * 255 + 1))
    const [riddleGreen] = useState(Math.floor(Math.random() * 255 + 1))
    const [riddleBlue] = useState(Math.floor(Math.random() * 255 + 1))
  
    const [showRiddle, SetShowRiddle] = useState(false)
    return (
    <div style={{
        background:`rgb(${red}, ${green}, ${blue})`
    }}>
        <div style={{
            width: "100px",
            aspectRatio: 1,
            background: `rgb(${riddleRed}, ${riddleGreen}, ${riddleBlue})`
        }}></div>


        <label htmlFor="red">R - {red}</label><br/>
        <input type="range" id="red" min={0} max={255} 
        onChange={(e)=>setRed(Number(e.target.value))}/>
        <br/>
        <label htmlFor="green">G - {green}</label><br/>
        <input type="range" id="green" min={0} max={255}
        onChange={(e)=>setGreen(Number(e.target.value))}/>
        <br/>
        <label htmlFor="blue">B - {blue}</label><br/>
        <input type="range" id="blue" min={0} max={255}
        onChange={(e)=>setBlue(Number(e.target.value))}/><br></br>

        <button onClick={()=> SetShowRiddle(true)}>Guess</button>
        {showRiddle ?
          <h2>rgb( {riddleRed}, {riddleGreen}, {riddleBlue} )</h2>:
          <h2>rgb ( ?, ?, ? )</h2>
        }
    </div>
  )
}

export default ColorGuesser