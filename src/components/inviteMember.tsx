import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  FormControl,
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";
import { useInviteMemberToWorkSpaceMutation } from "../Redux/feature/creatinigWorkSpaceFlowApi";
import { useAppSelecter } from "../Redux/Hooks/store";
import toast from "react-hot-toast";
import { Spinner } from "../spinner";
import { constant } from "../constants";
import { CiEdit } from "react-icons/ci";
import { AiOutlineUserDelete } from "react-icons/ai";
interface InviteMemberProps {
  isOpen: boolean;
  setisOpen: (arg: boolean) => void;
}

const formSchema = z.object({
  email: z.string().email({
    message: "Email not valid",
  }),
  role: z.string().min(5, {
    message: "Please select a role",
  }),
});

export const InviteMember: React.FC<InviteMemberProps> = ({
  isOpen,
  setisOpen,
}) => {
  const [members, setMembers] = useState<{ email: string; role: string }[]>([]);
  const [loginfn, { isLoading }] = useInviteMemberToWorkSpaceMutation();
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const workspace = useAppSelecter((state) => state?.auth?.selected_workspace);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      role: "",
    },
  });

  const addMember = (values: z.infer<typeof formSchema>) => {
    if (editingIndex !== null) {
      const updatedMembers = [...members];
      updatedMembers[editingIndex] = values;
      setMembers(updatedMembers);
      setEditingIndex(null);
    } else {
      setMembers([...members, values]);
    }
    form.reset();
  };

  const onSubmit = async () => {
    const payload = {
      workspace_id: `${workspace?.workspace?.id}`,
      members_to_invite: members,
    };
    try {
      const response: any = await loginfn(payload);
      if (response?.error) {
        toast.error(`${response?.error?.data?.message}`, { duration: 4000 });
      }
      if (response?.data) {
        toast.success(`${response?.data?.message}`, { duration: 4000 });
        setTimeout(() => {
          setisOpen(false);
        }, 1000);
      }
      setTimeout(() => {
        setisOpen(false);
      }, 1000);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 flex items-center justify-center z-10">
          <Spinner />
        </div>
      )}
      <Dialog
        open={isOpen}
        onOpenChange={() => setisOpen(!isOpen)}
      >
        <DialogContent 
        onInteractOutside={(event) => event.preventDefault()}
        className="w-full max-w-lg mx-auto p-4 sm:p-6 md:p-8">
          <DialogHeader>
            <DialogTitle className="text-lg sm:text-xl md:text-2xl">
              Invite people to this workspace
            </DialogTitle>
            <DialogDescription />
          </DialogHeader>

          <div>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(addMember)}
                className="space-y-4"
              >
                <div className="flex flex-col md:flex-row justify-between gap-4">
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input placeholder="Enter email" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      control={form.control}
                      name="role"
                      render={({ field }) => (
                        <FormItem className="w-full">
                          <FormLabel>Role</FormLabel>
                          <Select
                            onValueChange={(value) => field.onChange(value)}
                            value={field.value}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger>
                                <SelectValue placeholder="Select role" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              {constant?.ROLE_CHOICES?.map(
                                (ROLE_CHOICE, index) => {
                                  return (
                                    <SelectItem
                                      value={ROLE_CHOICE?.value}
                                      key={index}
                                    >
                                      {ROLE_CHOICE?.label}
                                    </SelectItem>
                                  );
                                }
                              )}
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                {/* Display added members */}
                <div className="mt-4 max-h-40 overflow-auto rounded-md border border-gray-200">
                  {members.length > 0 && (
                    <ul className="space-y-2 p-2">
                      {members.map((member, index) => (
                        <li
                          key={index}
                          className="flex justify-between flex-wrap p-2 border-b border-gray-200"
                        >
                          <span className="mr-4">{member.email}</span>

                          <div className="flex gap-2">
                            <span>{member.role}</span>

                            <div className="flex">
                              <span
                                className="flex justify-center items-center cursor-pointer hover:opacity-90 hover:bg-slate-200 px-2 rounded-md"
                                onClick={() => {
                                  setEditingIndex(index);
                                  const member = members[index];
                                  form.setValue("email", member.email);
                                  form.setValue("role", member.role);
                                }}
                              >
                                <CiEdit />
                              </span>
                              <span
                                className="flex justify-center items-center cursor-pointer hover:opacity-90 hover:bg-slate-200 px-2 rounded-md"
                                onClick={() => {
                                  const new_members = members.filter((user) => {
                                    return !(
                                      user?.email === member?.email &&
                                      user?.role === member?.role
                                    );
                                  });

                                  setMembers(new_members);
                                }}
                              >
                                <AiOutlineUserDelete />
                              </span>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                <Button variant="outline" className="w-full md:w-auto">
                  Add Member
                </Button>
              </form>
            </Form>
          </div>

          <DialogFooter>
            {members.length !== 0 && (
              <Button
                type="button"
                className={`w-full md:w-auto`}
                onClick={() => {
                  members.length > 0 && onSubmit();
                }}
              >
                Invite Members
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};
