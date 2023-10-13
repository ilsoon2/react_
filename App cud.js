import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [arr, setArr] = useState([1, 2]);
  const [obj, setObj] = useState({ id: 'yang123', pw: '1234' });

  useEffect(() => {
    console.log('arr 바뀜');
  }, [arr]);

  const addArr = () => {
    setArr([...arr, 3]);
  };
  const modArr = () => {
    setArr(
      arr.map((item, index) => {
        return index === arr.length - 1 ? 999 : item;
      })
    );
  };
  const delArr = () => {
    setArr(
      arr.filter((item, index) => {
        return index !== arr.length - 1;
      })
    );
  };

  const addObj = () => {
    setObj({ ...obj, email: 'text@gmail.com' });
  };
  const modObj = () => {
    setObj({ ...obj, email: 'zzzz@gmail.com' }); // ...obj 기존의 값을 변경하지 않고 그대로 가지고 온다
  };
  const delObj = () => {
    const { email, ...delObj } = obj;
    setObj(delObj);
  };

  return (
    <div>
      <div>
        <button onClick={addArr}>배열추가</button>
        <button onClick={modArr}>배열수정</button>
        <button onClick={delArr}>배열삭제</button>
      </div>
      <div>
        <button onClick={addObj}>객체추가</button>
        <button onClick={modObj}>객체수정</button>
        <button onClick={delObj}>객체삭제</button>
      </div>

      <div>배열값 : {arr.join(', ')}</div>
      <div>
        객체값 <div>아이디 : {obj.id} </div> <div>비밀번호 : {obj.pw}</div>
        <div>이메일 : {obj.email}</div>
      </div>
    </div>
  );
}
