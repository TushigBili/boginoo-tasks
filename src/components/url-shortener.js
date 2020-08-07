import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom'
import { Layout } from '../components/layout'
import { useFirebase } from '../firebase'

export const Shortener = async () => {
    let location = useLocation()
    const { firestore } = useFirebase()
    const shortenedId = location.pathname.slice(1);
    console.log(firestore)
    await firestore.collection('shortener').doc(shortenedId)
        .get()
        .then((doc) => {
            console.log(doc.data())
            window.location.href = doc.data().inputUrl
        })
    useEffect(() => {
        if (firestore) {
            Shortener();
        }
    }, [firestore])

    return (
        <Layout>
            <h1>LOADING</h1>
        </Layout>
    )
}
