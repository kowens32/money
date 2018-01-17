import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Frame from './calculator/frame.jsx';

class Rent extends React.Component {
    render() {
        return (
            <button className="Rent">
                Rent
            </button>
        );
    }
}

class Utilities extends React.Component {
    render() {
        return (
            <button className="Utilities">
                Utilities
            </button>
        );
    }
}


class Gas extends React.Component {
    render() {
        return (
            <button className="Gas">
                Gas
            </button>
        );
    }
}

class Goals extends React.Component {
    render() {
        return (
            <button className="Goals">
                Goals
            </button>
        );
    }
}


class Board extends React.Component {
    renderRent(i) {
        return <Rent />;
    }
    renderUtilities(i) {
        return <Utilities />
    }
    renderGas(i) {
        return <Gas />
    }

    renderGoals(i) {
        return <Goals />
    }

    render() {
        const status = "Let's Manage Your Budget!";

        return (
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderRent(0)}
                    {this.renderUtilities(1)}
                    {this.renderGas(2)}
                    {this.renderGoals(3)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    render() {
        return (
            <div className="game">
                <div className="game-board">
                    <Board />
                </div>
                <div className="game-info">
                    <div>{/* status */}</div>
                    <ol>{/* TODO */}</ol>
                </div>
            </div>
        );
    }
}


// ========================================

ReactDOM.render(
    <Game />,


    document.getElementById('root')
);


