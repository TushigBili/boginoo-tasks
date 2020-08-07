import React, { useState } from 'react';
import { Layout, Button, FormInput, Input, IconDash, IconEndBracket, IconStartBracket, RememberMe } from '../components/';
import { AuthContext } from '../providers/auth-user-provider';
import { useHistory } from 'react-router-dom';
import { useFirebase } from '../firebase';

export const Register = () => {
    const [state, setState] = useState({ email: '', password: '', password2: '' });
    const history = useHistory();
    const [error, setError] = useState('');
    const { firebase, auth, firestore } = useFirebase();

    const handleChangeUsername = (e) => setState({...state, username: e.target.value})
    const handleChangeEmail = (e) => setState({...state, email: e.target.value});
    const handleChangePassword = (e) => setState({...state, password: e.target.value});
    const handleChangePassword2 = (e) => setState({...state, password2: e.target.value});

    const signUp = async () => {
        if (!(state.email && state.password && state.password2)) {
            setError('Please enter all the required information');
            return;
        }
        if (state.password !== state.password2) {
            setError('Passwords dont match!');
            return;
        }
        let cred = await auth.createUserWithEmailAndPassword(state.email, state.password);
        await firestore.collection('users').doc(cred.user.uid).set({
            username: state.username,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
        history.push('/')
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
                <FormInput label='Хэрэглэгчийн нэр' type='text' placeholder='Username' className='mt-3 h-5 w-8 ti' value={state.username} onChange={handleChangeUsername}/>
                <div className='mt-4'></div>
                <FormInput label='Цахим хаяг' className='mt-3 h-5 w-8 ti' placeholder='name@mail.domain' type='email' value={state.email} onChange={handleChangeEmail}/>
                <div className='mt-4'></div>
                <FormInput label='Нууц үг' className='mt-3 h-5 w-8 ti' placeholder='Password' type='password' value={state.password} onChange={handleChangePassword}/>
                <div className='mt-4'></div>
                <FormInput label='Нууц үгээ давтна уу?' className='mt-3 h-5 w-8 ti' placeholder='Password' type='password' value={state.password2} onChange={handleChangePassword2}/>

                {error && <div className='mt-4 ph-3 fs-14 font-ubuntu lh-18 ti c-error'>{error}</div>}
                <Button className='b-primary c-default font-ubuntu mt-5 flex justify-center items-center fs-20 lh-23 bold h-5 pa-4 w-8' onClick={signUp}>Бүртгүүлэх</Button>
                
            </div>
        </Layout>
    )
}