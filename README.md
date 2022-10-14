# Redux

1. 리덕스툴킷 설치
```
npm install @reduxjs/toolkit
```
2. store(state 모아둘 곳) 만들기
```jsx
import { configureStore } from "@reduxjs/toolkit";

export default store = configureStore({
    reducer: {},
})
```
3. Provider 로 앱 감싸주기
```jsx
import { Provider } from 'react-redux';
import store from './data/store';

<Provider store={store}>
    <App />
</Provider>
```
4. createSlice로 state 추가하기
```jsx
const test = createSlice({
    name: 'test',
    initialState: 'im test text...'
})
```