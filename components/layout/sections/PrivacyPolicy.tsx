export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-black min-h-screen px-6 sm:px-12 lg:px-24 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-orange-500 mb-6">
          Privacy Policy
        </h1>

        <p className="mb-6 text-gray-700">
          Last updated: Jan 2026
        </p>

        {/* Intro */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            1. Introduction
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Welcome to our EdTech platform. We are committed to protecting the
            privacy of students, educators, and users. This Privacy Policy explains
            how we collect, use, and safeguard your information when you access our
            learning platform, courses, and services.
          </p>
        </section>

        {/* Info Collected */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            2. Information We Collect
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>Personal details (name, email, phone number)</li>
            <li>Student data (course enrollments, progress, quiz results)</li>
            <li>Payment details (processed securely via third-party providers)</li>
            <li>Device and technical data (IP address, browser type)</li>
          </ul>
        </section>

        {/* Usage */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            3. How We Use Your Information
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>To provide personalized learning experiences</li>
            <li>To track course progress and performance</li>
            <li>To communicate updates, assignments, and notifications</li>
            <li>To improve platform features and content</li>
          </ul>
        </section>

        {/* Student Privacy */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            4. Student Privacy & Data Protection
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We take extra care to protect student data. We do not sell personal
            information and ensure that all student records are handled securely
            and confidentially.
          </p>
        </section>

        {/* Cookies */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            5. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We use cookies to enhance user experience, remember preferences,
            and analyze platform usage. You can control cookie settings through
            your browser.
          </p>
        </section>

        {/* Third Party */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            6. Third-Party Services
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We may use third-party tools for payments, analytics, and content
            delivery. These providers have their own privacy policies governing
            how they handle your data.
          </p>
        </section>

        {/* Security */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            7. Data Security
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We implement industry-standard security measures to protect your
            personal and educational data from unauthorized access or misuse.
          </p>
        </section>

        {/* Rights */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            8. Your Rights
          </h2>
          <ul className="list-disc pl-6 text-gray-800 space-y-2">
            <li>Access your personal data</li>
            <li>Request corrections or updates</li>
            <li>Request deletion of your account</li>
          </ul>
        </section>

        {/* Updates */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            9. Changes to This Policy
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We may update this Privacy Policy periodically. Any changes will be
            posted on this page with an updated revision date.
          </p>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            10. Contact Us
          </h2>
          <p className="text-gray-800">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <p className="mt-2 font-medium text-black">
hr@geonixa.com
          </p>
        </section>

      </div>
    </div>
  );
}