import RichTextEditor from "@/components/richTextEditor";
import { Separator } from "@/components/ui/separator";
import { Preview } from "@/components/preview";

const Post = () => {
  return (
    <div className="p-4 md:px-8">
    <div>
      <p className="text-lg font-semibold">Create Post</p>
      <Separator orientation="horizontal" className="w-full my-4" />
    </div>
    <div className="flex flex-col md:flex-row w-full gap-4">
      <div className="w-full md:w-1/2">
        <RichTextEditor />
      </div>
      <div className="hidden md:block">
        <Separator orientation="vertical" className="mx-4" />
      </div>
      <div className="w-full md:w-1/2">
        <Preview />
      </div>
    </div>
  </div>
  );
};

export default Post;
