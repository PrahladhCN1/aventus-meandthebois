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
          Sign Up
        </Typography>
        <Typography color="white" className="mt-1 ml-24 font-normal">
          Enter your details to register.
        </Typography>
        <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 ml-10 flex flex-col gap-6">
            <Input size="lg" label="Name" color='white' />
            <Input type="password" size="lg" label="Password" color='white' />
          </div>
          <Checkbox
          className='ml-24'
            label={
              (
                <Typography
                  variant="small"
                  color="white"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-blue-500"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              )
            }
            containerProps={{ className: "-ml-2.5" }}
          />
          <Button className="mt-6 ml-5" fullWidth>
            Register
          </Button>
          <Typography color="white" className="mt-4 ml-14 text-center font-normal">
            Already have an account?{" "}
            <a
              href="#"
              className="font-medium text-blue-500 transition-colors hover:text-blue-700"
            >
              Sign In
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

