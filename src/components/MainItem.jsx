function MainItem({ isLoggedIn }) {
  return (
    <div>
      <h3>메인 아이템입니다.</h3>
      {isLoggedIn ? (
        <div>
          <h1>블랙핑크</h1>
          <h1>레드벨벳</h1>
          <h1>트와이스</h1>
        </div>
      ) : (
        <div>
          <p>숨겨진 글을 확인하기 위해선</p>
          <strong>로그인을 해주세요!</strong>
        </div>
      )}
    </div>
  );
}

export default MainItem;
