import './App.css';
import React, { useState } from 'react';
import Person from './components/Person/Person';

function App() {
  const [person, setPersons] = useState([
    { name: "huy1", age: "2" },
    { name: "huy2", age: "5" },
    { name: "huy3", age: "6" }
  ]);
  const [isShowPerson, setIsShowPerson] = useState(true);

  const switchNameHandler = (event, index) => {
    let newPerson = [...person];
    newPerson[index].name = event.target.value;
    setPersons(newPerson);
  }

  const toggleNameHandler = () => {
    setIsShowPerson(!isShowPerson);
  }

  const deletePersonHandler = (indexPerson) =>{
    let newPerson = [...person];
    newPerson.splice(indexPerson, 1);
    setPersons(newPerson);
  }

  return (
    <>
      <div className="App">
        First app react
      </div>
      <button onClick={() => toggleNameHandler()}>toggle name</button>

      {
        isShowPerson ? (
          <>
            {
              person.map((item, index ) => {
                return (
                  <Person key={index} change={(e)=>switchNameHandler(e, index)} 
                  click={() => deletePersonHandler(index)} name={item.name} age={item.age}>  
                  </Person>)
              })
            }
          </>
        ) : null
      }
    </>
  );
}

export default App