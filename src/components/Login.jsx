import { useState } from 'react'
import Header from './Header'

const Login = () => {
    const [isLoggedIn, setIsloggedin] = useState(true)

    return (
        <div className="min-h-screen relative">
            <Header />

            {/* Background Image - responsive sizing */}
            <div className='absolute inset-0 w-full h-full'>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg"
                    srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_large.jpg 2000w, https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_medium.jpg 1279w, https://assets.nflxext.com/ffe/siteui/vlv3/cc73e7c7-7860-4ef4-8fc8-1baf24569d2f/web/IN-en-20260126-TRIFECTA-perspective_90d714e8-acc9-4253-ab46-ca6b349c1989_small.jpg 959w"
                    alt=""
                    aria-hidden="true"
                    className='w-full h-full object-cover'
                />
                {/* Gradient overlay for better form visibility */}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            {/* Form - responsive width and positioning */}
            <div className="relative min-h-screen flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
                <form className='w-full max-w-md sm:max-w-lg md:max-w-xl lg:w-[450px] bg-black/75 backdrop-blur-sm p-6 sm:p-8 md:p-12 lg:p-16 text-white rounded-md'>

                    <h1 className='mb-6 sm:mb-8 text-3xl sm:text-4xl font-bold'>
                        {isLoggedIn ? "Sign In" : "Sign Up"}
                    </h1>

                    {!isLoggedIn && (
                        <input
                            type="text"
                            name="fullname"
                            placeholder='Full name'
                            className='p-3 sm:p-4 mb-4 w-full bg-gray-700/80 rounded border border-gray-600 focus:border-white focus:outline-none transition-colors'
                        />
                    )}

                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder='Email address'
                        className='p-3 sm:p-4 mb-4 w-full bg-gray-700/80 rounded border border-gray-600 focus:border-white focus:outline-none transition-colors'
                    />

                    <input
                        type="password"
                        name="password"
                        placeholder='Password'
                        className='p-3 sm:p-4 mb-6 w-full bg-gray-700/80 rounded border border-gray-600 focus:border-white focus:outline-none transition-colors'
                    />

                    <button
                        type="submit"
                        className='p-3 sm:p-4 mb-4 w-full bg-red-600 hover:bg-red-700 rounded font-semibold text-base sm:text-lg transition-colors'
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
