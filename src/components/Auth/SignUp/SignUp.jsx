import { useState } from 'react';
import './SignUp.scss'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const SignUp = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUserName] = useState("")
    const [isShowPassword, setShowPassword] = useState(true)

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };
    const HandleLogin = async () => {
        // validate
        if (!validateEmail(email)) {
            toast.error('Invalid Email')
            return;
        }
        if (!password) {
            toast.error('Invalid Password')
            return
        }
        let res = await postRegister(email, password, username)
        console.log(res)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            //await props.fetchListUsers() // after add success, call api again to update data 
        }
        if (res && +res.EC !== 0) {
            toast.error(res.EM)
        }
    }
    const BackHomePage = () => {
        navigate("/")
    }
    const GoToLogin = () => {
        navigate("/login")
    }

    return (
        <div className="login-page">
            <div className="row d-flex justify-content-center mt-5" style={{ width: '35%' }}>
                <div className="card py-3 px-2">
                    <div className="title">
                        Sign Up
                    </div>
                    <form className="myform">
                        <div className="form-group">
                            <input type="email" value={email} className="form-control" placeholder="Email"
                                onChange={(e) => { setEmail(e.target.value) }}
                            />
                        </div>
                        <div className="form-group showpass">
                            <input type={isShowPassword ? "password" : "text"} value={password} className="form-control" placeholder="Password"
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            {isShowPassword ?
                                <span className='icons-eye'
                                    onClick={() => { setShowPassword(false) }}
                                >
                                    <IoMdEyeOff />
                                </span>
                                :
                                <span className='icons-eye'
                                    onClick={() => { setShowPassword(true) }}
                                >
                                    <IoEye />
                                </span>}
                        </div>
                        <div className="form-group">
                            <input type="text" value={username} className="form-control" placeholder="UserName"
                                onChange={(e) => { setUserName(e.target.value) }}
                            />
                        </div>
                        <div className="form-group mt-3 d-flex justify-content-center">
                            <button type="button" className="btn btn-block btn-primary btn-lg w-100 "
                                onClick={() => { HandleLogin() }}
                            >
                                <small><i className="far fa-user pr-2"></i>SignUp</small>
                            </button>
                        </div>
                    </form>
                    <div className="row pt-3 align-self-center">
                        <span>Have acccount yet?
                            <span className='p-1 text-decoration-underline signup'
                                onClick={() => { GoToLogin() }}
                            >Login</span>
                        </span>
                    </div>
                    <div className="row pt-2 align-self-center">
                        <p className=' text-decoration-underline signup' onClick={() => { BackHomePage() }}>&#60;&#60;&#60; Back</p>
                    </div>

                </div>
            </div>
        </div>


    );
}
export default SignUp;