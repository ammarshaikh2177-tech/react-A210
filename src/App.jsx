import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import A from './Components/A'
import{ ErrorBoundary } from 'react-error-boundary'
import B from './Components/B'

function ErrorFallBack({error})
{
  return<>
  <p>Daya Kuch Tho Gadbad Hai Yaha : {error.message}</p>
  </>
}

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   {/* <ErrorBoundary FallbackComponent={ErrorFallBack}>
    <A/>
    
   </ErrorBoundary> */}
{/* <ErrorBoundary fallback={<h1>kuch tho galat hai yaha </h1>}>
    <A/>
    
   </ErrorBoundary>
  
 */}

 <B/>
       </> 
)
}


export default App
