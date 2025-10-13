import { calculateInvestmentResults, formatter } from '../util/investment.js';


function Result({ input }) {
    // console.log(input);
    // console.log(input.initialInvestment);
    // console.log(input.annualInvestment);
    // console.log(input.expectedReturn);
    // console.log(input.duration);

    const results = calculateInvestmentResults(input);
    console.log(results);
    const initialInvestment = results[0].valueEndOfYear - results[0].interest - results[0].annualInvestment;

    // Please note that the arrow function is using a curly bracket with a return
    // instead of the traditionall paranthesis and markup
    // This method provides a way to have JS code between the curly brackets for 
    // situations where additional calculations and operations are needed
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
                    {results && results.map((data) => {
                        const totalInterest = data.valueEndOfYear - data.annualInvestment * data.year - initialInvestment;
                        const totalAmountInvested = data.valueEndOfYear - totalInterest;
                        return (
                            <tr key={data.year}>
                                <td>{data.year}</td>
                                <td>{formatter.format(data.valueEndOfYear)}</td>
                                <td>{formatter.format(data.interest)}</td>
                                <td>{formatter.format(totalInterest)}</td>
                                <td>{formatter.format(totalAmountInvested)}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
    );
}


export default Result;
