export default function PrivacyPolicy() {
  return (
    <div className="bg-white text-black min-h-screen px-6 sm:px-12 lg:px-24 py-12">
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-4xl font-bold text-orange-500 mb-4">
          Privacy Policy
        </h1>

        <p className="text-gray-700 mb-6">
          Last updated: Jan 2026
        </p>

        {/* Intro */}
        <p className="text-gray-800 leading-relaxed mb-8">
          At <span className="font-semibold">Geonixa (Geonixa Learning Private Limited) </span> 
           ("we", "our", "us"), we are fully committed to safeguarding your privacy and 
          ensuring that your experience on our website and with our services remains secure 
          and trustworthy. This Privacy Policy explains how we collect, use, and protect 
          your personal information.
        </p>

        {/* Section 1 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We collect both personal and non-personal information from users who interact 
            with our website and services. Personal information may include your name, 
            email address, phone number, educational qualifications, location, and resume 
            if it is submitted to us. In addition, we may collect non-personal data such as 
            your IP address, browser type, device information, pages visited, and the time 
            you spend on our site.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            2. How We Use Your Information
          </h2>
          <p className="text-gray-800 leading-relaxed">
            The information we collect is used to provide you with accurate and relevant 
            details about our courses and programs. It also enables us to handle your 
            registration and payment processes efficiently, send you important updates, 
            improve the functionality and performance of our website, and deliver promotional 
            offers—though we will only send these marketing messages if you have given your consent.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            3. Data Sharing & Disclosure
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We do not sell or rent your personal data under any circumstances. However, 
            we may share your information with trusted service providers such as payment 
            gateways and cloud hosting providers to facilitate our services. If required 
            by law, we may also disclose your data to governmental or legal authorities. 
            Furthermore, we may share information with partner universities, but only if 
            you have explicitly agreed to it.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            4. Cookies & Tracking Technologies
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Our website uses cookies and other tracking technologies to enhance your 
            browsing experience, analyze web traffic, and tailor content to your preferences. 
            You have the option to manage or disable cookies at any time through your browser settings.
          </p>
        </section>

        {/* Section 5 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            5. Data Security
          </h2>
          <p className="text-gray-800 leading-relaxed">
            To protect your data, we use industry-standard security measures. These include 
            encrypted data transfers through SSL, secure servers, and routine audits to 
            detect and resolve any potential vulnerabilities.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            6. Your Rights
          </h2>
          <p className="text-gray-800 leading-relaxed">
            As a user, you have certain rights regarding your personal information. You may 
            request access to the data we hold about you, ask us to correct or delete it, 
            withdraw previously given consent, and opt out of receiving marketing communications 
            at any time. To exercise these rights, you can contact us at{" "}
            <span className="font-medium">support@unlox.com</span>.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            7. Third-Party Links
          </h2>
          <p className="text-gray-800 leading-relaxed">
            Our website may contain links to third-party websites. We are not responsible 
            for the privacy practices or content of those external sites.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            8. Updates to This Policy
          </h2>
          <p className="text-gray-800 leading-relaxed">
            We may update this Privacy Policy from time to time to reflect changes in our 
            practices or for legal and regulatory reasons. Any updates will be published 
            on this page along with the revised date.
          </p>
        </section>

        {/* Section 9 */}
        <section>
          <h2 className="text-2xl font-semibold text-orange-500 mb-3">
            9. Contact Us
          </h2>
          <p className="text-gray-800 leading-relaxed">
            If you have any questions about this Privacy Policy or how we handle your data, 
            please contact us:
          </p>

          <div className="mt-3 space-y-1">
            <p className="font-medium">Geonixa</p>
            <p className="text-gray-800">Email: hr@geonixa.com</p>
          </div>
        </section>

      </div>
    </div>
  );
}