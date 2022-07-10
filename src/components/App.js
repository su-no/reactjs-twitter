import { useState } from 'react';
import AppRouter from './Router';


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <>
      <AppRouter isLoggedIn={isLoggedIn} /> {/* isLoggedIn 을 Prop으로 전달 */} {/* AppRouter를 따로 넣은 이유는,, Footer/Header 등 추가 가능성을 염두에 둔 것 */}
      <footer>&copy; Twitter {new Date().getFullYear()}</footer>
    </>
  );
}

export default App;
