import { useParams } from "react-router-dom";
import { useUserChangePasswordMutation } from "../Redux/feature/authApi";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import toast from "react-hot-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "../spinner";
import closeEye from "../assets/closed-eye.svg";
import openEye from "../assets/open-eye.svg";
import { useNavigate } from "react-router-dom";

const formSchema = z.object({
  verification_token: z.string(),
  new_password: z.string().min(6, {
    message: "Invalied Email",
  }),
});

export const ChangeUserPassword = () => {
  const [changePasswordfn, { isLoading }] = useUserChangePasswordMutation();
  const [isshowPassword, setisshowPassword] = useState<Boolean>(false);
  const params = useParams();
  const token = params.token;
  const navigate = useNavigate();
  console.log(token);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      verification_token: "",
      new_password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const payload = {
      verification_token: `${token}`,
      new_password: `${values.new_password}`,
    };

    const response:any = await changePasswordfn(payload);
    if (response?.error) {
      toast.error(`${response?.error?.data?.message}`, { duration: 5000 });
    }
    if (response?.data) {
      toast.success(`${response?.data?.message}`, { duration: 5000 });
    }
    setTimeout(() => {
      navigate("/login");
    }, 500);
  }

  return (
    <>
      {isLoading && <Spinner />}
      <div className="inset-0 flex justify-center items-center min-h-[100vh] px-4">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-2/3 md:w-1/2 lg:w-1/3 relative">
          <div className="py-6">
            <div className="text-xl font-semibold mb-4 absolute top-2 text-start">
              Change Password
            </div>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <div className="mb-4">
                <FormField
                  control={form.control}
                  name="new_password"
                  render={({ field }) => (
                    <FormItem className="relative">
                      <FormLabel>New Password</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="...."
                          {...field}
                          autoComplete="true"
                          type={isshowPassword ? "input" : "password"}
                        />
                      </FormControl>

                      <img
                        src={isshowPassword ? openEye : closeEye}
                        alt=""
                        className="absolute top-8 right-3 cursor-pointer"
                        onClick={() => setisshowPassword(!isshowPassword)}
                      />

                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <div className="flex items-center justify-between">
                <Button type="submit" className="w-full">
                  Reset Password
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};
