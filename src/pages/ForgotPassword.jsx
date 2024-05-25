import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { getPasswordResetToken } from '../services/operations/authAPI';

const ForgotPassword = () => {

    const [emailSent, setEmailSent] = useState(false);
    const [email, setEmail]= useState("");
    const {loading} = useSelector((state) => state.auth)
    const dispatch = useDispatch();

    const handleOnSubmit = (e) => {
        e.preventDefault();
        dispatch(getPasswordResetToken(email, setEmailSent))
    }
  return (
    <div className='text-white flex items-center'>
        {
            loading ? (
                <div>Loading...</div>
            ) : (
                <div className=''>
                    <h1>
                        {
                            !emailSent ? "Reset your Password" : "Check Your Email"
                        }
                    </h1>

                    <p>
                        {
                            !emailSent ? 'Instructions will be sent to your mail to reset password'
                            : `We have sent the reset email to ${email}`
                        }
                    </p>

                    <form onSubmit={handleOnSubmit}>
                        {
                            !emailSent && (
                               <label>
                                 <p>Email Address*</p>
                                 <input
                                    required
                                    type='email'
                                    name='email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder='Enter Your Email Address'
                                 />
                               </label> 
                            )
                        }

                        <button
                          type='submit'
                        >
                            {
                                !emailSent ? "Reset Password" : "Resend Email"
                            }
                        </button>

                    </form>

                    <div>
                        <Link to='/login'>
                            <p>Back to Login</p>
                        </Link>
                    </div>

                </div>
            )
        }
    </div>
  )
}

export default ForgotPassword