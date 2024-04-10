import { useState } from 'react';
import './Login.scss'
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { ImSpinner8 } from "react-icons/im";

import { useDispatch } from 'react-redux';
import { doLogin } from '../../../redux/action/userAction';
import { postLogin } from '../../../api/ApiService';

const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [isShowPassword, setShowPassword] = useState(true)
    const [isLoading, setIsLoading] = useState(false)


    const HandleLogin = async () => {
        // // validate
        if (!username) {
            toast.error('Invalid Email')
            return;
        }
        if (!password) {
            toast.error('Invalid Password')
            return
        }
        setIsLoading(true)
        // submit
        let res = await postLogin(username, password)
        console.log(res)
        // if (res && res.EC === 0) {
        if (res.token && res.token != null) {
            dispatch(doLogin(res))
            toast.success("ok")
            // toast.success(res.EM)
            setIsLoading(false)
            navigate("/")
        }
        else {
            setIsLoading(false)
            toast.error("fail")
        }
    }
    const BackHomePage = () => {
        navigate("/")
    }
    const GoToSignUp = () => {
        navigate("/signup")
    }
    return (
        <div className="login-page">
            <div className="row d-flex justify-content-center mt-5" style={{ width: '35%' }}>
                <div className="card py-3 px-2">
                    <div className="title">
                        Login
                    </div>
                    <form className="myform">
                        <div className="form-group">
                            <input type="text" value={username} className="form-control" placeholder="User Name"
                                onChange={(e) => { setUserName(e.target.value) }}
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
                        <div className="row ">
                            <div className="col-md-6 col-12">
                                <div className="form-group form-check ">
                                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                                    <label className="form-check-label mt-1" htmlFor="exampleCheck1">Remember Password</label>
                                </div>
                            </div>
                            <div className="col-md-6 col-12 bn">Fogot Password?</div>
                        </div>
                        <div className="form-group btn-lg mt-3 d-flex justify-content-center">
                            <button type="button" className="btn btn-block  w-100 "
                                onClick={() => { HandleLogin() }}
                                disabled={isLoading}
                            >
                                <small>
                                    {isLoading === true && <ImSpinner8 className="loaderIcon" />}
                                    <span>Login</span>
                                </small>
                            </button>
                        </div>
                    </form>
                    <p className="text-center mb-3 mt-2">Or Sign Up Using</p>
                    <div className="row mx-auto ">
                        <div className="col-4">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="col-4">
                            <i className="fab fa-facebook"></i>
                        </div>
                        <div className="col-4">
                            <i className="fab fa-google"></i>
                        </div>
                    </div>

                    <div className="row pt-3 align-self-center">
                        <span>Have not acccount yet?
                            <span className='p-1 text-decoration-underline signup'
                                onClick={() => { GoToSignUp() }}
                            >Sign Up</span>
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
export default Login;