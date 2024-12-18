import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
export function Search({className} : React.HTMLAttributes<HTMLElement>) {
  return (
    <div>
      <Input
        type="search"
        placeholder="Search Post..."
        className={cn("w-[300px]", className)}
      />
    </div>
  );
}
