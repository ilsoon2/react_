import './App.css';
import Hello from './Hello';
export default function App() {
  const name = 'Kim';
  return (
    <>
      <Hello name={name} isSpecial={true} isPremium={true} />
    </>
  );
}
