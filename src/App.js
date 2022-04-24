import ExpenceItem from "./components/ExpenceItem";

function App() {
  // this is an IMPERATIVE approach (how u would do with js)
  // const para = document.createElement('p');
  // para.textContent = 'this is visible';
  // document.getElementById('root').append(para)
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenceItem></ExpenceItem>     
    </div>
  );
}

export default App;
