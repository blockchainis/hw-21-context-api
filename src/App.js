import Main from "./components/Main";
import { useState } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      <h1>후니랜드에 오신걸 환영합니다.</h1>
      <button onClick={() => setIsLoggedIn((l) => !l)}>
        {isLoggedIn ? "로그아웃" : "로그인"}
      </button>
      <Main isLoggedIn={isLoggedIn} />
    </>
  );
}

export default App;
