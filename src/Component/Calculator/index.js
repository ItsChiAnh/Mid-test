import {useState} from "react";
import './style.css';

const Calculator = () => {
    const [result, setResult] = useState('');

    const handleClick = (e) => {
        setResult(result + (e.target.name));
    }

    const clear = () => {
        setResult('');
    }

    const calculate = () => {
        try {
            setResult(eval(result).toString());
        }
        catch (e) {
            setResult("error")
        }
    }

    return (
        <div className='container'>
            <h1>Calculator</h1>

            <div className='display'>
                    <input type="text" value={result}/>
            </div>

            <div className="operators">
                        <button name="/" onClick={handleClick}>&divide;</button>
                        <button name="*" onClick={handleClick}>&times;</button>
                        <button name="-" onClick={handleClick}>&minus;</button>
                        <button name="+" onClick={handleClick}>+</button>
            </div>
            <div className="buttons">
            <div className='numbers'>
                        <button name="7" onClick={handleClick} id='number'>7</button>
                        <button name="8" onClick={handleClick} id='number'>8</button>
                        <button name="9" onClick={handleClick} id='number'>9</button>
                        <button name="4" onClick={handleClick} id='number'>4</button>
                        <button name="5" onClick={handleClick} id='number'>5</button>
                        <button name="6" onClick={handleClick} id='number'>6</button>
                        <button name="1" onClick={handleClick} id='number'>1</button>
                        <button name="2" onClick={handleClick} id='number'>2</button>
                        <button name="3" onClick={handleClick} id='number'>3</button>
                        <button onClick={clear}>C</button>
                        <button name="0" onClick={handleClick} id='number'>0</button>
                        <button name="." onClick={handleClick}>.</button>
            </div>
            <div className="equal">
                <button onClick={calculate}>=</button>
            </div>
            </div>
        </div>
    )
}

export default Calculator;