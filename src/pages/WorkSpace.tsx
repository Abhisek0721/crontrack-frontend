import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useCreateWorkSpaceNameMutation } from "../Redux/feature/creatinigWorkSpaceFlowApi";
import toast from "react-hot-toast";
import { Spinner } from "../spinner";

//form schema
const formSchema = z.object({
  workspace_name: z.string().min(4, {
    message: "Workspace must be at least 4 characters.",
  }),
});

interface handleWorkSpaceContex {
  handledata: (arg: number) => void;
}

const Workspace = () => {
  const [createWorkSpaceNamefn, { isLoading }] =
    useCreateWorkSpaceNameMutation();
  const navigate = useNavigate();
  //handle the data
  const { handledata } = useOutletContext<handleWorkSpaceContex>();

  useEffect(() => {
    handledata(0);
  }, [handledata]);

  // 1. Define  form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspace_name: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const response: any = await createWorkSpaceNamefn(values);
      if (response?.error) {
        toast.error(`${response?.error?.data?.message}`, { duration: 5000 });
      }
      if (response?.data) {
        toast.success(`${response?.data?.message}`, { duration: 5000 });
        handledata(1);
        navigate("add-socialmedia-accounts");
      }
    } catch (error) {
      toast.error(`${error}`, { duration: 5000 });
    }
  }
  return (
    <>
      {isLoading && <Spinner />}
      <div className=" w-[100%]">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              control={form.control}
              name="workspace_name"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Workspace Name"
                      {...field}
                      className="w-[100%] py-5 bg-blue-200  flex items-center justify-center"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-[100%] mt-4">
              Create WorkSpace
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default Workspace;
