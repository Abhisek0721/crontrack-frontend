import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Creato from "../assets/Creato-logo.jpg";
import Background from "../assets/Login-Background.png";
import toast from "react-hot-toast";

export function Signup() {
  const handleSignup = () => {
    toast.success("Successfully Account created");
  };
  return (
    <div className="w-full flex justify-between items-center overflow-hidden">
      <div className="fixed top-1 left-4">
        {" "}
        <img src={Creato} className=" w-[80px] rounded-[50%]" alt="" />
      </div>

      <div className="lg:min-w-[30%] my-auto mx-auto px-3">
        <div className="text-center py-6">
          <h1 className="text-3xl font-bold py-4">Signup</h1>
          <p className="text-balance text-muted-foreground">
            Set up your account to start using Creato
          </p>
        </div>

        <form className="py-4">
          <div className="grid gap-5">
            <div className="grid gap-2">
              <Label htmlFor="email">Username</Label>
              <Input
                id="Username"
                type="Username"
                placeholder="john_doe"
                required
                autoComplete="username"
              />
            </div>
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
            <Button type="submit" className="w-full bg-secondary" onClick={handleSignup}>
              Signup
            </Button>
            <Button variant="outline" className="w-full">
              Sign up with Google
            </Button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm">
          have an account?{" "}
          <Link to="/login" className="underline">
            login
          </Link>
        </div>
      </div>

      <div className="hidden lg:block overflow-hidden w-[60%] h-[100vh] bg-primary">
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
