import { useEffect, useState } from 'react'

import Header from './components/Header'
import Formulario from './components/Formulario'
import Day from './components/Day'
import Form from './components/Form'
import ListTasks from './components/ListTasks'
import Week from './components/Week'
import Month from './components/Month'
import Year from './components/Year'
import './App.css'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [dateM, setDateM] = useState(new Date())

  const data = JSON.parse(localStorage.getItem('tasks'))

  const [tasks, setTasks] = useState(data?data:[])
  const [tab, setTab] = useState('day')
  const [user, setUser] = useState([])

  //console.log(tasks);

  useEffect(() => {
    localStorage.setItem('tasks',JSON.stringify(tasks))
  }, [tasks])

  return (
    <main>
      {/* <h1 className='text-4xl'>Todo List</h1> */}
      <div className='bg-gray03 text-white rounded max-w-[1000px] m-auto'>
        
        <Header tab={tab} setTab={setTab} />
        {          
          tab === 'day' && <>          
                    
            <Day dateM={dateM} setDateM={setDateM} user={user}/>
            <Form 
              dateM={dateM}
              tasks={tasks}
              setTasks={setTasks}
            /> 
            <ListTasks 
              tasks={tasks}
              setTasks={setTasks}
              dateM={dateM}              
            />
            
          </>
        }
        { tab==='formulario' && <Formulario tasks={tasks} setUser={setUser}/> }
        { tab==='week' && <Week tasks={tasks}/> }
        { tab==='month' && <Month tasks={tasks}/> }
        { tab==='year' && <Year tasks={tasks}/> }
        
      </div>

     
    </main>
  )
}

export default App
