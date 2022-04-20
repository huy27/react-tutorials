import './App.css';
import React, { useState } from 'react';



function App() {
  const [jobs, setJobs] = useState(() => (
    JSON.parse(localStorage.getItem("jobs")) ?? []
  ));
  const [job, setJob] = useState();

  const handleAddJob = () => {
    let newJobs = [...jobs, job];
    setJobs(newJobs);
    setJob('');
    localStorage.setItem("jobs", JSON.stringify(newJobs));
  }

  const ClearJobs = () => {
    setJob('');
    setJobs([]);
    localStorage.removeItem("jobs");
  }

  const RemoveJob = (job) => {
    let newJobs = jobs.filter((item) => (
      item !== job
    ));
    setJobs(newJobs);
    localStorage.setItem("jobs", JSON.stringify(newJobs));
  }

  return (
    <>
      <div style={{ padding: 30 }}>
        <input value={job} onChange={e => setJob(e.target.value)}></input>
        <button onClick={handleAddJob} style={{ marginLeft: 30, backgroundColor: 'greenyellow' }}>Add</button>
        <button onClick={ClearJobs} style={{ marginLeft: 30, backgroundColor: 'greenyellow' }}>Clear</button>
      </div>
      <ul>
        {
          jobs.map((item, index) => (
            <div key={index}>
              <li>
                {item}
                <button onClick={() => RemoveJob(item)}>x</button>
              </li>
              
            </div>
          ))
        }

      </ul>
    </>
  )
}

export default App