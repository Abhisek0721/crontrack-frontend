import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Alertdialog } from "@/components/alertdialog";
import { useState } from "react";
import { useChangePasswordMutation } from "../Redux/feature/creatinigWorkSpaceFlowApi";
import openEye from "../assets/open-eye.svg";
import closeEye from "../assets/closed-eye.svg";
import { Spinner } from "../spinner";
import toast from "react-hot-toast";
interface ChangePasswordDialogProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const passwordSchema = z.object({
  current_password: z
    .string()
    .min(6, { message: "Current password must be at least 6 characters." }),
  new_password: z
    .string()
    .min(6, { message: "New password must be at least 6 characters." }),
});

export const ChangePasswordDialog: React.FC<ChangePasswordDialogProps> = ({
  isOpen,
  setIsOpen,
}) => {

  //alert message
  const alertTitle = "Unsaved Changes Detected"
  const alertmessage = "You haven't saved your new password. Are you sure you want to close without updating it?"

  const [isAlertDialogOpen, setisAlertDialogOpen] = useState<boolean>(false);
  const [isCuurentPasswordShow, setisCuurentPasswordShow] =
    useState<boolean>(false);
  const [isNewPasswordShow, setisNewPasswordShow] = useState<boolean>(false);
  const [changePasswordFn, { isLoading }] = useChangePasswordMutation();

  const form = useForm<z.infer<typeof passwordSchema>>({
    resolver: zodResolver(passwordSchema),
    defaultValues: {
      current_password: "",
      new_password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof passwordSchema>) => {
    try {
      const response:any = await changePasswordFn(values);
      if(response?.data) {
        toast.success(`${response?.data?.message}`, {duration: 3000})
        setIsOpen(false);
      }
      if(response?.error) {
        toast.error(`${response?.error?.data?.message}`, {duration: 3000})
      }
    } catch (error) {
      toast.error(`${error}`, {duration: 3000});
    }
  };

  return (
    <>
    {isLoading && <Spinner />}
      <Alertdialog
        alertDialogTitle= {`${alertTitle}`}
        alertDialogDescription= {`${alertmessage}`}
        isAlertDialogOpen={isAlertDialogOpen}
        setisAlertDialogOpen={setisAlertDialogOpen}
        setAnotherDialogOpen={setIsOpen}
      />

      <Dialog
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) {
            setisAlertDialogOpen(true);
          }
        }}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Change Password</DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="current_password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel> Current Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="......"
                        {...field}
                        type={isCuurentPasswordShow ? "input" : "password"}
                        autoComplete="true"
                      />
                    </FormControl>
                    <img
                      className="absolute top-9 right-2 cursor-pointer"
                      onClick={() =>
                        setisCuurentPasswordShow(!isCuurentPasswordShow)
                      }
                      src={isCuurentPasswordShow ? openEye : closeEye}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="new_password"
                render={({ field }) => (
                  <FormItem className="relative">
                    <FormLabel> New Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="......"
                        {...field}
                        type={isNewPasswordShow ? "input" : "password"}
                        autoComplete="true"
                      />
                    </FormControl>
                    <img
                      className="absolute top-9 right-2 cursor-pointer"
                      onClick={() => setisNewPasswordShow(!isNewPasswordShow)}
                      src={isNewPasswordShow ? openEye : closeEye}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" className="w-full">
                  Change Password
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </>
  );
};
