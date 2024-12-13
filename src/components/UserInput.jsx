function UserInput({ form, callback }) {
    return (
        <div id="user-input">
            <div className="input-group">
                <div className="group">
                    <div>
                        <label htmlFor="initialInvestment">Initial Investment</label>
                        <input
                            type="number"
                            id="initialInvestment"
                            onChange={(e) => callback('initialInvestment', e)}
                        />
                    </div>

                    <div>
                        <label htmlFor="annualInvestment">Annual Investment</label>
                        <input type="number" id="annualInvestment" onChange={(e) => callback('annualInvestment', e)} />
                    </div>
                </div>

                <div className="group">
                    <div>
                        <label htmlFor="expectedReturn">Expected return (per year in %)</label>
                        <input type="number" id="expectedReturn" onChange={(e) => callback('expectedReturn', e)} />
                    </div>

                    <div>
                        <label htmlFor="duration">Duration</label>
                        <input type="number" id="duration" onChange={(e) => callback('duration', e)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserInput
