import MainContent from "./MainContent";
function Main({ isLoggedIn }) {
  return (
    <div>
      <h1>메인 컨텐츠입니다.</h1>
      <MainContent isLoggedIn={isLoggedIn} />
    </div>
  );
}

export default Main;
