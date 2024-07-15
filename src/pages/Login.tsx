import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Creato from "../assets/Creato-logo.jpg";
import Background from "../assets/Login-Background.png";
import toast from "react-hot-toast"; 

export function Login() {
  const handlelogin = () => {
    toast.success("Login Successful");
  };
  return (
    <div className="w-full flex justify-between items-center overflow-hidden">
      <div className="fixed top-1 left-4">
        {" "}
        <img src={Creato} className=" w-[80px] rounded-[50%]" alt="" />
      </div>

      <div className="lg:max-w-[60vw] my-auto mx-auto px-3">
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold py-4">Login</h1>
          <p className="text-balance text-muted-foreground">
            Enter your email below to login to your account
          </p>
        </div>

        <form className="py-4">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
                autoComplete="username"
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input
                id="password"
                type="password"
                name="password"
                required
                autoComplete="current-password"
              />
              <Link
                to="#"
                className=" mt-[-0.5rem] inline-block text-sm text-muted-foreground"
              >
                Forgot your password?
              </Link>
            </div>
            <Button type="submit" className="w-full bg-secondary" onClick={handlelogin}>
              Login
            </Button>
            <Button variant="outline" className="w-full">
              Login with Google
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div>

      <div className="hidden lg:block overflow-hidden w-[65%] h-[100vh] bg-primary">
        <img
          src={Background}
          alt="Background Image"
          className="dark:brightness-[0.2] dark:grayscale w-full h-full object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
}
