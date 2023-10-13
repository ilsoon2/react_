import './App.css';
import Hello from './Hello';
import Hello2 from './Hello2';

export default function App() {
  const name = 'Yang';
  const name2 = 'Kim';
  return (
    <>
      <Hello target={name} target2={name2} />
      <Hello2>
        <span>Hello</span>
        <span>World</span>
      </Hello2>
    </>
  );
}
