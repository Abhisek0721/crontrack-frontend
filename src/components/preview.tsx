import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { constant } from "../constants";
import  Facebook  from "../socialMediaPreview/facebook";
import { Instagram } from "../socialMediaPreview/instagram";
import { LinkedIn } from "../socialMediaPreview/linkedin";
import { Twitter } from "../socialMediaPreview/twitter";

export const Preview = () => {
    const social_media_plateform = constant?.SOCIAL_MEDIA_PLATEFORM
    
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
              {account?.value === "facebook" && <Facebook content="" profileName="" image=""/>}
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
