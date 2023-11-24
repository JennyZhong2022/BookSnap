import { useState } from 'react';

import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";

const AuthPage = ({setUser}) => {
    const [showSignUp, setShowSignUp] = useState(false);
    return (
        <div>
            {
                showSignUp ?
                <SignUpForm setUser={ setUser } />
                :
                <LoginForm setUser={ setUser } />
            }
            <button onClick={ () => setShowSignUp(!showSignUp) }>
                {
                    showSignUp ?
                    'Login'
                    :
                    'Sign Up'
                }
            </button>
        </div>
    );
}

export default AuthPage;
