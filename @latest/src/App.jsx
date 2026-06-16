import { useState } from 'react'
import CustomInput from './CustomInput'
import CustomSelect from './CustomSelect'
import Button from './Button'

function App() {
  const [taskName, setTaskName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [DueDate, setDueDate] = useState("");
  const [Priority, setPriority] = useState("");

  const Labels = ["Task Name:", "Start Date:", "Date Due:", "Priority:", "Task Status:"];


   // این یک کامنت تستی برای نسخه دوم است!



  return (
  
    <div className="m-10 p-10 max-w-6xl mx-auto bg-white rounded-3xl shadow-sm">
      
      <CustomInput 
        Label={Labels[0]} 
        type="text" 
        value={taskName} 
        onChange={(e) => setTaskName(e.target.value)} 
      />

      <CustomInput 
        Label={Labels[1]} 
        type="date" 
        value={startDate} 
        onChange={(e) => setStartDate(e.target.value)} 
      />

      <CustomInput 
        Label={Labels[2]}
        type="date" 
        value={DueDate} 
        onChange={(e) => setDueDate(e.target.value)} 
      />

      <CustomSelect 
        Label={Labels[3]} 
        options={[]} 
        value={Priority} 
        onChange={(e) => setPriority(e.target.value)} 
      />

      <div className="flex justify-end gap-4 mt-8">
        <Button taskName={taskName} startDate={startDate} DueDate={DueDate} Priority={Priority}></Button>
      </div>

    </div>
  )
}

export default App
