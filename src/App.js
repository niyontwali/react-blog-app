import Navbar from './Navbar';
import Body from './Body';

function App() {
  const title = 'Welcome to React App'
  const num = 1
  const handleClick = () => {
    console.log('You just clicked me!')
}
  return (
    // Container div
    <div className='mx-[100px]'>
      <Navbar />
      {/* Heading */}
      <h1 className='text-center mt-10 text-blue-600 font-bold text-4xl'> {title} </h1>
      <p className='font-bold text-center mt-3'>This is the {num}st  paragraph</p>
      <button className='btn' onClick={handleClick} >Click here</button>
      <Body/>
    </div>
  );
}

export default App;
