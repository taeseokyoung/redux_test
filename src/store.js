import { configureStore, createSlice } from "@reduxjs/toolkit";

// state 같은 역할을 하는 slice
const word = createSlice({
    name: '숫자로 만들기',
    initialState: 1,
    reducers: {
        up: (state) => state + 1
    }
})

const { up } = word.actions;
export { up }



const changeMode = createSlice({
    name: '다크모드',
    initialState: false,
    reducers: {
        change: (state) => !state
    }
})

export const { change } = changeMode.actions;


const createInput = createSlice({
    name: '포함하는 값 받기',
    initialState: [],
    reducers: {
        create: (state, action) =>
        // state.push()
        // console.log(state, action.payload)
        { state.push(action.payload) }
        // { state.push('안녕') }
        // return이 자동으로 되면 안된다...
    }
})

export const { create } = createInput.actions;



const store = configureStore({
    reducer: {
        word: word.reducer,
        changeMode: changeMode.reducer,
        createInput: createInput.reducer
    }
});

export default store