import { useState } from "react";
import "./App.css";
import { Botao } from "./components/botao/Botao.jsx";
import { BotaoZero } from "./components/botaoZero/BotaoZero.jsx";

function App() {
  const [numeroUm, setNumeroUm] = useState("");
  const [simbolo, setSimbolo] = useState("");
  const [numeroDois, setNumeroDois] = useState("");

  function adicionarNumero(n) {
    let num = numeroUm + n;
    setNumeroUm(num);
  }

  function conta(sinal) {
    if (numeroUm != "" && numeroDois != "") {
      if (simbolo === "/") {
        setNumeroDois(parseFloat(numeroDois) / parseFloat(numeroUm));
      } else if (simbolo === "*") {
        setNumeroDois(parseFloat(numeroDois) * parseFloat(numeroUm));
      } else if (simbolo === "-") {
        setNumeroDois(parseFloat(numeroDois) - parseFloat(numeroUm));
      } else if (simbolo === "+") {
        setNumeroDois(parseFloat(numeroDois) + parseFloat(numeroUm));
      }
      setSimbolo(sinal);
      setNumeroUm("");
    } else {
      setSimbolo(sinal);
      setNumeroDois(numeroUm);
      setNumeroUm("");
    }
  }

  function resultado() {
    if (numeroUm != "" && numeroDois != "" && simbolo != "=") {
      if (simbolo === "/") {
        setNumeroUm(parseFloat(numeroDois) / parseFloat(numeroUm));
      } else if (simbolo === "*") {
        setNumeroUm(parseFloat(numeroDois) * parseFloat(numeroUm));
      } else if (simbolo === "-") {
        setNumeroUm(parseFloat(numeroDois) - parseFloat(numeroUm));
      } else if (simbolo === "+") {
        setNumeroUm(parseFloat(numeroDois) + parseFloat(numeroUm));
      }
      setNumeroDois("");
      setSimbolo("");
    }
  }

  function limpar() {
    setNumeroUm("");
  }

  function limparTudo() {
    setNumeroUm("");
    setNumeroDois("");
    setSimbolo("");
  }

  function porcentagem() {
    let p = (parseFloat(numeroUm) / 100) * parseFloat(numeroDois);
    setNumeroUm(p);
  }

  function addPonto() {
    if (numeroUm === "") {
      setNumeroUm("0.");
    } else if (!numeroUm.includes(".")) {
      let num = numeroUm + ".";
      setNumeroUm(num);
    }
  }
  return (
    <div className="content">
      <div className="calculadora">
        <div className="calculadoraHeader">
          <p className="equacao">{numeroDois}</p>
          <p className="solucao">
            {simbolo}
            {numeroUm}
          </p>
        </div>
        <div className="botoes">
          <div className="linhas">
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => limpar()}
              text={"CE"}
            ></Botao>
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => limparTudo()}
              text={"C"}
            />
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => porcentagem()}
              text={"%"}
            />
            <Botao
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => conta("/")}
              text={"/"}
            />
          </div>
          <div className="linhas">
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(7)}
              text={"7"}
            ></Botao>
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(8)}
              text={"8"}
            />
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(9)}
              text={"9"}
            />
            <Botao
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => conta("*")}
              text={"X"}
            />
          </div>
          <div className="linhas">
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(4)}
              text={"4"}
            ></Botao>
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(5)}
              text={"5"}
            />
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(5)}
              text={"6"}
            />
            <Botao
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => conta("-")}
              text={"-"}
            />
          </div>
          <div className="linhas">
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(1)}
              text={"1"}
            ></Botao>
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(2)}
              text={"2"}
            />
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(3)}
              text={"3"}
            />
            <Botao
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => conta("+")}
              text={"+"}
            />
          </div>
          <div className="linhas">
            <BotaoZero
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => adicionarNumero(0)}
              text={"0"}
            />
            <Botao
              color={"#a5a5a5"}
              background={"#616161"}
              onClick={() => addPonto()}
              text={"."}
            ></Botao>

            <Botao
              color={"#339dff"}
              background={"#005db2"}
              onClick={() => resultado()}
              text={"="}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
