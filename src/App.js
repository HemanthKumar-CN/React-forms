import logo from './logo.svg';
import './App.css';
import Form from './component/Form';
import { ChildToParent } from './ChildToParent';
import { Siblings } from './siblings';


function App() {
  return (
    <div className="App">
      <Form/>
      <ChildToParent/>
      <Siblings/>
    </div>
  );
}

export default App;
