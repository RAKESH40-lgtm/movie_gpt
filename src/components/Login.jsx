import { useRef, useState } from 'react'
import Header from './Header'
import { userFormValidate } from '../utils/validate'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { login_src, src_setUrls } from '../utils/constants';
const Login = () => {
    const [isLoggedIn, setIsloggedin] = useState(true)
    const [errMsg, setErrMsg] = useState("")
    const name = useRef(null)
    const email = useRef(null)
    const password = useRef(null)

    const submitForm = () => {
        const message = isLoggedIn ? userFormValidate("", email.current.value, password.current.value, "loggedIn") : userFormValidate(name?.current.value, email.current.value, password.current.value, "signUp")
        setErrMsg(message)
        // if (message) return
        if (isLoggedIn) {
            // signin
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(`${errorCode} - ${errorMessage}`)
                });
        } else {
            // signup
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value).then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
              console.log(user)
            })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrMsg(`${errorCode} - ${errorMessage}`)
                });
        }
    }

    return (
        <div className="min-h-screen relative">
            <Header />

            {/* Background Image - responsive sizing */}
            <div className='absolute inset-0 w-full h-full'>
                <img
                    src={login_src}
                    srcSet={src_setUrls}
                    alt=""
                    aria-hidden="true"
                    className='w-full h-full object-cover'
                />
                {/* Gradient overlay for better form visibility */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Form - responsive width and positioning */}
            <div className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
                <form onSubmit={(e) => e.preventDefault()} className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[450px] bg-black/75 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 text-white rounded-md'>

                    <h1 className='mb-6 sm:mb-8 text-3xl sm:text-4xl font-bold'>
                        {isLoggedIn ? "Sign In" : "Sign Up"}
                    </h1>

                    {!isLoggedIn && (
                        <input
                            ref={name}
                            type="text"
                            name="fullname"
                            placeholder='Full name'
                            required
                            className='p-3 sm:p-4 mb-4 w-full bg-gray-700/80 rounded border border-gray-600 focus:border-white focus:outline-none transition-colors'
                        />
                    )}

                    <input
                        ref={email}
                        type="email"
                        name="email"
                        id="email"
                        required
                        placeholder='Email address'
                        className='p-3 sm:p-4 mb-4 w-full bg-gray-700/80 rounded border border-gray-600 focus:border-white focus:outline-none transition-colors'
                    />

                    <input
                        ref={password}
                        type="password"
                        name="password"
                        placeholder='Password'
                        required
                        className='p-3 sm:p-4 mb-6 w-full bg-gray-700/80 rounded border border-gray-600 focus:border-white focus:outline-none transition-colors'
                    />
                    <p className='text-sm sm:text-base text-red-400 mb-4'>{errMsg}</p>
                    <button
                        type="submit"
                        className='p-3 sm:p-4 mb-4 w-full bg-red-600 hover:bg-red-700 rounded font-semibold text-base sm:text-lg transition-colors'
                        onClick={submitForm}
                    >
                        {isLoggedIn ? "Sign In" : "Sign Up"}
                    </button>

                    <p className='text-sm sm:text-base text-gray-400 mt-4'>
                        {isLoggedIn ? (
                            <>
                                New to Netflix? {' '}
                                <span
                                    className='text-white hover:underline cursor-pointer'
                                    onClick={() => setIsloggedin(!isLoggedIn)}
                                >
                                    Sign up now
                                </span>
                            </>
                        ) : (
                            <>
                                Already have an account? {' '}
                                <span
                                    className='text-white hover:underline cursor-pointer'
                                    onClick={() => setIsloggedin(!isLoggedIn)}
                                >
                                    Sign in
                                </span>
                            </>
                        )}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Login
