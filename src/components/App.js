import { useState } from 'react';
import AppRouter from './Router';
import fbase, { authService } from 'fbase';

const App = () => {
  // User의 로그인 여부 확인
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} /> {/* isLoggedIn 을 Prop으로 전달 */} {/* AppRouter를 따로 넣은 이유는,, Footer/Header 등 추가 가능성을 염두에 둔 것 */}
      <footer>&copy; Twitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
