import React from 'react';
import { Layout, Button, FormInput, Input, IconDash, IconEndBracket, IconStartBracket } from '../components/';
import { useHistory } from 'react-router-dom'

export const Forgot = () => {

    const history = useHistory();

    const handleClick = () => {
        history.push('./login')
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
                <p className='font-ubuntu fs-25 lh-37 c-primary bold'>Нууц үг сэргээх</p>
                <p className='font-ubuntu fs-16 lh-25 w-8 text-center'>Бид таны цахим хаяг руу нууц үг сэргээх хаяг явуулах болно.</p>
                <FormInput label='Цахим хаяг' className='mt-3 h-5 w-8 ti' placeholder='name@mail.domain'/>
                <div className='mt-4'></div>
                <Button className='b-primary c-default font-ubuntu mt-3 flex justify-center items-center fs-20 lh-23 bold h-5 pa-4 w-8' onClick={handleClick}>Нэвтрэх</Button>
            </div>
        </Layout>
    )
}