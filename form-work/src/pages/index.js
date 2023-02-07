import Head from 'next/head'
import { Inter } from '@next/font/google'
import Image from "next/image";
import formImage from '../assets/image.png'
import  { useFormik } from "formik";
import * as Yup from 'yup'
import {  useRouter  } from 'next/router';
import {motion as m} from 'framer-motion';

export default function Home() {

  //Router
  const router = useRouter();
  
  const formik = useFormik({
    //Formik Logic


    initialValues: {
      name: '',
      email: '',
      states: 'California',
      terms: '',
    },
    // Validate Form
    validationSchema: Yup.object({
      name: Yup.string()
      .max(25, 'Name must be 25 characters or less!')
      .required('Name is required to submit!'),
      email: Yup.string()
      .email("Invalid Email Address!")
      .required("Email is required to submit!"),
      terms: Yup.array().required("Terms of services must be checked"),
    }),
    //Submit Form
    onSubmit: (values) => {
      router.push({pathname: '/successPage', query: values});
      console.log(values)
    }

  })

  return (
    <m.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    exit={{opacity: 0}}
    >
      <Head>
        <title>Gym Submission Form!</title>
        <meta name="description" content="Created by Zack Darnell! " />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <main className='h-screen flex items-center justify-center '>
          <form onSubmit={formik.handleSubmit} className='bg-white flex rounded-lg w-1/2'>
              <div className='flex-1 text-gray-700 p-20'>
                <h1 className='text-3xl pb-2'>Lets get started!</h1>
                <p className='text-lg text text-gray-500'>
                  Join our new gym today, Get up to 1 month for 50% OFF and ONE free training course with a instructor! 
                </p>
                  <div className='mt-6 '>
                  {/*Name Input Field*/}
                  <div className='mt-6'>
                    <label className={`block font-bold text-sm pb-2 ${formik.errors.name ? 'text-red-400' : '' }`} 
                    htmlFor='name'>{formik.touched.name && formik.errors.name ? formik.errors.name : 'Name'} </label>
                    <input
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    className='border-2 border-slate-500 focus:border-yellow-500 focus:ring-yellow-500 rounded-md w-1/2' 
                    type="text" name='name' placeholder='Enter your name!' />
                  </div>
                </div>
                <div className='mt-6 '>
                  {/*Email Input Field*/}
                  <div className='mt-6'>
                  <label className={`block font-bold text-sm pb-2 ${formik.errors.name ? 'text-red-400' : '' }`} 
                    htmlFor='email'>{formik.touched.email && formik.errors.email ? formik.errors.email : 'Email'} </label>
                    <input 
                    value={formik.values.email}
                    onChange={formik.handleChange} 
                    onBlur={formik.handleBlur} 
                    className='border-2 border-slate-500 focus:border-yellow-500 focus:ring-yellow-500 rounded-md w-1/2' 
                    type="email" name='email' placeholder='Enter your email!' />
                  </div>
                </div>
                <div className='mt-6 '>
                  {/*State Input Field*/}
                  <div className='mt-6'>
                    <label className='block font-bold text-sm pb-2' htmlFor='state'>State </label>
                    <select 
                    value={formik.values.states}
                    onChange={formik.handleChange} 
                    name="states" className='border-2 border-slate-500 focus:border-yellow-500 focus:ring-yellow-500 rounded-md w-1/2' >
                      <option>California</option>
                      <option>Arizona</option>
                      <option>Florida</option>
                      <option>Utah</option>
                      <option>Colorado</option>
                      <option>Oregon</option>
                    </select>
                  </div>
                </div>
                <div className='mt-6 '>
                  {/*Email Input Field*/}
                  <div className='mt-6'>
                  <label className={`block font-bold text-sm pb-2 ${formik.errors.terms ? 'text-red-400' : '' }`} 
                    htmlFor='terms'>{formik.touched.terms && formik.errors.terms ? formik.errors.terms : 'Terms of Service'} </label>
                    <div className='flex items-center gap-2'>
                      <input 
                      onChange={formik.handleChange} 
                      type="checkbox" name='terms' value='checked'  
                      className='h-5 w-5 text-yellow-500 border-2 focus:border-yellow-500'/>  
                      <p className='text-sm text-grey-500 my-1'>
                        I agree to the Terms and Service that my data will be taken and sold.
                      </p>                    
                    </div>
                  </div>
                  <button type='submit' className='bg-yellow-500 font-bold text-sm text-black py-3 mt-6 rounded-lg w-full'>
                    Start your journey!
                  </button>
                </div>
              </div>
              <div className='flex-1 relative '>
              <Image 
              alt='form-work'
              fill
              className='object-cover'
              src={formImage} />
              </div>
          </form>
        </main> 
    </m.div>
  )
}
