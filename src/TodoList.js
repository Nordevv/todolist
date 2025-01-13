import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    {
    id:1,
    title:"Learn React Js",
    text:"read your React Book and don't forget to watch learning videos on youtube ! ",
    date:new Date().toLocaleDateString(),
  },
    {
    id:2,
    title:"Meet my Teacher",
    text:"meeting the teacher at 20025-02-18 to complet my courses ",
    date:new Date().toLocaleDateString(),
  }
]);
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  
  const addTask = () => {
    if (title && text) {
      setTasks([...tasks, { id: Date.now(), title, text, date: new Date().toLocaleDateString() }]);
      setTitle('');
      setText('');
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div style={{margin:"50px",}} >
        <h1 style={{borderBottom:"black 1px solid", width:"fit-content", margin:"0 auto", color:"#212121", padding:"10px 0"}} >TodoList App</h1>
            <div className='parent' >
                <div className='inputs' >
                    <div style={{display:"flex",flexDirection:"column", gap:"8px",}}>
                        <h2>Title :</h2>
                        <input type="text" placeholder="What's the Title of your Task ?" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div style={{display:"flex",flexDirection:"column", gap:"8px",}} >
                        <h2>Description :</h2>
                        <textarea placeholder="What's the Description of your Tak ?" value={text} onChange={(e) => setText(e.target.value)} ></textarea>
                    </div>
                    <button className='AddBtn' onClick={addTask}>Add Task</button>
                </div>
            <div>
                
                
                
            </div>

            <div>
                {tasks.map(task => (
                    <div style={{ width:"90%", display:"flex",justifyContent:"space-between", alignItems:"center", backgroundColor:"#3e3e3e", margin:"12px auto", padding:"18px 20px",}} >
                        <div className='task' key={task.id}>
                            <h2>{task.title}</h2>
                            <p>{task.text}</p>
                            <span> <strong>Added At : </strong>{task.date}</span>
                        </div>
                        <button className='DeleteBtn' onClick={() => deleteTask(task.id)}><i class="fa-regular fa-trash-can "></i></button>
                    </div>
                
                ))}
            </div>
        </div>
    </div>
    
  );
}

export default App;
