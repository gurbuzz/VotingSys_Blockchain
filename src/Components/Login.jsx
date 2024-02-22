import React from "react";

const Login = (props) => {
    const containerStyle = {
        backgroundColor: "grey",
    };

    const welcomeMessageStyle = {
        fontFamily: "Arial, sans-serif",
        marginTop: "50px",
    };

    return (
        <div className="login-container" style={containerStyle}>
            <img
                src={process.env.PUBLIC_URL + "/logo192.png"}
                alt="Logo"
                className="logo"
            />
            <h1 className="welcome-message" style={welcomeMessageStyle}>
                Welcome To The Blockchain-Based Voting System
            </h1>
            <button className="login-button" onClick={props.connectWallet}>
                Login With Metamask
            </button>
        </div>
    );
};

export default Login;
