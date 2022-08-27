import { useState } from 'react';
import { confirmPasswordReset } from 'firebase/auth';
import { useSearchParams } from 'react-router-dom';
import { firebaseAuth } from "../firebase";
import Page404 from './Page404';

function ResetPassword(props) {
  const [newPassword, setNetPassword] = useState();
  const [email, setEmail] = useState();

  const {code} = props;

  return (
    <div>
      <label htmlFor="email"></label>
      <input id="email" type="email" placeholder="Your email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <br />
      <label htmlFor="password"></label>
      <input id="password" type="password" placeholder="New Password" value={newPassword} onChange={(e) => setNetPassword(e.target.value)} />
      <br />
      <label htmlFor="confirm-password"></label>
      <input id="confirm-password" type="password" placeholder="Confirm New Password" />
      <br />
      <button onClick={() => {
        console.log(code);
        console.log('/reset-password', {
          code: code, 
          type: 'resetPassword',
          email: email,
        })

        /**
         * select * from auth_action where code = oobCode and type = 'resetPassword'
         * 
         * if already exist return error because it means the link from already used
         * 
         * if not exists continue to look up userId from email given (select id from user where email = 'email')
         * 
         * INSERT into auth_action
         * 
         * UPDATE password in users table with new password given encrypted
         */

        confirmPasswordReset(firebaseAuth, code, newPassword)

      }} >Reset Password</button>
    </div>
  )
}

function AuthAction() {
  const [searchParams] = useSearchParams();


  switch (searchParams.get('mode')) {
    case "resetPassword":
      return <ResetPassword code={searchParams.get('oobCode')} />
    default:
      return <Page404 />
  }
}

export default AuthAction;
