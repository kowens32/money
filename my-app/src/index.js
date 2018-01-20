import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calculator from './calculator/Calculator.jsx';
import Bills from './calculator/Bills';


class Budget extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            answer: 0,
            rent: 0,
            utilities: 0,
            gas: 0,
            goals: 0
        }
    }

    handleAnswer = (answer) => {
        this.setState({ answer });
    }

    updateCategoryAmount = (category) => {
        this.setState((state, props) => {
            state[category] = state.answer;
            return state
        })
    }

    render() {
        return (
            <div className="budget">
                <div className="calculator">
                    <Calculator handleAnswer={this.handleAnswer}/>
                </div>
                <div className="bills">
                    <Bills updateCategory={this.updateCategoryAmount}/>
                </div>
                {/*<div className="graph">*/}
                    {/*<Graph bills={this.state} rent={this.state.rent}/>*/}
                {/*</div>*/}
            </div>
        );
    }
}

ReactDOM.render(
    <Budget />,
    document.getElementById('app')
);

