import Image from 'next/image'
import React from 'react'
import { auth } from '@/shared/FirebaseConfig';
import { useAuthState,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { HiOutlinePencilSquare,HiArrowLeftOnRectangle } from "react-icons/hi2";
import { useRouter } from 'next/router';
const USER_IMAGE='https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg'
function Header() {

  const [signInWithGoogle]=useSignInWithGoogle(auth);

  const router=useRouter();

const [user] = useAuthState(auth);

  return (
    <div className='flex justify-between p-3 border-b-[2px]
    border-[#FF3366]'>
        <img src="./Images/logo.png" 
        width={120}
        alt='ninja player logo'
        className='cursor-pointer'
        onClick={()=>router.push('/')}
        />
        <div className='flex gap-4'>
            <button onClick={()=>router.push('/create-post')} className='bg-black p-1 px-3
             text-white rounded-full text-[12px]'>
                <span className='hidden sm:block'>
                    CREATE POST</span> 
                    <HiOutlinePencilSquare 
                    className='sm:hidden text-[17px]' /></button>
            {!user?<button className='bg-white
             text-gray-500 p-1 px-3 text-[12px] border-[1px]
             rounded-full' onClick={()=> signInWithGoogle()}>
                <span className='hidden sm:block'>
                    SIGN IN</span>
                <HiArrowLeftOnRectangle
                 className='sm:hidden text-[17px]' /></button>
                 :<button className='bg-white
                 text-gray-500 p-1 px-3 text-[12px] border-[1px]
                 rounded-full' onClick={()=>auth.signOut()}>
                    <span className='hidden sm:block'>
                        SIGN OUT</span>
                    <HiArrowLeftOnRectangle
                     className='sm:hidden text-[17px]' /></button>}
       {user?  
       <Image src={user.photoURL} alt='user image'
        className='rounded-full cursor-pointer' onClick={()=>router.push('/profile')}
        width={40} height={40} />:null}
        </div>
      
    </div>
  )
}

export default Header