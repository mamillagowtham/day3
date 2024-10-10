

// import React, { useState } from 'react'

//  const App = () => {

//   const [count,setCount] = useState(0)
  

//   function handleClick()
//   {
//     setCount(count + 1)
//   }
//   return  <button onClick={handleClick}>clicked {count} times</button>
  
// }
// export default App;









// import React, { useState } from 'react'

//  const App = () => {

//   const [count,setCount] = useState(0)
  
//   function handleClick()
//   {
//     setCount(count + 1)
//   }

 
//   return <> <MyButton handleClick = {handleClick} count = {count}/>
//           <MyButton handleClick = {handleClick} count = {count}/>
          
//           </>
  
// }
// export default App;

// function MyButton({count,handleClick})
// {
//    return <button onClick={handleClick}>click {count} times</button>
//    }






import React from 'react'
import ToDo from './components/ToDo'

const App = () => {
  return (
    <div>
        <ToDo/>
    </div>
  )
}

export default App
