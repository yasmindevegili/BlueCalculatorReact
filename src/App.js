import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState(0);
  const [previousNumber, setPreviousNumber] = useState(0);
  const [operation, setOperation] = useState();
  const [equation, setEquation] = useState(0);
  const [result, setResult] = useState(0);

  function SettingNumber(e) {
    const settingNumber = e.target.value;
    if (number === 0) {
      setEquation(settingNumber);
      setNumber(settingNumber);
    } else {
      setEquation(equation + settingNumber);
      setNumber(number + settingNumber);
    }
  }

  function SettingOperation(e) {
    const settingOperation = e.target.value;
    setOperation(settingOperation);
    setEquation(equation + settingOperation);
    setPreviousNumber(number);
    setNumber(0);
  }

  function Clean() {
    setEquation(0);
    setNumber(0);
    setResult(0);
  }

  function Percentage() {
    setEquation(parseFloat(number) / 100);
    setNumber(parseFloat(number) / 100);
  }

  function ChangeSign() {
    setEquation(number * -1);
    setNumber(number * -1);
  }

  function Calculator() {
    switch (operation) {
      case "+":
        setResult(parseFloat(previousNumber) + parseFloat(number));
        break;
      case "-":
        setResult(parseFloat(previousNumber) - parseFloat(number));
        break;
      case "X":
        setResult(parseFloat(previousNumber) * parseFloat(number));
        break;
      case "/":
        setResult(
          number === 0
            ? "Operação impossível"
            : parseFloat(previousNumber) / parseFloat(number)
        );
        break;
      default:
        setResult("Erro!");
    }
  }

  return (
    <div className="App">
      <h1></h1>
      <div className="calculator">
        <div className="screen">
          <div className="screen-content">{ result !== 0 ? result : equation}</div>
        </div>
        <div className="keyboard">
          <div className="row">
            <button className="btn-clean" onClick={Clean} value={"C"}>
              C
            </button>
            <button
              className="btn-operations"
              onClick={ChangeSign}
              value={"+/-"}
            >
              +/-
            </button>
            <button className="btn-operations" onClick={Percentage} value={"%"}>
              %
            </button>
            <button
              className="btn-operations"
              onClick={SettingOperation}
              value={"/"}
            >
              /
            </button>
          </div>
          <div className="row">
            <button className="btn" onClick={SettingNumber} value={7}>
              7
            </button>
            <button className="btn" onClick={SettingNumber} value={8}>
              8
            </button>
            <button className="btn" onClick={SettingNumber} value={9}>
              9
            </button>
            <button
              className="btn-operations"
              onClick={SettingOperation}
              value={"X"}
            >
              x
            </button>
          </div>
          <div className="row">
            <button className="btn" onClick={SettingNumber} value={4}>
              4
            </button>
            <button className="btn" onClick={SettingNumber} value={5}>
              5
            </button>
            <button className="btn" onClick={SettingNumber} value={6}>
              6
            </button>
            <button
              className="btn-operations"
              onClick={SettingOperation}
              value={"-"}
            >
              -
            </button>
          </div>
          <div className="row">
            <button className="btn" onClick={SettingNumber} value={1}>
              1
            </button>
            <button className="btn" onClick={SettingNumber} value={2}>
              2
            </button>
            <button className="btn" onClick={SettingNumber} value={3}>
              3
            </button>
            <button
              className="btn-operations"
              onClick={SettingOperation}
              value={"+"}
            >
              +
            </button>
          </div>
          <div className="row">
            <button
              className="btn-operations"
              onClick={SettingNumber}
              value={0}
            >
              0
            </button>
            <button
              className="btn-operations"
              onClick={SettingNumber}
              value={"."}
            >
              ,
            </button>
            <button className="btn-equal" onClick={Calculator} value={"="}>
              =
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
