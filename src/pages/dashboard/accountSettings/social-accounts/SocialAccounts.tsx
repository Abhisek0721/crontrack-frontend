import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const SocialAccounts = () => {
  const workspaces = [
    {
      name: "Rahul",
      accounts: [
        { name: "Facebook for Posts", icon: "📘", status: "No account connected" },
        { name: "Twitter", icon: "🐦", status: "No account connected" },
        { name: "Instagram", icon: "📸", status: "No account connected" },
        { name: "Pinterest", icon: "📌", status: "No account connected" },
        { name: "LinkedIn", icon: "🔗", status: "No account connected" },
        { name: "Google Business Profile", icon: "📍", status: "No account connected" },
        { name: "YouTube", icon: "🎥", status: "No account connected" },
        { name: "Snapchat", icon: "👻", status: "No account connected" },
      ],
    },
    // You can add more workspaces here.
  ];

  return (
    <div className="p-4 max-w-3xl mx-auto">
      <Accordion type="single" collapsible>
        {workspaces.map((workspace, index) => (
          <AccordionItem key={index} value={workspace.name}>
            <AccordionTrigger className="text-xl font-bold">
              {workspace.name}
            </AccordionTrigger>
            <AccordionContent>
              <div className="border rounded-md">
                <div className="grid grid-cols-3 p-4 font-semibold bg-gray-100">
                  <div>Social Accounts</div>
                  <div>Status</div>
                  <div>Actions</div>
                </div>
                {workspace.accounts.map((account, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-3 items-center px-4 py-2 border-b"
                  >
                    <div className="flex items-center gap-2">
                      <span>{account.icon}</span>
                      <span>{account.name}</span>
                    </div>
                    <div>{account.status}</div>
                    <div>
                      <Button variant="outline" size="sm">
                        Connect
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default SocialAccounts;
