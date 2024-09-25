import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";

import {
  CaretSortIcon,
  PlusCircledIcon,
} from "@radix-ui/react-icons";

import {
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,

} from "@/components/ui/command";

import { useAppSelecter } from "../Redux/Hooks/store";
import { useAppDispatch } from "../Redux/Hooks/store";
import { selectedWorkspace } from "../Redux/feature/authSlice";
import { useState } from "react";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

export const WorkSpaceSwitcher = ({
  className,
}: React.HTMLAttributes<HTMLElement>) => {
  const userWorkSpaces = useAppSelecter(
    (state) => state.auth.user_workspace
  );
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const workspace:string = userWorkSpaces? userWorkSpaces[0]?.workspace?.workspace_name: "workspace";
  const [firstWorkspace, setfirstWorkspace] = useState<string>(`${workspace}`);

  const select_Workspace = userWorkSpaces?.find((workspace) => {
    return workspace?.workspace?.workspace_name === `${firstWorkspace}`;
  })

  select_Workspace && dispatch(selectedWorkspace(select_Workspace));

  console.log(selectedWorkspace)


  return (
    <>
      <div className={cn("text-gray-400", className)}>
        <Popover>
          <PopoverTrigger>
            <Button variant="outline" className="flex gap-4">
              {firstWorkspace}
              <CaretSortIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-fit ml-[17px]">
            <Command className="">
              <CommandInput placeholder="Search workspace"></CommandInput>
              <CommandList>
                <CommandEmpty>No Workspace found</CommandEmpty>
                <CommandGroup heading="Your Workspace">
                  {userWorkSpaces?.map((workspace) => (
                    <CommandItem
                      key={workspace?.id}
                      className="flex justify-between cursor-pointer"
                    >
                      <div
                        onClick={() =>
                          setfirstWorkspace(
                            workspace?.workspace?.workspace_name
                          )
                        }
                        className="w-full flex justify-between"
                      >
                        <div>{workspace?.workspace.workspace_name}</div>
                        <div>{workspace?.role}</div>{" "}
                      </div>
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>

            <Button variant="ghost" className="flex gap-2 w-full" onClick={() => navigate("/create-workspace-name")}>
              <PlusCircledIcon className="" /> Create Workspace
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
