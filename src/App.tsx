import { useState } from 'react'

import './App.css'


function App() {
  

  return (
    <>
    <BrowerRouter>
      <Routes>
      <Route index element={<Home />} />
      <Route path="/BY DATE" element={<ByDate />} />
      <Route path="TODAY" element={<Today />} />
      <Route path="SINCE" element={<SINCE />} />

      </Route>
    
    
    </BrowerRouter>
      
    </>
  )
}

export default App
