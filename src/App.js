import Cell from "./components/Cell";
import { useState , useEffect} from "react";

const  App = () => {
  const [cells, setCells] = useState(["","","","","","","","",""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setWinningMessage ] = useState(null);

  const message = "it is now " + go + "'s turn";

  console.log(cells);

  const checkScore = () => {
    const winningCombos = [
      [0,1,2] , [3,4,5] , [6,7,8] , [0,3,6] , [1,4,7] , [2,5,8] , [0,4,8] , [2,4,6]
    ]

    winningCombos.forEach(combo => {
      let circleWins = combo.every(cell => cells[cell] ==="circle")
      if(circleWins) {
        setWinningMessage("circle wins")
        return
      }
    })
    winningCombos.forEach(combo => {
      let squareWins = combo.every(cell => cells[cell] ==="cross")
      if(squareWins) {
        setWinningMessage("cross wins")
        return
      }
    })

  }


  useEffect(() => {
    checkScore()
  } , [cells])


  return (
    <div className="App">
      <div className="gameboard">
        {cells.map((cell, index) => 
            <Cell key={index} 
              id={index}
              cell={cell} 
              setCells={setCells}
              go={go}
              setGo={setGo}
              cells={cells}
              winningMessage={winningMessage}
            />)}
      </div>
      <p>{winningMessage || message}</p>
      <p></p>
    </div>
  );
}

export default App;
