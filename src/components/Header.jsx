import { useEffect } from 'react'
import { auth } from '../utils/firebase'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'
import { icon_url } from '../utils/constants'
const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, displayName, email } = user;
                dispatch(addUser({ userId: uid, username: displayName, email }))
                navigate("/browse")
            } else {
                dispatch(removeUser())
                navigate("/")
            }
        });
        return () => unsubscribe();
    }, [])
    const handleSignout = () => {
        console.log("trigger")
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/")
        }).catch((error) => {
            // An error happened.
            console.log(error)
        });
    }
    return (
        <header className='absolute bg-linear-to-t from-black z-40 w-screen flex justify-between items-center'>
            <img className="w-40 " src={icon_url} alt="logo" />
            <button className="p-2 bg-red-100 " onClick={handleSignout}>Signout</button>
        </header>
    )
}

export default Header
