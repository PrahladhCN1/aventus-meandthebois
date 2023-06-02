import parl from './images/parl.jpg'
import './Login.css'
import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
  } from "@material-tailwind/react";
   
const Login=()=>{
    return(
        <div>
            <div className='login'>
      <Card className='bg-[#00000054] text-white' shadow={false}>
        <Typography className="ml-40" variant="h4" color="white" >
          Sign In
        </Typography>
        <Typography color="white" className="mt-1 ml-24 font-normal">
          Enter your details to sign in.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 ml-10 flex flex-col gap-6">
            <Input size="lg" label="Aadhar No." color='white' />
            <Input type="password" size="lg" label="Password" color='white' />
          </div>
          
          <Button className="mt-6 ml-5" fullWidth>
            Sign in
          </Button>
          <Typography color="white" className="mt-4 ml-14 text-center font-normal">
            Don't have an account?{" "}
            <a
              href="/register"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Register
            </a>
          </Typography>
        </form>
      </Card>
      </div>


            <img src={parl}></img>
        </div>
    )
}

export default Login

