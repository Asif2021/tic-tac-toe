import React, {useState} from 'react'

export function Square ({value, onSquareClick}){
  
  return (
    <div>
   <button className="square" onClick={onSquareClick}>{value}</button>
    </div>
  )
}

export default function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  function handlClick(i){
    const nextSquares =  squares.slice();
    nextSquares[i] = "X"
    setSquares(nextSquares);
  }

  return (
  <div>
    <div className="board-row">
   <Square value={squares[0]}  onSquareClick={ () => handlClick(0)} />
   <Square value={squares[1]} onSquareClick={ () => handlClick(1)} />
   <Square value={squares[2]} onSquareClick={() => handlClick(2)} />
  </div>

  <div className="board-row">
  <Square value={squares[3]} onSquareClick={()=> handlClick(3)} />
  <Square value={squares[4]} onSquareClick={()=> handlClick(4)} />
  <Square value={squares[5]} onSquareClick={()=> handlClick(5)} />
  </div>

  <div className="board-row">
  <Square value={squares[6]} onSquareClick={()=> handlClick(6)} />
  <Square value={squares[7]} onSquareClick={()=> handlClick(7)} />
  <Square value={squares[8]} onSquareClick={()=> handlClick(8)} />
    </div>
  </div>
    );
  }
