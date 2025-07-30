import styled from "styled-components";
import Card_html from "./components/Card_html";
import Card_css from "./components/card_css";
import Card_js from "./components/Card_js";
import Card_Resct from "./components/Card_Resct";

export default function App() {
  return (
    <DivApp>
      <DivAAA>
        Beckend <br /> <br /> 1
      </DivAAA>
      <Card_html />

      <DivAAA>2</DivAAA>
      <Card_css />

      <DivAAA>3</DivAAA>
      <Card_js />

      <DivAAA>4</DivAAA>
      <Card_Resct />
    </DivApp>
  );
}

const DivApp = styled.div`
  margin-top: 50px;
`;

const DivAAA = styled.h1`
  margin: 0 auto;
  text-align: center;
  font-size: 2.2rem;
  font-weight: 900;
  letter-spacing: 2px;
  background: linear-gradient(120deg, #0f2027 30%, #ffd700 60%, #1a2980 100%);
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  margin-bottom: 32px;
  text-shadow: 0 2px 12px #000a, 0 1px 0 #ffd70080;
`;
