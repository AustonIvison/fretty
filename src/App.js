import logo from './logo.svg';
import './App.css';
import notes from './notes';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          fretty
        </p>
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
                 <td>
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
