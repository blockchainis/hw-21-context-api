import MainItem from "./MainItem";

function MainContent({ isLoggedIn }) {
  return (
    <div>
      <h1>후니랜드~</h1>
      <MainItem isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default MainContent;
