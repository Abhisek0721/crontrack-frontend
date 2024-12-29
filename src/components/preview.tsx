import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { constant } from "../constants";
import { useAppSelecter } from "../Redux/Hooks/store";

import { FacebookPreviews,InstagramPreviews, TwitterPostPreview, LinkedInPostPreview } from '@automattic/social-previews';

export const Preview = () => {
    const social_media_plateform = constant?.SOCIAL_MEDIA_PLATEFORM
   const Text = useAppSelecter((state) => state?.text?.text)
   const Images = useAppSelecter((state) => state?.text?.images)
    
  return (
    <>
      <div className="mx-auto">
        <Tabs defaultValue={social_media_plateform[0]?.value}>
          <TabsList className="mx-auto">
            {social_media_plateform?.map((account, index) => (
            <TabsTrigger key={index} value={account?.value}>{account?.label}</TabsTrigger>
            ))}
          </TabsList>

          {/* Tab content */}
          {social_media_plateform?.map((account, index) => {
          return (
            <div className="relative">
              <TabsContent key={index} value={account?.value} className="isolate">
              {account?.value === "facebook" && 
              <FacebookPreviews 
              title={""}
              url="jlaf"
              description={Text}
              image={Images ? Images[0]: undefined}
              />
              }
              {account?.value === "instagram" && 
              <InstagramPreviews 
              name="your name"
              profileImage=""
              caption={Text}
              image={Images ? Images[0]: undefined}
              />}
              {account?.value === "twitter" && 
                 <TwitterPostPreview
                 text={Text}
                 name="your name"
                 profileImage=""
                 image={Images ? Images[0]: undefined}
                 description={Text}
                 />}
              {account?.value === "linkedin" && 
              <LinkedInPostPreview
              title=""
              description={Text}
              name="" 
              image={Images ? Images[0]: undefined}
              url=""
              profileImage=""
               />}

            </TabsContent>
            </div>
            
          );
        })}
        </Tabs>
      </div>
    </>
  );
};
