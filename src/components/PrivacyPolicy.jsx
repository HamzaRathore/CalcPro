import React from "react";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-blue-600 hover:underline hover:cursor-pointer"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">Privacy Policy</h1>

      <p className="text-gray-600 mb-6">
        At CalPro, your privacy is extremely important to us. This policy
        outlines what information we collect, how we use it, and the choices you
        have. By using our website, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">1. Information We Collect</h2>
      <p className="text-gray-600 mb-4">
        We do not collect personal information such as your name, email address,
        phone number, or financial data. Our calculators are designed to run
        completely on your device (client-side), meaning your inputs stay private
        and are never transmitted to any server.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">2. Usage Data</h2>
      <p className="text-gray-600 mb-4">
        We may collect non-identifiable, aggregated usage statistics (e.g. page
        visits, time spent on the site, button clicks) to understand how our
        services are being used and improve user experience. This data is completely
        anonymous and cannot be linked to any individual user.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">3. Cookies</h2>
      <p className="text-gray-600 mb-4">
        Cookies are small text files stored on your device to enhance functionality.
        CalPro may use cookies to remember your preferences, keep track of session
        states, or enable certain features. You may disable cookies via your
        browser settings; however, this may affect some site functionality.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">4. Third-Party Services</h2>
      <p className="text-gray-600 mb-4">
        To improve our website, we may use trusted analytics tools like Google
        Analytics or Microsoft Clarity. These services help us gather insights on
        usage patterns without identifying individual users. They may collect
        data such as your IP address, browser type, or device model—but no personal
        identifiers. We ensure these tools comply with industry privacy standards.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">5. Data Security</h2>
      <p className="text-gray-600 mb-4">
        Although we do not store personal data, we are committed to maintaining
        a secure environment by using HTTPS encryption and following best practices
        to prevent any unauthorized access to our site or user activity.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">6. Children’s Privacy</h2>
      <p className="text-gray-600 mb-4">
        CalPro does not knowingly collect or solicit data from children under the
        age of 13. If we learn that a child has provided us with personal information,
        we will delete it immediately. Parents or guardians concerned about a child's
        use of our site should contact us.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">7. Changes to This Policy</h2>
      <p className="text-gray-600 mb-4">
        We may update this privacy policy from time to time to reflect changes
        in technology, legal requirements, or our services. When we do, we will
        revise the "Effective Date" below. Continued use of our services means
        you accept the changes.
      </p>

      

      <p className="text-sm text-gray-500 mt-10">Effective Date: June 23, 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
