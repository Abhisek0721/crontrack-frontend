import { constant } from "../constants";

const TermsAndConditions: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Terms and Conditions for {constant.APP_NAME}</h1>
      <p className="text-gray-700 mb-4">Effective Date: 29-08-2024</p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
        <p className="text-gray-700 mb-2">
          Welcome to {constant.APP_NAME}. These Terms and Conditions ("Terms") govern your
          access to and use of our website (crontrack.com) and services. By
          accessing or using our services, you agree to comply with these Terms.
          If you do not agree with these Terms, please do not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">2. Use of Services</h2>
        <p className="text-gray-700 mb-2">
          <strong>Eligibility:</strong> You must be at least 18 years old and have the
          legal capacity to enter into contracts to use our services.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Account Registration:</strong> To use certain features of {constant.APP_NAME},
          you must register for an account. You are responsible for maintaining
          the confidentiality of your account information and for all activities
          that occur under your account.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>User Conduct:</strong> You agree not to use {constant.APP_NAME} for any unlawful
          or prohibited purposes, including but not limited to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-2">
          <li>Posting or sharing any content that is illegal, harmful, or offensive.</li>
          <li>Violating any intellectual property rights or privacy rights.</li>
          <li>Engaging in any activity that disrupts or interferes with the functioning of our services.</li>
          <li>Attempting to gain unauthorized access to our systems or data.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">3. Content</h2>
        <p className="text-gray-700 mb-2">
          <strong>Your Content:</strong> You retain ownership of any content you post or
          share through {constant.APP_NAME}. By posting content, you grant us a non-exclusive,
          worldwide, royalty-free license to use, display, and distribute your content
          in connection with our services.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Third-Party Content:</strong> {constant.APP_NAME} may include content provided by
          third parties. We do not control or endorse such content and are not
          responsible for its accuracy or legality.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payment</h2>
        <p className="text-gray-700 mb-2">
          <strong>Subscription Plans:</strong> {constant.APP_NAME} offers various subscription plans
          with different features. By subscribing, you agree to pay the fees associated
          with your chosen plan.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Payment Terms:</strong> Subscription fees are billed in advance on a
          [monthly/annual] basis and are non-refundable. You authorize us to charge your
          payment method for the subscription fees and any applicable taxes.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Cancellation:</strong> You may cancel your subscription at any time, but
          no refunds will be provided for any remaining period of your subscription.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property</h2>
        <p className="text-gray-700 mb-2">
          <strong>Ownership:</strong> All content, software, and materials provided on
          {constant.APP_NAME} are owned by us or our licensors and are protected by intellectual
          property laws. You may not reproduce, distribute, or create derivative works
          from our content without our prior written consent.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Trademarks:</strong> The {constant.APP_NAME} name, logo, and any related trademarks
          are our property. You may not use them without our express permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">6. Termination</h2>
        <p className="text-gray-700 mb-2">
          <strong>Termination by You:</strong> You may terminate your account at any time
          by contacting us or using the account termination feature on our website.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Termination by Us:</strong> We may terminate or suspend your account
          without notice if we believe you have violated these Terms or engaged in any
          unlawful activity.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Effect of Termination:</strong> Upon termination, your right to access
          and use our services will immediately cease. Any provisions of these Terms that
          by their nature should survive termination will survive, including intellectual
          property rights, disclaimers, indemnity, and limitations of liability.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">7. Disclaimers and Limitation of Liability</h2>
        <p className="text-gray-700 mb-2">
          <strong>Disclaimer of Warranties:</strong> {constant.APP_NAME} is provided "as is" and "as
          available" without any warranties of any kind, either express or implied. We do
          not guarantee that our services will be uninterrupted, error-free, or secure.
        </p>
        <p className="text-gray-700 mb-2">
          <strong>Limitation of Liability:</strong> To the fullest extent permitted by law,
          we will not be liable for any indirect, incidental, special, or consequential
          damages arising out of or in connection with your use of {constant.APP_NAME}. Our total
          liability to you for any claims arising from these Terms or your use of the
          services will not exceed the amount you paid us in the past [six/twelve] months.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">8. Indemnification</h2>
        <p className="text-gray-700 mb-2">
          You agree to indemnify and hold us harmless from any claims, damages,
          liabilities, and expenses arising out of your use of {constant.APP_NAME} or your violation
          of these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
        <p className="text-gray-700 mb-2">
          These Terms will be governed by and construed in accordance with the laws of
          [Your Jurisdiction], without regard to its conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">10. Changes to These Terms</h2>
        <p className="text-gray-700 mb-2">
          We may update these Terms from time to time. We will notify you of any changes
          by posting the updated Terms on this page. Your continued use of {constant.APP_NAME} after
          the changes are posted constitutes your acceptance of the new Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
        <p className="text-gray-700 mb-2">
          If you have any questions or concerns about these Terms, please contact us at:
        </p>
        <ul className="list-none text-gray-700">
          <li>Email: Abhishek0721@gmail.com, rahulkumarkudra2004@gmail.com</li>
          {/* <li>Address: [Insert Mailing Address]</li> */}
        </ul>
      </section>
    </div>
  );
};

export default TermsAndConditions;
