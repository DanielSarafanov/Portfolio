"use client";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/16/solid'
import {useForm, SubmitHandler} from 'react-hook-form';
import React from 'react'
import { SocialIcon } from 'react-social-icons';

type Props = {}

type Inputs = {
    name:string;
    email: string;
    subject: string;
    message: string;
}

const ContactMe = (props: Props) => {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        window.location.href = `mailto:sarafanovdaniel@gmail.com?subject=${data.subject}&body=Hi, my name is ${data.name}. ${data.message} (${data.email})`;
    }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        
        <h3 className='absolute top-24 uppercase tracking-[10px] text-[#86B6F6] text-2xl'>Contact</h3>

        <div className='flex flex-col space-y-10'>
            <h4 className='text-4xl font-semibold text-center'>Lets Get in Touch!</h4>

            <div>

                <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className=' text-[#86B6F6] h-7 w-7 animate-pulse'/>
                    <p>+1 416-937-3092</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className=' text-[#86B6F6] h-7 w-7 animate-pulse'/>
                    <p>sarafanovdaniel@gmail.com</p>
                </div>

                <div className='flex items-center space-x-5 justify-center'>
                    <SocialIcon url='https://www.linkedin.com/in/daniel-sarafanov-2b11831a7/' fgColor='#86B6F6' bgColor='transparent'></SocialIcon>
                    <p>LinkedIn</p>
                </div>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>

                <div className='flex space-x-2'>
                    <input {...register('name')} className = 'contactInput' type="text" placeholder='Name'/>
                    <input {...register('email')} className = 'contactInput' type='email' placeholder='Email' />
                </div>

                <input {...register('subject')} className = 'contactInput' type="text" placeholder='Subject'/>

                <textarea {...register('message')} className = 'contactInput' placeholder='Message' />

                <button className='bg-general-text py-5 rounded-md font-bold text-sm text-white uppercase'>Submit</button>

            </form>

        </div>

    </div>
  )
}

export default ContactMe