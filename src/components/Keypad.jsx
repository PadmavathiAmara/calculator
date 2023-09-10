import './Keypad.css';

const Keypad = ( {onKeyClick,onEqualClick,settingNumCopy,onBackClick} ) => {
    
    return (
        <div className="cal-container">
            <table border={1}>
                <tbody>
                    <tr>
                        <td><button onClick={()=>onKeyClick("AC")}>AC</button></td>
                        <td><button onClick={()=>onBackClick()}>⌫</button></td>
                        <td><button onClick={()=>{
                            onKeyClick("%");
                            settingNumCopy("%");
                            }}>%</button></td>
                        <td><button onClick={()=>{
                            onKeyClick("/");
                            settingNumCopy("/");
                            }}>/</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{
                            onKeyClick(7);
                            settingNumCopy("7");
                            }}>7</button></td>
                        <td><button onClick={()=>{
                            onKeyClick(8);
                            settingNumCopy("8");
                            }}>8</button></td>
                        <td><button onClick={()=>{
                            onKeyClick(9);
                            settingNumCopy("9");
                            }}>9</button></td>
                        <td><button onClick={()=>{
                            onKeyClick("*");
                            settingNumCopy("*");
                            }}>*</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{
                            onKeyClick(4);
                            settingNumCopy("4");
                            }}>4</button></td>
                        <td><button onClick={()=>{
                            onKeyClick(5);
                            settingNumCopy("5");
                            }}>5</button></td>
                        <td><button onClick={()=>{
                            onKeyClick(6);
                            settingNumCopy("6");
                            }}>6</button></td>
                        <td><button onClick={()=>{
                            onKeyClick("-");
                            settingNumCopy("-");
                            }}>-</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{
                            onKeyClick(1);
                            settingNumCopy("1");
                            }}>1</button></td>
                        <td><button onClick={()=>{
                            onKeyClick(2);
                            settingNumCopy("2");
                            }}>2</button></td>
                        <td><button onClick={()=>{
                            onKeyClick(3);
                            settingNumCopy("3");
                            }}>3</button></td>
                        <td><button onClick={()=>{
                            onKeyClick("+");
                            settingNumCopy("+");
                            }}>+</button></td>
                    </tr>
                    <tr>
                        <td><button onClick={()=>{
                            onKeyClick(".");
                            settingNumCopy(".");
                            }}>.</button></td>
                        <td><button onClick={()=>{
                            onKeyClick(0);
                            settingNumCopy("0");
                            }}>0</button></td>
                        <td colSpan={2}><button onClick={()=>{
                            onKeyClick();
                            onEqualClick();
                            
                            }}>=</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

export default Keypad;