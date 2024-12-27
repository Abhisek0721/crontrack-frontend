import { useState, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import EmojiPicker from "emoji-picker-react";
import Uppy from "@uppy/core";
import { Dashboard } from "@uppy/react";
import ThumbnailGenerator from "@uppy/thumbnail-generator";
import "@uppy/core/dist/style.css";
import "@uppy/dashboard/dist/style.css";

// Icons
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { Cross2Icon } from "@radix-ui/react-icons";

//dropdown shadcn ui
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const RichTextEditor = () => {
  const [value, setValue] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState<
    { file: File; preview: string }[]
  >([]); // Store selected files with previews
  const [showUploader, setShowUploader] = useState(false);
  const editorRef = useRef<ReactQuill | null>(null);

  // Configure Uppy
  const uppy = new Uppy({
    restrictions: {
      maxFileSize: 10485760, // 10MB
      allowedFileTypes: ["image/*", "video/*"], // Accept images and videos
      maxNumberOfFiles: 5,
    },
    autoProceed: false, // Wait for user action to start uploading
  });

  // Add thumbnail generator
  uppy.use(ThumbnailGenerator, {
    thumbnailWidth: 200, // Width of generated thumbnails
  });

  // Handle thumbnail generation
  uppy.on("thumbnail:generated", (file, preview) => {
    console.log("Thumbnail generated:", preview);
    setSelectedFiles((prev) => [
      ...prev.filter((f) => f.file.name !== file.name), // Prevent duplicates
      { file: file.data as File, preview }, // Add file and preview
    ]);
  });

  // Handle file removal
  uppy.on("file-removed", (file) => {
    console.log("File removed:", file);
  });

  const handleRemoveFile = (fileName: string) => {
    // Remove file from Uppy
    const fileToRemove = uppy.getFile(fileName);
    if (fileToRemove) {
      uppy.removeFile(fileName);
    }

    // Remove file from state
    setSelectedFiles((prev) =>
      prev.filter((file) => file.file.name !== fileName)
    );
  };

  const handleEmojiSelect = (emojiObject: any) => {
    const editor = editorRef.current?.getEditor(); // Access Quill editor instance
    if (!editor) return;

    editor.focus();
    let range = editor.getSelection();
    if (!range) {
      const length = editor.getLength();
      range = { index: length, length: 0 };
      editor.setSelection(range);
    }
    editor.insertText(range.index, emojiObject?.emoji, "user");
    editor.setSelection(range.index + emojiObject?.emoji.length);
    setShowEmojiPicker(false);
  };

  const handleToggleEmojiPicker = () => {
    setShowEmojiPicker((prev) => !prev);
  };

  const handleToggleUploader = () => {
    setShowUploader((prev) => !prev);
  };

  const handleSharePost = () => {
    console.log("Post Content:", value);
    console.log("Selected Files:", selectedFiles);
    alert("Post and images are ready to be shared!");
    // Send data to your API or backend
  };

  return (
    <>
      <div className="relative">
        <ReactQuill
          theme="snow"
          value={value}
          onChange={setValue}
          placeholder="Write your post..."
          className="text-black h-96 border-none outline-none"
          ref={editorRef}
        />
        <div className="absolute z-40 top-[-25px] left-10">
          {showEmojiPicker && (
            <div className="absolute">
              <EmojiPicker onEmojiClick={handleEmojiSelect} />
            </div>
          )}
        </div>

        {showUploader && (
          <div className="absolute z-40 bottom-[-30px] left-10">
            <Dashboard
              uppy={uppy}
              proudlyDisplayPoweredByUppy={false} // Optional: hide Uppy branding
              height={200}
              width={200}
            />
          </div>
        )}
      </div>

      <div className="relative flext mt-10 justify-between p-2 border-2 flex">
        <div className="space-x-4 text-2xl">
          <button onClick={handleToggleEmojiPicker}>
            <MdOutlineEmojiEmotions />
          </button>

          <button onClick={handleToggleUploader}>
            <MdOutlineDriveFolderUpload />
          </button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="mr-4 border bg-background shadow-sm hover:bg-accent px-6 rounded-sm">
           Post
          </DropdownMenuTrigger> 
          <DropdownMenuContent>
            <DropdownMenuItem className="cursor-pointer py-2" onClick={handleSharePost}>
              Immediately
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer py-2" onClick={handleSharePost}>
            Schedule
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer py-2" onClick={handleSharePost}>
             Save as draft
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Display Previews */}
      <div className="mt-2">
        <div className="flex flex-wrap gap-4 mt-2">
          {selectedFiles.map(({ file, preview }, index) => (
            <div key={index} className="flex flex-col items-center relative">
              {file.type.startsWith("image/") ? (
                <img
                  src={preview}
                  alt={file.name}
                  className="w-16 h-16 object-cover rounded"
                />
              ) : (
                <video
                  src={preview}
                  controls
                  className="w-16 h-16 object-cover rounded"
                />
              )}
              <button
                className="absolute top-[-5px] right-[-5px] bg-red-500 rounded-full p-1"
                onClick={() => handleRemoveFile(file.name)}
              >
                <Cross2Icon className="text-white"/>
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RichTextEditor;
