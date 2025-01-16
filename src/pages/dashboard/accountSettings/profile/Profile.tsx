import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelecter } from "../../../../Redux/Hooks/store";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import DeleteAccountCard from "@/components/deleteAccount";
interface inputType {
  email: string;
  full_Name: string;
  bio: string;
  profile_picture: string;
}
export const Profile = () => {
  const user = useAppSelecter((state) => state?.auth?.user);

  const { register, handleSubmit } = useForm<inputType>({
    defaultValues: {
      full_Name: user?.full_name,
      email: user?.email,
    },
    reValidateMode: "onChange",
  });

  async function onSubmit(values: inputType) {
    try {
      console.log(values);
    } catch (error) {
      toast.error(`${error}`, { duration: 5000 });
    }
  }

  return (
    <>
      <div className="flex justify-center w-full lg:w-[65%] mx-auto py-8 bg-slate-100">
        <div className="flex flex-col items-center w-full gap-6">
          {/* Avatar Section */}
          <Avatar className="w-24 h-24 cursor-pointer">
            <AvatarImage
              src={user?.profile_picture || "https://github.com/shadcn.png"}
              alt="Profile Picture"
              className="cursor-pointer"
            />
            <AvatarFallback className="text-xl font-semibold">
              {user?.full_name?.substring(0, 2).toUpperCase() || "NA"}
            </AvatarFallback>
          </Avatar>

          {/* Form Section */}
          <form className="space-y-6 px-2" onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center flex-col gap-4">
              {/* Full Name Field */}
              <div className="w-60">
                <label className="block text-sm font-medium py-1">
                  Full Name
                </label>
                <Input
                  {...register("full_Name")}
                  type="text"
                  name="full_Name"
                  defaultValue={user?.full_name}
                  autoComplete="name"
                  className="w-full border-2 border-primary"
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="w-60">
              <label className="block text-sm font-medium py-1">Email</label>
              <Input
                {...register("email")}
                type="email"
                name="email"
                defaultValue={user?.email}
                autoComplete="email"
                className="w-full border-2 border-primary"
                readOnly
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button type="submit" className="w-full">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>

      <DeleteAccountCard className="w-full lg:w-[65%] mx-auto my-6" />
    </>
  );
};
