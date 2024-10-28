import  { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const SignUpForm = () => {
  const [name,setName] =useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [remeberMe,setRemeberMe] = useState(false)
  const [error,setError] = useState("")
  const navigate = useNavigate()
  const userAuth = UserAuth();


  const handleSubmit =async (e:any)=>{
    e.preventDefault()
    setError("")
    if(name.trim()==""){
      setError('Enter a valid name')
      return 
    }
    if(email.trim()==""){
      setError('Enter a valid email')
      return 
    }
    if(password.trim()==""){
      setError('Enter a valid password')
      return
    }
    try {
      if(error.trim()==""){
        console.log(email,password)
        const error = await userAuth?.signUp(email, password)
       if(error){
        setError(error)
        return
       }else{
        navigate('/')
       }
        

      }
      
    } catch (error) {
      
    }

   
  
  }


 
  return (
    <div className='w-full h-screen'>
      <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/fb548c0a-8582-43c5-9fba-cd98bf27452f/IN-en-20240326-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="" />
      <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" />
      <div className="fixed w-full px-4 py-24 z-50" >
        <div className="max-w-[450px] h-[560px] mx-auto bg-black/75 rounded-lg" >
          <div className="max-w-[320px] mx-auto gap-y-8 py-16">
            <h1 className='text-3xl font-extrabold font-nsans-bold  items-center'>Sign Up</h1>
            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4 gap-y-3 mt-3" >
              <input type="text" onChange={(e)=>setName(e.target.value)} value={name} className='p-3 bg-slate-800 rounded' placeholder='name' name="" id="" />
              <input type="text" onChange={(e)=>setEmail(e.target.value)} value={email}  className='p-3 bg-slate-800 rounded' placeholder='email' name="" id="" />
              <input type="text" onChange={(e)=>setPassword(e.target.value)}  value={password} className='p-3 bg-slate-800 rounded' placeholder='password' name="" id="" />
              {error ? <p className='text-red-600  mt-2'>{error}</p>:null}
              <button className='p-3 bg-red-600 font-bold rounded-md' type="submit">Sign Up</button>
            </form>
            <div className="w-full flex justify-between items-center gap-x-2">
              <p className='text-slate-600'>
              <input type="checkbox" onChange={()=>setRemeberMe((prev)=>(!prev))} className='mr-2 cursor-pointer'  name="" id="" checked={remeberMe} />
                Remeber Me</p>
                <p className='text-slate-600'>Need Help ?</p>
            </div>
            <p className='mt-4 text-slate-600'>
            Already a member ?
            <span className='text-white cursor-pointer'>
              <Link to={'/login'}> Log In</Link>
            </span>
            </p>
              
                

          </div>

        </div>
      </div>

    </div>
  )
}

export default SignUpForm