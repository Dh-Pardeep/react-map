import React, { useState } from 'react';

const Calculator = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');

    const handleClick = (value) => {
        if (value === '=') {
            try {
                setResult(eval(input).toString());
            } catch (error) {
                setResult('Error');
            }
        } else if (value === 'C') {
            setInput('');
            setResult('');
        } else {
            setInput((prevInput) => prevInput + value);
        }
    };

    return (
        <div className="calculator">
            <div className="display w-100 cl_width_set mx-auto">
                <input type="text" className='w-100' value={input} readOnly />
                <span className="result w-100">{result}</span>
            </div>
            <div className="buttons w-100 cl_width_set mx-auto">
                <button className='w-25 ' onClick={() => handleClick('7')}>7</button>
                <button className='w-25 ' onClick={() => handleClick('8')}>8</button>
                <button className='w-25 ' onClick={() => handleClick('9')}>9</button>
                <button className='w-25 ' onClick={() => handleClick('/')}>/</button>
                <button className='w-25 ' onClick={() => handleClick('4')}>4</button>
                <button className='w-25 ' onClick={() => handleClick('5')}>5</button>
                <button className='w-25 ' onClick={() => handleClick('6')}>6</button>
                <button className='w-25 ' onClick={() => handleClick('*')}>*</button>
                <button className='w-25 ' onClick={() => handleClick('1')}>1</button>
                <button className='w-25 ' onClick={() => handleClick('2')}>2</button>
                <button className='w-25 ' onClick={() => handleClick('3')}>3</button>
                <button className='w-25 ' onClick={() => handleClick('-')}>-</button>
                <button className='w-25 ' onClick={() => handleClick('0')}>0</button>
                <button className='w-25 ' onClick={() => handleClick('.')}>.</button>
                <button className='w-25 ' onClick={() => handleClick('=')}>=</button>
                <button className='w-25 ' onClick={() => handleClick('+')}>+</button>
                <button className='w-25 ' onClick={() => handleClick('C')}>C</button>
            </div>
        </div>
    );
};

export default Calculator;
