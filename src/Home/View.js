import React, { useEffect, useState } from "react";
import { Col, Row, Button } from "reactstrap";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [player, setPlayer] = useState("X");
    const [winner, setWinner] = useState(null);
    const [winningCombination, setWinningCombination] = useState([])
    const [noWinner, setNoWinner] = useState("Play now")
    const [playerXWins, setPlayerXWins] = useState(0);
    const [playerOWins, setPlayerOWins] = useState(0);


    const handleClick = (index) => {
        const newBoard = [...board];
        if (newBoard[index] === null && winner === null) {
            newBoard[index] = player;
            setBoard(newBoard);
            setPlayer(player === "X" ? "O" : "X");
            checkWinner(newBoard);
        }
    };
    const updateScore = () => {
        console.log(winner)
        if (winner === "X") {
            setPlayerXWins(playerXWins + 1);
        } else if (winner === "O") {
            setPlayerOWins(playerOWins + 1);
        }
    };
    useEffect(() => {
        updateScore()
    }, [winner])
    const checkWinner = (newBoard) => {
        const winningCombinations = [[0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (
                newBoard[a] === newBoard[b] &&
                newBoard[b] === newBoard[c] &&
                newBoard[a] !== null
            ) {
                setWinner(newBoard[a]);
                setWinningCombination([a, b, c])

                break;
            }
        }
    };
    const renderWinner = () => {
        if (winner) {
            return "Winner is " + winner
        } else if (board.includes(null)) {
            return "Play now"
        } else {
            return "Tie !"
        }
    };
    const renderSquare = (index) => {

        return (
            <div
                className="square mx-2 my-2 pulse"
                onClick={() => handleClick(index)}
                style={{
                    color: board[index] === "X" ? "red" : "blue",
                    backgroundColor: winningCombination.includes(index) ? "green" : "",
                }}
            >
                {board[index]}
            </div>
        );
    };


    const resetBoard = () => {
        setBoard(Array(9).fill(null))
        setWinner(null)
        setWinningCombination([])
        setNoWinner("Play now")
    }
    return (
        <section className="tic-background">
            <Row>
                <Col className="">
                    <div><h1>Score</h1></div>
                    <div className="scoreboard">
                        <p>Player X wins: {playerXWins}</p>
                        <p>Player O wins: {playerOWins}</p>
                    </div>
                </Col>
                <Col md='4' className="text-center">
                    <h1>Tic-Tac-Toe</h1>
                    <h3 className="announce py-2">{renderWinner()}</h3>
                </Col>
                <Col className="d-flex align-items-center justify-content-center mt-5">
                    <div className="">
                        <Button className="rainbow-1 rainbow" onClick={() => { resetBoard() }}>Reset</Button>
                    </div>
                </Col>
            </Row>
            <Row>

                <Col md='12' className="d-flex justify-content-center  my-5">
                    <div className="tic-tac-toe">
                        {renderSquare(0)}
                        {renderSquare(1)}
                        {renderSquare(2)}
                        {renderSquare(3)}
                        {renderSquare(4)}
                        {renderSquare(5)}
                        {renderSquare(6)}
                        {renderSquare(7)}
                        {renderSquare(8)}

                    </div>
                </Col>

            </Row>
        </section>


    );
};

export default TicTacToe;
