import React, { useState } from 'react';
import { logIn } from '../../redux/action';
import { useDispatch } from 'react-redux';

const ModalAuth = ({ onClose }) => {
    const dispatch = useDispatch();

    const [loginData, setLoginData] = useState({
        login: '',
        password: ''
    })

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setLoginData({
            ...loginData,
            [name]:value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(logIn(loginData.login));
        onClose();
    }

    return (
        <div onClick={onClose} className='modal-auth'>
            <div onClick={e => e.stopPropagation()} className='modal-dialog modal-dialog-auth'>
                <button onClick={onClose} className='close-auth'>&times;</button>
                <form onSubmit={handleSubmit}>
                    <fieldset className='modal-body'>
                        <legend className='modal-title'>Authorization</legend>

                        <label className='label-auth'>
                            <span>Login:</span>
                            <input type='text' value={loginData.login} onChange={handleInputChange} name='login' />
                        </label>

                        <label className='label-auth'>
                            <span>Password:</span>
                            <input type='password' value={loginData.password} onChange={handleInputChange} name='password' />
                        </label>

                    </fieldset>

                    <div className="modal-footer">
                        <div className="footer-buttons">
                            <button className='button button-primary button-login'>Sign In</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ModalAuth;