import React from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'
import Counter3 from './components/Counter3'
import Counter4 from './components/Counter4'

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-2 gap-6 w-full max-w-3xl">
        
        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <Counter1 />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <Counter2 />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <Counter3 />
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 border border-gray-200">
          <Counter4 />
        </div>

      </div>
    </div>
  )
}

export default App
