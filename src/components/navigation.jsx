import React, { useContext, useState, useEffect } from 'react';
import { Button } from './button';
import { useHistory, useLocation } from 'react-router-dom';
import { AuthContext } from '../providers/auth-user-provider';
import { useFirebase } from '../firebase'

export const Navigation = (props) => {

    const { ready, user } = useContext(AuthContext);
    const { auth, firestore } = useFirebase();
    const [username, setUsername] = useState(null);

    let location = useLocation();
    const history = useHistory();

    const gotoLogin = () => {
        history.push('/login')
    }

    const signOut = async () => {
        await auth.signOut();
    }

    useEffect(() => {
        if (user && firestore) {
            firestore.collection('users').doc(user.uid).get().then((doc) => {
                setUsername(doc.data().username)
            })
        }
    }, [user, firestore])

    return (
        <div className='w100 flex justify-end items-center'>
            <div className='font-ubuntu fs-20 lh-23 bold c-primary'>ХЭРХЭН АЖИЛЛАДАГ ВЭ?</div>
            {user &&
                <>
                    <div className='font-ubuntu fs-20 lh-23 bold ml-4'>{username}</div>
                    <Button className='font-ubuntu fs-20 lh-23 bold c-default ml-2 b-primary' onClick={signOut} >SIGN OUT</Button>
                </>
            }
            {(!user && !location.pathname.match('/login')) &&
                <Button className='font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={gotoLogin}>Нэвтрэх</Button>}
        </div>
    );
};