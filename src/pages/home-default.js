import React, { useState, useContext } from 'react';
import { Layout, Button, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useFirebase } from '../firebase';
import copy from 'copy-to-clipboard';
import { AuthContext } from '../providers/auth-user-provider';
import { useCollection } from '../hooks/use-collection';

export const HomeDefault = () => {
    const [state, setState] = useState({ website: '' });
    const { firestore, firebase } = useFirebase();
    const [doc, setDoc] = useState(null);
    const { ready, user } = useContext(AuthContext);
    const handleSearchBarChange = (e) => setState({ ...state, website: e.target.value })
    const { data, createDoc, deleteDoc } = useCollection(`users/${user ? user.uid : 'undefined'}/history`);

    const urlShortenerFun = () => {
        const generateId = Math.random().toString(36).substring(2, 6)
        console.log(user)
        const params = {
            inputUrl: state.website,
            shortenedUrl: `https://boginoo.firebaseapp.com/${generateId}`,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            email: user.email,
        }

        firestore.collection("shortener").doc(generateId).set(params)
            .then(function () {
                console.log("Successfully written");
                setDoc(params)
            })
            .catch(function (error) {
                console.error("Error writing document: ", error);
            });
    }

    return (
        <Layout>
            <div className='h100 flex flex-col justify-center items-center'>
                <div className='flex justify-center items-center'>
                    <IconStartBracket />
                    <IconDash />
                    <IconEndBracket />
                </div>
                <div className='flex-center font-lobster c-primary fs-56 lh-70'>Boginoo</div>
                <div className='mt-5 flex justify-center items-center ti'>
                    <Input className='ti' placeholder='https://www.web-huudas.mn' onChange={handleSearchBarChange} />
                    <Button className='btn font-ubuntu fs-20 lh-23 bold c-default h-5 ph-4 ml-4 b-primary' onClick={urlShortenerFun}>Богиносгох</Button>
                </div>
                {
                    doc &&
                    <div className='flex-row space-evenly border-bottom w-9.5 mt-5'>
                        <div className='flex-col mr-5'>
                            <div className='c-gray fs-14 lh-18 font-ubuntu'>Өгөгдсөн холбоос:</div>
                            <div className='fs-17 lh-23 font-ubuntu'>{doc.inputUrl}</div>
                        </div>
                        <div className='flex-col mr-5'>
                            <div className='c-gray fs-14 lh-18 font-ubuntu'>Богино холбоос:</div>
                            <div className='fs-17 lh-23 font-ubuntu'>{doc.shortenedUrl}</div>
                        </div>
                        <div className='font-ubuntu c-primary fs-18 lh-21 tdl-u items-center mt-3' onClick={copy(doc.shortenedUrl)}>Хуулж авах</div>
                    </div>
                }
                {data &&
                    data.filter((item) => item.email === user.email).sort((a,b)=> a.createdAt < b.createdAt ? 1 : -1).map((item) => <div key={item.id} className='mt-4 pa-4 br-primary-2'>
                        <div type='input' url={item.inputUrl} />
                        <div type='output' url={item.outputUrl} />
                    </div>)}
            </div>
        </Layout>
    )
}