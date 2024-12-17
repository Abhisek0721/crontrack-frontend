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
import { useEffect, useState } from "react";
import { useCreateWorkSpaceNameMutation } from "../Redux/feature/creatinigWorkSpaceFlowApi";
import toast from "react-hot-toast";
import { Spinner } from "../spinner";
import { useAppDispatch, useAppSelecter } from "../Redux/Hooks/store";
import { setUserWorkspace } from "../Redux/feature/authSlice";
import { useUpdateWorkSpaceMutation } from "../Redux/feature/creatinigWorkSpaceFlowApi";
import { useSearchParams } from "react-router-dom";

//form schema
const formSchema = z.object({
  workspace_name: z.string().min(4, {
    message: "Workspace must be at least 4 characters.",
  }),
});

interface handleWorkSpaceContex {
  handledata: (arg: number) => void;
}

const CreateWorkspace = () => {
  // 1. Define  form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      workspace_name: "",
    },
  });

  //handle the data
  const { handledata } = useOutletContext<handleWorkSpaceContex>();

  useEffect(() => {
    handledata(0);
  }, [handledata]);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const workspaces = useAppSelecter((state) => state?.auth?.user_workspace);
  const [isCreateWorkspace, setisCreateWorkspace] = useState<boolean>(false);

  // taking workspace name from route
  const [searchParams] = useSearchParams();
  const isworkspace = searchParams.get("update-workspace");

  //allow user to create or update workspace based on isworkspace value
  useEffect(() => {
    if (isworkspace === "false" || (!isworkspace)) setisCreateWorkspace(true);
    else form?.setValue("workspace_name", isworkspace);
  }, [isworkspace, form]);

  //for creating workspace
  const [createWorkSpaceNamefn, { isLoading: loadingCreateWorkspace }] =
    useCreateWorkSpaceNameMutation();

  //for updating workspace
  const [updateWorkSpaceNamefn, { isLoading: loadingUpdateWorkspace }] =
    useUpdateWorkSpaceMutation();

  // define createworkspace handle.
  async function createWorksSpace(values: z.infer<typeof formSchema>) {
    try {
      const response: any = await createWorkSpaceNamefn(values);
      if (response?.error) {
        toast.error(`${response?.error?.data?.message}`, { duration: 5000 });
      }
      if (response?.data) {
        toast.success(`${response?.data?.message}`, { duration: 5000 });
        dispatch(setUserWorkspace(response?.data?.data));
        handledata(1);
        navigate(`add-socialmedia-accounts?workspace=${values?.workspace_name}`);
      }
    } catch (error) {
      toast.error(`${error}`, { duration: 5000 });
    }
  }

  //handle updateworkspace handler
  async function updateWorkSpace(values: z.infer<typeof formSchema>) {

    const workspace = workspaces?.find((workspace) => {
    return workspace?.workspace?.workspace_name === isworkspace;
    });

    const payload = {
      workspace_id: workspace?.workspace?.id,
      workspace_name: values?.workspace_name,
    };
    console.log(payload);
    try {
      const response: any = await updateWorkSpaceNamefn(payload);
      console.log(response?.data?.data?.members[0]);
      if (response?.error) {
        toast.error(`${response?.error?.data?.message}`, { duration: 5000 });
      }
      if (response?.data) {
        toast.success(`${response?.data?.message}`, { duration: 5000 });
        const new_workspace = workspaces?.filter((workspace) => {
        return workspace?.workspace?.workspace_name!==isworkspace});
        
       new_workspace && new_workspace.push(response?.data?.data?.members[0])
       new_workspace && dispatch(setUserWorkspace({user_workspace: new_workspace}))
        navigate(`add-socialmedia-accounts?workspace=${values?.workspace_name}`);
      }
    } catch (error) {
      toast.error(`${error}`, { duration: 5000 });
    }
  }

  return (
    <>
      {(loadingCreateWorkspace || loadingUpdateWorkspace) && <Spinner />}
      <div className=" w-[100%]">
        <Form {...form}>
          <form
            onSubmit={
              isCreateWorkspace
                ? form.handleSubmit(createWorksSpace)
                : form.handleSubmit(updateWorkSpace)
            }
          >
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
              {isCreateWorkspace ? "create workspace" : "update workspace"}
            </Button>
          </form>
        </Form>
      </div>
    </>
  );
};

export default CreateWorkspace;
