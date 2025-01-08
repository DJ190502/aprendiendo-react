import { useState } from 'react';
const TURNS = ['⭕️', '✖️'];


const Square = ({ children, updateBoard, isSelected, turno, index }) => {

  const select = (x) => {
    if (x === '⭕️') {
      return `is-selected rojo`;
    } else {
      return `is-selected azul`;
    }
  };

  const className = `square ${isSelected ? select(turno) : ''}`;

  const handleClick = () => {
    updateBoard(index);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  );
  //El primer estado siempre va a 
  // ser el tablero y el cambio va a ser el 
  // cambio que le vas a hacer al teclado

  const [turn, setTurn] = useState(TURNS[Math.floor(Math.random() * TURNS.length)]);

  const [winner, setWinner] = useState(null)

  const checkWinner = (boardtoCheck) =>{
    const checkLine = (a,b,c) =>{
      return (boardtoCheck[a] && boardtoCheck[a] === boardtoCheck[b] && boardtoCheck[a] === boardtoCheck[c]);
    };
    
    for (let i = 0; i < 3; i++) 
    {
      if (checkLine(i * 3, i * 3 + 1, i * 3 + 2)) return boardtoCheck[i * 3]
      if (checkLine(i, i + 3, i + 6)) return boardtoCheck[i] 
    }
    if (checkLine(0,4,8)) return boardtoCheck[0]
    if (checkLine(2,4,7)) return boardtoCheck[2] 

    if(boardtoCheck.every(element => element !== null)){
      return false
    }
    return null
  }

 
  const updateBoard = (index) => {
    //Si esta ocupada la posicion no hacer nada
    if (board[index] || winner ) return;
    //Actualizar el tablero con la jugada
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    //cambiar el turno
    //revisar si hay ganador
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
    }else if(newWinner === false){
      setWinner(false)
    }
    const newTurn = turn === TURNS[0] ? TURNS[1] : TURNS[0];
    setTurn(newTurn);
  };
  console.log(winner)
  return (
    <main className='board'>
      <h1>Cero o Cruz</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                index={index}
                key={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            );
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS[0]} turno={turn}>{TURNS[0]}</Square>
        <Square isSelected={turn === TURNS[1]} turno={turn}>{TURNS[1]}</Square>
      </section>
      <section>
        {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false ? 'Empate' : 'Ganó'
                  }
                </h2>

              </div>

            </section>
          )
        }
      </section>
    </main>
  );
}

export default App;
