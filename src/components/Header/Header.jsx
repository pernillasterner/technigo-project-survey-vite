import { Button } from "../UIElements/Button/Button";
import "./Header.scss";

export const Header = ({ step, onClick }) => {
  return (
    <header className="header__container">
      <div className="header__wrapper">
        <div className="header__title">
          <h1>Let's start this adventure!</h1>
        </div>
        <div className="header__subtitle">Everyday Joy Boosters survey</div>
      </div>

      <Button step={step} onClick={onClick} />
    </header>
  );
};
