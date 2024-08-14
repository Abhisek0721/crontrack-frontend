import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Creato from "../assets/Creato-logo.jpg";
import Background from "../assets/Login-Background.png";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUserSignUpMutation } from "../Redux/feature/authApi";
import { useUserResendVerificationMailMutation } from "../Redux/feature/authApi";
import { Spinner } from "../spinner";
import openEye from "../assets/open-eye.svg";
import closeEye from "../assets/closed-eye.svg";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useNavigate } from "react-router-dom";
import { getUserInfo } from "../Redux/util/getUserDetailFromBrowser";
import type {
  NewUSerResponse,
  ResendverifyUser,
} from "../Redux/util/InterfaceTypes";

const formSchema = z.object({
  full_name: z.string().min(5, {
    message: "Username must be at least 5 characters.",
  }),
  email: z.string().email({
    message: "Invalid Email",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters",
  }),
});

export function Signup() {
  const navigate = useNavigate();
  const [show, setshow] = useState(false);
  const [showResendVerification, setshowResendVerification] = useState(false);

  const [loginfn, { isLoading }] = useUserSignUpMutation();
  const [verifyfn, { isloading }] = useUserResendVerificationMailMutation();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await loginfn(values);
      if (response?.data) {
        //remove item from localStorage
        localStorage.removeItem("user");

        //set new item in localstorage
        localStorage.setItem("user", JSON.stringify(response));
        // toast.success('user register successfully',{
        // duration: 3000
        // })
      }
      const user: NewUSerResponse = getUserInfo();
      if (!user?.verified) {
        const email: ResendverifyUser = { email: values.email };
        const response = await verifyfn(email);
        if (response) setshowResendVerification(true);
        toast("verify your email address", { duration: 3000 });
      }
      // navigate("/multistepform"
    } catch (error: any) {
      if (error?.response) {
        toast.error(error?.response, {
          duration: 3000,
        });
      }
    }
    console.log("entered values", values);
    if (isLoading) {
      <Spinner />;
    }
  }

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

        <Form {...form}>
          <form className="py-4" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid gap-5">
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="full_name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="shadcn"
                          {...field}
                          autoComplete="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="shadcn@gmail.com"
                          {...field}
                          autoComplete="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid gap-2">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <div className="relative">
                          <Input
                            placeholder="....."
                            {...field}
                            type={show ? "input" : "password"}
                            autoComplete="true"
                          />
                          <div
                            className="absolute top-3 right-3 cursor-pointer"
                            onClick={() => setshow(!show)}
                          >
                            <img src={show ? openEye : closeEye} alt="" />
                          </div>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className=" mt-[-0.5rem]  text-sm text-muted-foreground flex justify-between ">
                  <Link to="#">Forgot your password?</Link>
                  {showResendVerification ? (
                    <Link to="#">Resend verification email</Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <Button type="submit" className="w-full bg-secondary">
                Signup
              </Button>
              <Button variant="outline" className="w-full">
                Sign up with Google
              </Button>
            </div>
          </form>
        </Form>

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
