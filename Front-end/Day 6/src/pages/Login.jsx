import '../styles/Login.css'
import EmailIcon from '@mui/icons-material/Email';
import PasswordIcon from '@mui/icons-material/Password';
import { useState } from 'react';
import log_img from '../images/login_img.jpg'
import { useNavigate } from 'react-router-dom';

function Login() {
    const [action, setAction] = useState("Sign In");
    const [role, setRole] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [number, setNumber] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate=useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        if (action === "Sign In") {
            // Validation for Sign In
            if (!email || !password) {
                setError("Please fill in all fields.");
                return;
            }
            if (email=="admin@gmail.com"){
                console.log("Signing in...");
                navigate("/adacademy");

            }
            else{
                console.log("Signing in...");
                navigate("/profile");

            }
            // Implement Sign In logic (e.g., send request to backend)
        } else if (action === "Sign Up") {
            // Validation for Sign Up
            if (!email || !password || !confirmPassword) {
                setError("Please fill in all fields.");
                return;
            }
            if (password !== confirmPassword) {
                setError("Passwords do not match.");
                return;
            }
            if (password.length < 8 || password.length > 12) {
                setError("Password must be 8 to 12 characters long.");
                return;
            }
            if (!/(?=.*[A-Z])(?=.*[@$!%*?&]).{8,12}/.test(password)) {
                setError("Password must contain at least 1 uppercase letter and 1 special character.");
                return;
            }
            if (!/^\d{10}$/.test(number)) {
                setError("Mobile number must be 10 digits.");
                return;
            }
            // Implement Sign Up logic (e.g., send request to backend)
            console.log("Signing up...");
            navigate("/profile");
        }
        
        // Reset form fields after submission
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setNumber("");
        setRole("");
        setName("");
    };

    return (
        <div className='login_back'>
            <div className="img_container">
                <img src={log_img} alt="Login" />
            </div>
            <div className='container'>
                <div className="head">
                    <div className='text'>Welcome, Buddy!!!</div>
                    <div className='text'>{action}</div>
                    <div className="underline"></div>
                </div>
                <form className='inputs' onSubmit={handleSubmit}>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="text" placeholder='Admin/User' value={role} onChange={(e) => setRole(e.target.value)}/>
                        </div>
                    }
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="text" placeholder='Username' value={name} onChange={(e) => setName(e.target.value)}/>
                        </div>
                    }
                    <div className="input">
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="text" placeholder='Mobile Number' value={number} onChange={(e)=> setNumber(e.target.value)} />
                        </div>
                    }
                    <div className="input">
                        <input type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    {action === "Sign Up" &&
                        <div className="input">
                            <input type="password" placeholder='Confirm Password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                        </div>
                    }
                    <div className="error">{error}</div>
                {action === "Sign In" &&
                    <div className="forgotpass">Forgot password?<a href='#'>Click here!</a></div>
                }
                    <div className="subcont">
                        <input type='submit' value='SignUp' className={action === "Sign In" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}/>
                        <input type='submit' value='SignIn' className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign In") }}/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
