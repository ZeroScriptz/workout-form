import {  useRouter  } from 'next/router';
import Image from "next/image";
import formImage from '../assets/image.png'
import {motion as m} from 'framer-motion';
import Confetti from 'react-confetti';


export default function SuccessPG() {
    const routers = useRouter();
    return (
        <m.main
        initial={{
            y: 500,
            opacity: 0,
            scale: 0.5
            }}
            animate={{
            y: 0,
            opacity: 1,
            scale: 1
            }}
            transition={{
            duration: 2
            }}
        className='h-screen flex items-center justify-center'>
            <div className='bg-white text-center flex rounded-lg w-1/2 text-gray-700 p-16'>
                <h1 className='text-2xl pb-8 font-bold'>
                   Thanks for the email {routers.query.name} !
                </h1>
                <div>
                <p className='text-lg text-gray-500'>
                Check your email soon for updates over at {routers.query.email} !
                </p>
                </div>
            </div>
            <Confetti className='w-full h-full object-cover' /> 
        </m.main>
    );
};