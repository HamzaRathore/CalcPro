import React from "react";
import { useNavigate } from "react-router-dom";

const TermsAndCondition = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-12 px-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-blue-600 hover:underline hover:cursor-pointer"
      >
        ← Back
      </button>

      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Terms and Conditions
      </h1>

      <p className="text-gray-600 mb-6">
        Welcome to CalPro. These Terms and Conditions ("Terms") govern your use
        of our website and services. By accessing or using any part of our site,
        you agree to be bound by these Terms. If you disagree with any part of
        the terms, please do not use our services.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        1. Use of Calculators
      </h2>
      <p className="text-gray-600 mb-4">
        CalPro offers calculators and tools for financial, health, and daily
        life estimations. These tools are for **informational and educational
        purposes only**. Results should not be considered a substitute for
        professional advice (e.g., medical, legal, or financial).
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        2. User Responsibilities
      </h2>
      <p className="text-gray-600 mb-4">
        You are responsible for the accuracy of the data you enter and how you
        choose to interpret the results. CalPro will not be held liable for any
        consequences resulting from misuse or misunderstanding of calculator
        outputs.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        3. Intellectual Property
      </h2>
      <p className="text-gray-600 mb-4">
        All content on this website—including calculators, designs, graphics,
        logos, and code—is the **intellectual property of CalPro**. Reproduction,
        distribution, or use of any content without prior written consent is
        strictly prohibited.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        4. Changes to Services
      </h2>
      <p className="text-gray-600 mb-4">
        We may modify or discontinue any part of our service or calculators at
        any time without notice. It is your responsibility to review the most
        recent version of the Terms, which will be posted on this page.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        5. External Links
      </h2>
      <p className="text-gray-600 mb-4">
        Our site may contain links to third-party websites or services. We do
        not control or take responsibility for their content, privacy policies,
        or practices.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        6. Limitation of Liability
      </h2>
      <p className="text-gray-600 mb-4">
        CalPro and its team shall not be held liable for any **direct, indirect,
        incidental, or consequential damages** resulting from the use or
        inability to use our calculators, content, or website.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        7. Termination
      </h2>
      <p className="text-gray-600 mb-4">
        We reserve the right to terminate or suspend access to our services
        immediately, without notice, for conduct that we believe violates these
        Terms.
      </p>

      <h2 className="text-xl font-semibold text-gray-700 mt-6 mb-2">
        8. Governing Law
      </h2>
      <p className="text-gray-600 mb-4">
        These Terms shall be governed by and construed in accordance with the
        laws of your local jurisdiction, without regard to its conflict of law
        provisions.
      </p>

      <p className="text-sm text-gray-500 mt-10">
        Effective Date: June 23, 2025
      </p>
    </div>
  );
};

export default TermsAndCondition;
