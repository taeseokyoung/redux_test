import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { up, change, create } from './store';

const Sub = () => {
    // 아무렇게나 선언을 해줘도 가져와졌다. 객체로{}
    // const text = useSelector(state => state);
    // console.log(text)

    // word를 다이렉트로 가져왔더니 콘솔에 문장만 나왔다.
    const { word, createInput } = useSelector(state => state);
    const dispatch = useDispatch();
    console.log(createInput)
    return (
        <div>
            숫자 {word}
            <button onClick={() => dispatch(up())}>
                +
            </button>
            <button onClick={() => dispatch(change())}>
                change mode
            </button>
            <button onClick={() => dispatch(create('취업'))}>
                전달하기
            </button>
        </div>
    )
}

export default Sub;