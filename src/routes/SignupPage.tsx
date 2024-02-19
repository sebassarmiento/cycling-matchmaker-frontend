import { Link } from "react-router-dom";
import Button from "../components/Button";
import { useState } from "react";
import "../styles/signup.css";
import LoaderWheel from "../components/LoaderWheel";

const SignupPage = () => {

    const [loading, setLoading] = useState<boolean>(false);

    const [userName, setUserName] = useState<string>("");
    const [emailAddress, setEmailAddress] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [reTypedPassword, setReTypedPassword] = useState<string>("");


    const handleUsernameChange = (e: any) => {
        setUserName(e.target.value);
    }

    const handleEmailAddressChange = (e: any) => {
        setEmailAddress(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const handleReTypedPasswordChange = (e: any) => {
        setReTypedPassword(e.target.value);
    }

    const handleSignUp = () => {
        console.log("username: " + userName);
        console.log("email address " + emailAddress);
        console.log("password: " + password);
        console.log("retyped password:  " + reTypedPassword);
        setLoading(true);
    }

    if(loading){
        return(
            <div className="signup-loading" >
                <LoaderWheel />
            </div>
        )
    }

    return (
        
        <div className="signup-main-container" >
            <div className="signup-form-container" >
                <h1 className="signup-form-brand" >
                    <Link to="/" >Cycling matchmaker</Link>
                </h1>

                <div className="signup-form-input" >
                    <label>Username</label>
                    <input onChange={handleUsernameChange} type="text" value={userName} />
                </div>

                <div className="signup-form-input" >
                    <label>Email address</label>
                    <input onChange={handleEmailAddressChange} type="text" value={emailAddress} />
                </div>

                <div className="signup-form-input" >
                    <label>Password</label>
                    <input onChange={handlePasswordChange} type="password" value={password} />
                </div>

                <div className="signup-form-input" >
                    <label>Re-type Password</label>
                    <input onChange={handleReTypedPasswordChange} type="password" value={reTypedPassword} />
                </div>

                <div className="signup-form-signup-btn" >
                    <div onClick={handleSignUp} >
                        <Button type="primary" >Sign up</Button>
                    </div>
                    <span className="signup-form-to-signup" >Already have an account?<span><Link to="/login" >Login</Link></span></span>
                </div>
            </div>
        </div>
    )
};

export default SignupPage;