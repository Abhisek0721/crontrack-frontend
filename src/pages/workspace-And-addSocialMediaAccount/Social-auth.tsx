import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useAddFacebookPageMutation } from "../../Redux/feature/contentManagementServiceApi";
import toast from "react-hot-toast";
export const SocialAuth = () => {
  const [searchParams] = useSearchParams();
  const [pages, setPages] = useState<any[]>([]);
  const [selectedPage, setSelectedPage] = useState<any>();
  const [error, setError] = useState<string | null>(null);
  const [token, settoken] = useState<string | null>(null);
  const [plateform, setplateform] = useState<string | null>(null);
  const [addfacebookpagefn, {isLoading}] = useAddFacebookPageMutation()

  useEffect(() => {
    // Extract and parse the "data" query parameter
    const encodedData = searchParams.get("data");
    if (encodedData) {
      try {
        const decodedData = JSON.parse(decodeURIComponent(encodedData)); // Decode URL-encoded JSON
        setPages(decodedData.pages || []);
        settoken(decodedData?.token)
        setplateform(decodedData?.platform)
      } catch (error) {
        setError("Failed to parse the data. Please try again.");
        console.error("Error parsing query parameter:", error);
      }
    } else {
      setError("No data found in query parameters.");
    }
  }, [searchParams]);

 const handleSelectedPage = async() => {
    try {
        if (!selectedPage) {
            toast.error("Please select a page to connect.",{duration: 3000});
            return;
          }
          const {pageId, pageName, pageCategory} = selectedPage;
          const payload = {
            token,
            pageId,
            pageName,
            pageCategory
          }
          console.log("payload",payload);
          const response = await addfacebookpagefn(payload)
          console.log("response",response);
          if (response?.error) {
            toast.error(`${response?.error?.data?.message}`, {
              duration: 2000,
            });
            return;
          }
          toast.success(`${response?.data?.message}`, { duration: 5000 });
    } catch (error) {
        toast.error(`${error}`, {duration: 5000});   
    }
 }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Connect a {plateform} Page
        </h1>

        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-100 p-2 rounded">
            {error}
          </div>
        )}

        {pages.length > 0 ? (
          <>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select a Page
              </label>
              <ul className="space-y-2">
                {pages.map((page) => (
                  <li
                    key={page.pageId}
                    className={`border rounded p-3 cursor-pointer ${
                      selectedPage?.pageId === page.pageId
                        ? "border-primary bg-blue-100"
                        : "hover:bg-gray-50"
                    }`}
                    onClick={() => setSelectedPage(page)}
                  >
                    <p className="font-medium text-gray-800">{page.pageName}</p>
                    <p className="text-sm text-gray-600">
                      {page.pageCategory}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
            <Button
              className={`w-full ${
                isLoading
                  && "bg-gray-400 cursor-not-allowed"
              }`}
              onClick={handleSelectedPage}
              disabled={isLoading}
            >
              {isLoading ? "Connecting..." : "Connect Page"}
            </Button>
          </>
        ) : (
          <p className="text-gray-600">No pages available to display.</p>
        )}
      </div>
    </div>
  );
};
