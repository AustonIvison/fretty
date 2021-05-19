import * as React from 'react';
import logo from './logo.svg';
import './App.css';
import notes from './notes';

function App() {
  const [showScale, setShowScale] = React.useState(false);
  const toggleScale = () => {
    setShowScale(!showScale);
    console.log(showScale)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          fretty
        </p>
        <button onClick={
          toggleScale
        } >showScale: {JSON.stringify(showScale)}</button>
        <table>
      {
        // computation here
       // JSON.stringify(notes)
       notes.map((guitarstring) => {
       //return JSON.stringify(guitarstring)
       return (
         <tr>
           {
             guitarstring.map((fret)=> {
               return (
                 <td className={fret==='F' && showScale?'active':'inactive'}>
                   {fret}
                 </td>
               )
             })
           }
         </tr>
       )
       })
      }</table>
      </header>
    </div>
  );
}

export default App;
