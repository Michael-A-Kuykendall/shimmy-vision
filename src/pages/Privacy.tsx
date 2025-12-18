import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Privacy = () => {
  const lastUpdated = "December 16, 2025";

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link to="/">
          <Button variant="ghost" className="text-white mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Home
          </Button>
        </Link>

        <Card className="bg-white/10 backdrop-blur border-white/20">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-white">
              Privacy Policy
            </CardTitle>
            <p className="text-gray-300">Last updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-gray-200">
            <h2 className="text-xl font-semibold text-white mt-6">1. Introduction</h2>
            <p>
              This Privacy Policy describes how Shimmy Vision ("we", "us", or "our") 
              collects, uses, and protects information when you use our software and 
              services ("Service"). We are committed to protecting your privacy and 
              being transparent about our data practices.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">2. Our Privacy Commitment</h2>
            <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-4 my-4">
              <p className="text-green-300 font-semibold">
                🔒 Shimmy Vision is a local-first application. Your images are processed 
                entirely on your device and are NEVER transmitted to our servers or any 
                third party.
              </p>
            </div>

            <h2 className="text-xl font-semibold text-white mt-6">3. Information We Collect</h2>
            
            <h3 className="text-lg font-semibold text-white mt-4">3.1 Information You Provide</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Account Information:</strong> Email address, name (optional), and payment information when you purchase a license</li>
              <li><strong>Support Requests:</strong> Information you provide when contacting us for support</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">3.2 Information Collected Automatically</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>License Validation:</strong> When validating your license, we receive your license key and a request timestamp. No image data is transmitted.</li>
              <li><strong>Usage Metrics:</strong> We may collect anonymous aggregate usage statistics (e.g., total API calls) for capacity planning. Individual images are never transmitted.</li>
            </ul>

            <h3 className="text-lg font-semibold text-white mt-4">3.3 Information We Do NOT Collect</h3>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Your images or screenshots</li>
              <li>OCR text results or extracted content</li>
              <li>URLs you process</li>
              <li>File system information</li>
              <li>Browsing history</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">4. How We Use Your Information</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>License Delivery:</strong> To send you your license key and important product updates</li>
              <li><strong>Payment Processing:</strong> To process purchases and manage subscriptions (via Stripe)</li>
              <li><strong>License Validation:</strong> To verify your license is valid when you use the Service</li>
              <li><strong>Support:</strong> To respond to your inquiries and provide technical assistance</li>
              <li><strong>Service Improvement:</strong> To improve our products based on aggregate usage patterns</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">5. Third-Party Services</h2>
            <p>We use the following third-party services:</p>
            
            <h3 className="text-lg font-semibold text-white mt-4">5.1 Stripe (Payment Processing)</h3>
            <p>
              Stripe processes all payments and stores payment information securely. 
              We do not store your full credit card number. See{" "}
              <a href="https://stripe.com/privacy" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">
                Stripe's Privacy Policy
              </a>.
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">5.2 Keygen (License Management)</h3>
            <p>
              Keygen manages license key generation and validation. They store license 
              keys and associated metadata (email, subscription status). See{" "}
              <a href="https://keygen.sh/privacy" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">
                Keygen's Privacy Policy
              </a>.
            </p>

            <h3 className="text-lg font-semibold text-white mt-4">5.3 Cloudflare (Infrastructure)</h3>
            <p>
              Cloudflare provides infrastructure for our webhook endpoints. They may 
              process request metadata. See{" "}
              <a href="https://www.cloudflare.com/privacypolicy/" className="text-purple-400 hover:text-purple-300" target="_blank" rel="noopener noreferrer">
                Cloudflare's Privacy Policy
              </a>.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">6. Data Retention</h2>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Account Data:</strong> Retained as long as your account is active</li>
              <li><strong>License Data:</strong> Retained as long as your license is valid</li>
              <li><strong>Payment Records:</strong> Retained as required by law (typically 7 years)</li>
              <li><strong>Support Correspondence:</strong> Retained for 2 years after resolution</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">7. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect 
              your personal information:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>All API communications use TLS 1.2+ encryption</li>
              <li>License validation uses Ed25519 cryptographic signatures</li>
              <li>Payment processing is PCI-DSS compliant (via Stripe)</li>
              <li>Access to customer data is restricted to authorized personnel</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">8. Your Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Access:</strong> Request a copy of your personal data</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal data</li>
              <li><strong>Portability:</strong> Request your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain processing activities</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, contact us at{" "}
              <a href="mailto:privacy@shimmy.dev" className="text-purple-400 hover:text-purple-300">
                privacy@shimmy.dev
              </a>.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">9. International Transfers</h2>
            <p>
              Your information may be transferred to and processed in countries other 
              than your own. We ensure appropriate safeguards are in place for such 
              transfers in accordance with applicable data protection laws.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">10. Children's Privacy</h2>
            <p>
              Our Service is not directed to children under 13. We do not knowingly 
              collect personal information from children under 13. If you believe we 
              have collected such information, please contact us immediately.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you 
              of any changes by posting the new Privacy Policy on this page and updating 
              the "last updated" date. Material changes will be communicated via email.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">12. Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy or our data practices, 
              please contact us at:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Email:{" "}
                <a href="mailto:privacy@shimmy.dev" className="text-purple-400 hover:text-purple-300">
                  privacy@shimmy.dev
                </a>
              </li>
              <li>
                General Support:{" "}
                <a href="mailto:support@shimmy.dev" className="text-purple-400 hover:text-purple-300">
                  support@shimmy.dev
                </a>
              </li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">13. California Privacy Rights (CCPA)</h2>
            <p>
              California residents have additional rights under the CCPA, including the 
              right to know what personal information is collected and how it's used, 
              the right to delete personal information, and the right to opt-out of 
              the sale of personal information. We do not sell personal information.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">14. European Privacy Rights (GDPR)</h2>
            <p>
              If you are in the European Economic Area (EEA), you have rights under 
              GDPR including access, rectification, erasure, restriction, data portability, 
              and objection. Our legal basis for processing is typically contract performance 
              (license fulfillment) or legitimate interests (service improvement).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Privacy;
