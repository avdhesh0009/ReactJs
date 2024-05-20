import Chai from './components/Props';
import Card from './components/Card';
import PasswordGen from './components/PasswordGen';
function App() {
  let myObject={
    username:"Avdhesh",
    age:21
  }
  let myArr=[30,5,21,8,1];
  return (
     <>
        {/* <div className='flex gap-4'>
          <Card object1="Avdhesh" />
          <br/>
          <Card object1="Kumar"/>
        </div> */}
        <PasswordGen/>
     </>
  );
}

export default App;
