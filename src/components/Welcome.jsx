import { BsCurrencyExchange } from "react-icons/bs";
import { ButtonMUI } from "../exprts&imports/index";
import { useNavigate } from "react-router-dom";
import "../index.scss";

function WelcomeComp() {
  const navigate = useNavigate();
  const navigateToCurrencyConvertor = () => {
    navigate("/currencyConvertor");
  };
  return (
    <div className="mainWelcome flex justify-center items-center h-screen">
      <div className="welcomeContainer flex justify-center items-center rounded-xl shadow-md p-8 m-5">
        <h2 className="uppercase font-bold">Currency Converotr Guru!</h2>
        <BsCurrencyExchange className="w-40 h-40" />
        <ButtonMUI
          redirect={navigateToCurrencyConvertor}
          icon="start"
          text="Lets Start"
        />
      </div>
    </div>
  );
}

export default WelcomeComp;
