const checkLoggedIn = (ctx, next) => {
  // 로그인 상태가 아니라면 401 HTTP Status를 반환합니다.
  if (!ctx.state.user) {
    ctx.status = 401; // Unauthorized
    return;
  }
  return next();
};

export default checkLoggedIn;
