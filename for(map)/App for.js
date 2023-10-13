import './App.css';
export default function App() {
  const name = 'Kim';

  const userList = [
    { id: 1, name: 'John', email: 'John@gmail.com' },
    { id: 2, name: 'Smith', email: 'Smith@gmail.com' },
    { id: 3, name: 'Jane', email: 'Jane@gmail.com' },
    { id: 4, name: 'Yang', email: 'Yang@gmail.com' },
    { id: 5, name: 'Shin', email: 'Shin@gmail.com' },
  ];

  const render = userList.map((item) => {
    return (
      <div key={item.id}>
        <div classNmae="userName">{item.name}</div>
        <div classNmae="userEmail">{item.email}</div>
      </div>
    );
  });
  return (
    <>
      <div classNmae="userList">{render}</div>
    </>
  );
}
