import React from 'react';
import { Outlet } from 'react-router-dom';



const AuthContainer: React.FC = () => {
    return (
        <>
            <div className="auth_container">
                <div className='auth_nav'><a href=""><h1>BennyBags & Wears</h1></a></div>
                <div className={"auth_content"}>
                    <div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AuthContainer;
