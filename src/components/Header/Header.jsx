import "./Header.scss";

export const Header = () => {
  return (
    <header>
      <div className="header__title">
        <h1>The Science of Happiness</h1>
      </div>
      {/* TODO:make subitle dynamic */}
      <div className="header__subtitle">Everyday Joy Boosters survey</div>
    </header>
  );
};
