import { useState } from 'react'

import logo from './assets/investment-calculator-logo.png'
import ResultTable from './components/ResultTable.jsx'
import UserInput from './components/UserInput'

function App() {
    const [form, setForm] = useState({
        initialInvestment: 0,
        expectedReturn: 0,
        annualInvestment: 0,
        duration: 0,
    })

    function handleChange(field, e) {
        const newForm = {
            ...form,
            [field]: +e.target.value,
        }

        setForm(newForm)
    }

    return (
        <>
            <div id="header">
                <img src={logo} alt="Logo" />
                <h1>Investment Calculator</h1>
            </div>

            <UserInput form={form} callback={handleChange} />

            <ResultTable form={form} />
        </>
    )
}

export default App
