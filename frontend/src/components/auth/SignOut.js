import { useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";


// SignOutComponent.js

function SignOutComponent() {
    const  Navigate = useNavigate()
  
    useEffect(() => {
        const handleSignOut = async () => {
            const refresh_token = localStorage.getItem('refresh_token');
            try {
                const response = await axiosInstance.post('token/blacklist/', { refresh_token: refresh_token });

                if (response.status === 200) {
                    localStorage.removeItem('access_token');
                    localStorage.removeItem('refresh_token');
                    Navigate('/signin/')
                } else {
                    console.log('something went wrong');
                }
                Navigate(0)
            } catch (error) {
                console.error(error);
            }
        };

        handleSignOut();
    }, [Navigate]);

    return null;
}

export default SignOutComponent;