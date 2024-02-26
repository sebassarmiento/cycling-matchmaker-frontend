import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import "../styles/login.css"
import { useState } from "react";
import LoaderWheel from "../components/LoaderWheel";

const LoginPage = () => {

    const navigate = useNavigate();

    const [userName, setUserName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const [loginSuccessful, setLoginSuccessful] = useState<boolean>(true); // true for prototype only

    const [loading, setLoading] = useState<boolean>(false);

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value)
    }

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const handleLogin = (e: any) => {
        if(userName == "" || password == ""){
            console.log("hereeeeee")
            return null;
        } else {
            e.preventDefault();
            console.log("The name is " + userName)
            // fetch
            if(loginSuccessful){
                setLoading(true);
                setTimeout(() => {
                    // navigate to "/app/profile", aka login
                    navigate("/app/profile");
                    console.log("navigated!");
                }, 3000);
            }
        }
    }

    if(loading){
        return (
            <div>
                <LoaderWheel />
            </div>
        )
    }

    return (
        <div className="login-main-container" >
            <form onSubmit={handleLogin} className="login-form-container" >
                
                <h1 className="login-form-brand" >
                    <Link to="/" >Cycling matchmaker</Link>
                </h1>

                <div className="login-form-input" >
                    <label htmlFor="username" >Username or email</label>
                    <input id="username" onChange={handleNameChange} type="text" value={userName} />
                </div>

                <div className="login-form-input" >
                    <label htmlFor="password" >Password</label>
                    <input id="password" onChange={handlePasswordChange} type="password" value={password} />
                </div>

                <div onClick={handleLogin} className="login-form-login-btn" >
                    <Button disabled={userName == "" || password == ""} type="primary" >Login</Button>
                </div>
                <span className="login-form-to-signup" >Don't have an account?<span><Link to="/signup" >Sign up</Link></span></span>
            </form>
        </div>
    )
};

export default LoginPage;