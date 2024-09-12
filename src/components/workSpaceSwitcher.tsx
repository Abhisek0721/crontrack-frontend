import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverAnchor,
} from "@/components/ui/popover";

import {
  CaretSortIcon,
  CheckIcon,
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
import { useState } from "react";

import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

export const WorkSpaceSwitcher = ({
  className,
}: React.HTMLAttributes<HTMLElement>) => {
  const userWorkSpaceSpaces = useAppSelecter(
    (state) => state.auth.user_workspace
  );
  console.log(userWorkSpaceSpaces);
  const [firstWorkspace, setfirstWorkspace] = useState<string>("workspace");

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
                  {userWorkSpaceSpaces?.map((workspace) => (
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

            <Button variant="ghost" className="flex gap-2 w-full">
              <PlusCircledIcon className="" /> Create Workspace
            </Button>
          </PopoverContent>
        </Popover>
      </div>
    </>
  );
};
