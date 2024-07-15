import { Input } from "@/components/ui/input";

const Workspace = () => {
  return (
    <div className="flex w-[100%] items-center justify-center">
      <div className="bg-blue-200  flex items-center justify-center mb-4 w-[100%]">
      <Input className="py-6 rounded-md" required placeholder="Workspace Name"/> 
      </div>
    </div>
  );
};

export default Workspace;
