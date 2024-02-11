import { useEffect, useState } from 'react';
import { auth, provider } from './config';
import { signInWithPopup } from 'firebase/auth'; 
import Home from './home';

const Signin = () => {
    const [value, setValue] = useState('');

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setValue(data.user.email);
                localStorage.setItem('email', data.user.email);
            })
            .catch((error) => {
                // Handle errors here
                console.error('Error signing in:', error);
            });
    };

    useEffect(() => {
        const email = localStorage.getItem('email');
        if (email) {
            setValue(email);
        }
    }, []);

    return (
        <div>
            {value ? (
                <Home />
            ) : (
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>Sign in</button>
            )}
        </div>
    );
};

export default Signin;
