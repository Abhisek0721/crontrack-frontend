import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  import { Button } from "./ui/button"
  import { cn } from "@/lib/utils";
  import { Link } from "react-router-dom";
  import { IoIosArrowDown } from "react-icons/io";


export const MainNavMd = ({
  className,
}: React.HTMLAttributes<HTMLElement>) => {
  return(<>
  <div className={cn("", className)}>
     <HoverCard>
    <HoverCardTrigger>
      <Button variant='link' className="text-[1.2rem]"><IoIosArrowDown/></Button>
    </HoverCardTrigger>
    <HoverCardContent className="mt-1">
    <nav
      className="flex flex-col items-start space-y-4 px-4"
    >
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium transition-colors hover:text-primary"
      >
        Overview
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Customers
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Products
      </Link>
      <Link
        to="/examples/dashboard"
        className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
      >
        Settings
      </Link>
    </nav>    </HoverCardContent>
  </HoverCard>
  </div>
 
  </>)
}