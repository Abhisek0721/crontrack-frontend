import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import Creato from "../assets/Creato-logo.jpg";
import Background from "../assets/Login-Background.png";
import toast from "react-hot-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import openEye from "../assets/open-eye.svg";
import closeEye from "../assets/closed-eye.svg";
import { useUserSignInMutation } from "../Redux/feature/authApi";
import { useUserSendforgotPasswordMutation } from "../Redux/feature/authApi";
import { Spinner } from "../spinner";
import cross from "../assets/cross.svg";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  email: z.string().email({
    message: "invalied Email",
  }),
  password: z.string().min(6, {
    message: "Password is required",
  }),
});

const popupformSchema = z.object({
  email: z.string().email({
    message: "invalied Email",
  }),
});

export function Login() {
  const [isShow, setisShow] = useState(false);
  const [loginfn, { isLoading: loginLoading }] = useUserSignInMutation();
  const [sendEmailfn, { isLoading: sendEmailLoading }] =
    useUserSendforgotPasswordMutation();
  const [isOpen, setisOpen] = useState(false);
  const [isdisabled, setisdisabled] = useState(false);
  const [timer, settimer] = useState(0);
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const popupform = useForm<z.infer<typeof popupformSchema>>({
    resolver: zodResolver(popupformSchema),
    defaultValues: {
      email: "",
    },
  });

  useEffect(() => {
    let interval = null;

    if (isdisabled && timer > 0) {
      interval = setInterval(() => {
        settimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0) {
      clearInterval(interval!);
    }

    return () => clearInterval(interval!);
  }, [timer, isdisabled]);

  const handleTimer = () => {
    settimer(60);
    setisdisabled(!isdisabled);
    setTimeout(() => {
      setisdisabled(false);
    }, 60000);
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response = await loginfn(values);
      console.log(response);
      if (response?.error) {
        toast.error(`${response?.error?.data?.message}`, { duration: 5000 });
      }
      if (response?.data) {
        toast.success(`${response?.data?.message}`, { duration: 5000 });
        localStorage.setItem("user", JSON.stringify(response?.data?.data));
        setTimeout(() => {
          response?.data?.data?.user_workspace
            ? navigate("/dashboard")
            : navigate("/createworkspaceflow");
        }, 1000);
      }
    } catch (error) {}

    console.log(values);
  }

  async function onPopUpSubmit(popupvalues: z.infer<typeof popupformSchema>) {
    const response = await sendEmailfn(popupvalues);
    if (response?.error) {
      toast.error(`${response?.error?.data?.message}`, { duration: 5000 });
    }
    if (response?.data) {
      toast.success(`${response?.data?.message}`, { duration: 5000 });
      setisOpen(!isOpen);
      handleTimer();
    }
  }
  return (
    <>
      {(loginLoading || sendEmailLoading) && <Spinner />}
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

          <Form {...form}>
            <form className="py-4" onSubmit={form.handleSubmit(onSubmit)}>
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="shadcn" {...field} />
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
                      <FormItem className="relative">
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="......"
                            {...field}
                            type={isShow ? "input" : "password"}
                          />
                        </FormControl>
                        <img
                          className="absolute top-9 right-2 cursor-pointer"
                          onClick={() => setisShow(!isShow)}
                          src={isShow ? openEye : closeEye}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {isdisabled ? (
                    <div className="mt-[-0.5rem] inline-block text-sm text-muted-foreground">
                      Didn't get Email {timer}
                    </div>
                  ) : (
                    <Link
                      to="#"
                      className=" mt-[-0.5rem] inline-block text-sm text-muted-foreground"
                      onClick={() => setisOpen(!isOpen)}
                    >
                      Forgot your Password
                    </Link>
                  )}
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary"
                  onClick={handlelogin}
                  disabled={isdisabled ? true : false}
                >
                  Login
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  disabled={isdisabled ? true : false}
                >
                  Login with Google
                </Button>
              </div>
            </form>
          </Form>

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

      {isOpen && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-1/3 relative">
            <div className="py-6">
              <div className="text-xl font-semibold mb-4 absolute top-2 text-start">
                Send Verification Email
              </div>
              <img
                src={cross}
                alt=""
                className="absolute right-3 top-2 cursor-pointer"
                onClick={() => setisOpen(!isOpen)}
              />
            </div>
            <Form {...popupform}>
              <form onSubmit={popupform.handleSubmit(onPopUpSubmit)}>
                <div className="mb-4">
                  <FormField
                    control={popupform.control}
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
                <div className="flex items-center justify-between">
                  <Button type="submit" className="w-full">
                    Send email
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
      )}
    </>
  );
}
