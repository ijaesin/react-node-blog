import { Route, Routes } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import WritePage from './pages/WritePage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <Routes>
      <Route element={<PostListPage />} path="/" />
      <Route element={<PostListPage />} path="/@:username" />
      <Route element={<LoginPage />} path="/login" />
      <Route element={<RegisterPage />} path="/register" />
      <Route element={<WritePage />} path="/write" />
      <Route element={<PostPage />} path="/@:username/:postId" />
    </Routes>
  );
}

export default App;
