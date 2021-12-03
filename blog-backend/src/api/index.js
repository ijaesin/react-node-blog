import Router from 'koa-router';
import posts from './posts';
import auth from './auth';

const api = new Router();

api.use('/posts', posts.routes()); // post 라우트 적용
api.use('/auth', auth.routes()); // auth 라우트 적용

// 라우터를 내보냅니다.
export default api;
