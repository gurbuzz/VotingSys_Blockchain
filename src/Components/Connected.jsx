import React from "react";

const Connected = (props) => {
    const showResults = props.showButton; 
    const fontSizeStyle = { fontSize: '1.5em' }; 
    const buttonColor = '#3498db'; 

    const tableStyle = {
        width: '80%',
        margin: 'auto', 
    };

    const tableHeaderStyle = {
        backgroundColor: buttonColor,
        color: 'white',
        ...fontSizeStyle,
    };

    return (
        <div className="connected-container" style={{ backgroundColor: 'grey' }}>
            <h1 className="connected-header" style={fontSizeStyle}>You can only vote once</h1>
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-account" style={fontSizeStyle}>Remaining Time: {props.remainingTime}</p>
            {showResults ? (
                <>
                    <p className="connected-account" style={fontSizeStyle}>You have already voted</p>
                    <table id="resultsTable" className="results-table" style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Name</th>
                                <th style={tableHeaderStyle}>Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.candidates.map((candidate, index) => (
                                <tr key={index}>
                                    <td style={fontSizeStyle}>{candidate.name}</td>
                                    <td style={fontSizeStyle}>{candidate.voteCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </>
            ) : (
                <div>
                    <table id="candidatesTable" className="candidates-table" style={tableStyle}>
                        <thead>
                            <tr>
                                <th style={tableHeaderStyle}>Select</th>
                                <th style={tableHeaderStyle}>Name</th>
                                <th style={tableHeaderStyle}>Votes</th>
                            </tr>
                        </thead>
                        <tbody>
                            {props.candidates.map((candidate, index) => (
                                <tr key={index}>
                                    <td style={fontSizeStyle}>
                                        <input
                                            type="radio"
                                            id={`candidate${index}`}
                                            name="selectedCandidate"
                                            value={index}
                                            checked={props.selectedCandidateIndex === index}
                                            onChange={props.handleNumberChange}
                                        />
                                    </td>
                                    <td style={fontSizeStyle}>{candidate.name}</td>
                                    <td style={fontSizeStyle}>{candidate.voteCount}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <br />
                    <button className="login-button" style={{ width: '300px', marginTop: '10px', fontSize: '1.5em', backgroundColor: buttonColor, color: 'white' }} onClick={props.voteFunction}>
                        Vote
                    </button>
                </div>
            )}
        </div>
    );
};

export default Connected;
