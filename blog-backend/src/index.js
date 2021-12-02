/* eslint-disable no-global-assign */
// 이 파일에서만 no-global-assign ESLint 옵션을 비활성화 합니다.

require = require('esm')(module /*, options */);
module.exports = require('./main.js');
