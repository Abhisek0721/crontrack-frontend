import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { constant } from "../constants";
import  Facebook  from "../socialMediaPreview/facebook";
import { Instagram } from "../socialMediaPreview/instagram";
import { LinkedIn } from "../socialMediaPreview/linkedin";
import { Twitter } from "../socialMediaPreview/twitter";
import { useAppSelecter } from "../Redux/Hooks/store";
import { useState } from "react";

import { FacebookPreviews } from '@automattic/social-previews';

export const Preview = () => {
    const social_media_plateform = constant?.SOCIAL_MEDIA_PLATEFORM
    // const [text, settext] = useState<string>('')
   const Text = useAppSelecter((state) => state?.text?.text)
   const Images = useAppSelecter((state) => state?.text?.images)
   console.log("Image: ", Images)
    
  return (
    <>
      <div className="flex justify-center">
        <Tabs defaultValue={social_media_plateform[0]?.value}>
          <TabsList>
            {social_media_plateform?.map((account, index) => (
            <TabsTrigger key={index} value={account?.value}>{account?.label}</TabsTrigger>
            ))}
          </TabsList>
          {social_media_plateform?.map((account, index) => {
          return (
            <TabsContent key={index} value={account?.value}>
              {account?.value === "facebook" && <FacebookPreviews description={Text} title="Lorem Ipsum Text" image={Images ? Images[0] : undefined} url="https://www.lipsum.com/"/>}
              {account?.value === "instagram" && <Instagram />}
              {account?.value === "twitter" && <Twitter />}
              {account?.value === "Linkedin" && <LinkedIn />}

            </TabsContent>
          );
        })}
        </Tabs>
      </div>
    </>
  );
};
