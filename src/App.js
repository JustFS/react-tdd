import React from 'react'
import { useState } from 'react'
import Options from './pages/entry/Options'
import SummaryForm from './pages/summary/SummaryForm'

const App = () => {
  return (
    <div>
      <SummaryForm />
      <Options optionType={'scoops'} />
    </div>
  )
}

export default App
