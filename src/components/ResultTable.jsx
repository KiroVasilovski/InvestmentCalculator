import { calculateInvestmentResults, formatter } from '../util/investment'

function ResultTable({ form }) {
    const results = calculateInvestmentResults(form)

    let cumulativeInterest = 0

    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment Value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {results.map((row, rowIndex) => {
                    cumulativeInterest += row.interest

                    return (
                        <tr key={rowIndex}>
                            <td>{row.year}</td>
                            <td>{formatter.format(row.valueEndOfYear)}</td>
                            <td>{formatter.format(row.interest)}</td>
                            <td>{formatter.format(cumulativeInterest)}</td>
                            <td>{formatter.format(form.initialInvestment + form.annualInvestment * (rowIndex + 1))}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default ResultTable
