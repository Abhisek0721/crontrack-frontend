const DisconnectSocialMedia: React.FC = () => {
    return (
      <div className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">How to Disconnect a Social Media Account From Crontrack</h1>
        <p className="text-gray-700 mb-4">
          Follow these steps to disconnect a social media account from a specific workspace in Crontrack:
        </p>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Log in to Crontrack</h2>
          <p className="text-gray-700 mb-2">
            Open Crontrack in your browser and log in using your account credentials.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Navigate to Account Settings</h2>
          <p className="text-gray-700 mb-2">
            Click on your profile image or avatar located in the top-right corner of the dashboard. 
            From the dropdown menu, select <strong>Account Settings</strong>.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Access Social Accounts</h2>
          <p className="text-gray-700 mb-2">
            Within the Account Settings menu, go to the <strong>Social Accounts</strong> tab. 
            You will see a list of all workspaces where social media accounts are connected.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Select the Desired Workspace</h2>
          <p className="text-gray-700 mb-2">
            Locate the workspace containing the social media account you want to disconnect. 
            Click on the workspace name to view its list of connected accounts.
          </p>
        </section>
  
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Disconnect the Account</h2>
          <p className="text-gray-700 mb-2">
            Identify the social media account (e.g., Facebook, Instagram) you wish to disconnect. 
            Click the <strong>Disconnect</strong> button next to the account to remove it from the workspace.
          </p>
        </section>
      </div>
    );
  };
  
  export default DisconnectSocialMedia;
  