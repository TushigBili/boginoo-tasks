import React, { useContext, useState } from 'react';
import { Layout, Button, FormInput, Input, IconDash, IconEndBracket, IconStartBracket, RememberMe } from '../components/';
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../providers/auth-user-provider';
import { useFirebase } from '../firebase';

export const Login = () => {
    const history = useHistory();
    const { ready, user } = useContext(AuthContext);
    const { auth } = useFirebase();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signUpPage = () => {
        history.push('./register')
    }

    const toForgot = () => {
        history.push('./forgot')
    }

    if (user) {
        history.push('/')
    }

    const handleChangeEmail = (e) => setEmail(e.target.value);
    const handleChangePassword = (e) => setPassword(e.target.value);


    const signIn = async () => {
        await auth.signInWithEmailAndPassword(email, password);
    }

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='flex-center font-lobster c-primary fs-45 lh-70'>Boginoo</div>
                <p className='font-ubuntu fs-25 lh-37 c-primary bold'>Нэвтрэх</p>
                <FormInput label='Цахим хаяг' className='mt-3 h-5 w-8 ti' placeholder='name@mail.domain' value={email} onChange={handleChangeEmail} />
                <div className='mt-4'></div>
                <FormInput label='Нууц үг' type='password' className='mt-3 h-5 w-8 ti' placeholder='Password' value={password} onChange={handleChangePassword} />
                <div className='flex-row'>
                    <RememberMe />
                    <div className='items-end'>
                        <p className='mt-4 fs-12 lh-19 font-ubuntu ml-5' onClick={toForgot}>Нууц үгээ мартсан</p>
                    </div>
                </div>
                <Button className='b-primary c-default font-ubuntu mt-3 flex justify-center items-center fs-20 lh-23 bold h-5 pa-4 w-8' onClick={signIn}>Нэвтрэх</Button>
                <p className='flex-center font-ubuntu c-primary fs-12 lh-18 tdl-u' onClick={signUpPage}>Шинэ хэрэглэгч бол энд дарна уу?</p>
            </div>
        </Layout>
    )
}