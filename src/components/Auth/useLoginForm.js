import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../features/auth/authApi';

const useLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const [login, { data, isLoading, error: responseError }] =
        useLoginMutation();

    const navigate = useNavigate();

    useEffect(() => {
        if (responseError?.data) {
            console.log(responseError);
            setError(responseError?.data.message);
        }
        if (data?.accessToken && data?.data) {
            navigate('/dashboard');
        }
    }, [data, responseError, navigate]);

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        setError('');
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        login({
            email,
            password
        });
    };

    return {
        email,
        handleChangeEmail,
        password,
        handleChangePassword,
        handleSubmit,
        error,
        isLoading
    };
};

export default useLoginForm;
