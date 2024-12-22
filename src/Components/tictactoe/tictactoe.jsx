import React, { useState } from 'react'
import './tictactoe.css'
import circle from '../assets/circle.png'
import cross from '../assets/cross.png'
let data = ["", "", "", "", "", "", "", "", ""];
export default function TicTacToe() {
    const [count, setCount] = useState(0);
    const [lock, setLock] = useState(false);
    const toggle = (e, num) => {
        if (lock) {
            return;
        }
        if (count % 2 === 0) {
            e.target.innerHTML = `<img src='${cross}' alt='cross'>`;
            data[num] = 'x';
        } else {
            e.target.innerHTML = `<img src='${circle}' alt='circle'>`;
            data[num] = 'o';
        }
        setCount(count + 1);
        checkWin();
    }
    const checkWin = () => {
        if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
            won(data[0]);
        }
        else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
            won(data[3]);
        }
        else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
            won(data[6]);
        }
        else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
            won(data[0]);
        }
        else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
            won(data[1]);
        }
        else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
            won(data[2]);
        }
        else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
            won(data[0]);
        }
        else if (data[2] === data[4] && data[4] === data[6] && data[6] !== "") {
            won(data[2]);
        }
    }
    const won = (winner) => {
        alert(`Player ${winner} wins!`);
        setLock(true);
    }
    const resetGame = () => {
        setCount(0);
        setLock(false);
        data = ["", "", "", "", "", "", "", "", ""];
        document.querySelectorAll('.boxes').forEach(box => {
            box.innerHTML = '';
        });
    }
    return (
        <div className='container'>
            <h1 className='title'> Tic Tac Toe</h1>
            <div className='board'>
                <div className="row1">
                    <div className="boxes" onClick={(e) => toggle(e, 0)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 1)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 2)}></div>
                </div>
                <div className="row2">
                    <div className="boxes" onClick={(e) => toggle(e, 3)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 4)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 5)}></div>
                </div>
                <div className="row3">
                    <div className="boxes" onClick={(e) => toggle(e, 6)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 7)}></div>
                    <div className="boxes" onClick={(e) => toggle(e, 8)}></div>
                </div>
            </div>
            <button className='reset' onClick={resetGame}>reset</button>
        </div>
    )
}
