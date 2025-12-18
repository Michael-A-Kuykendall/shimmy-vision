import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Terms = () => {
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
              Terms of Service
            </CardTitle>
            <p className="text-gray-300">Last updated: {lastUpdated}</p>
          </CardHeader>
          <CardContent className="prose prose-invert max-w-none text-gray-200">
            <h2 className="text-xl font-semibold text-white mt-6">1. Agreement to Terms</h2>
            <p>
              By accessing or using Shimmy Vision ("Service"), you agree to be bound by these 
              Terms of Service ("Terms"). If you disagree with any part of these terms, you 
              do not have permission to access the Service.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">2. Description of Service</h2>
            <p>
              Shimmy Vision is a local-first AI vision processing tool that provides OCR, 
              layout analysis, and image understanding capabilities. The Service processes 
              images locally on your hardware using AI models.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">3. License and Usage</h2>
            <p>
              Upon purchase, you receive a license key that grants you the right to use 
              Shimmy Vision according to your subscription tier:
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li><strong>Developer:</strong> Personal and small project use</li>
              <li><strong>Professional:</strong> Commercial use for individuals and small teams</li>
              <li><strong>Startup:</strong> Commercial use for growing businesses</li>
              <li><strong>Enterprise:</strong> Unlimited commercial use with priority support</li>
              <li><strong>Lifetime:</strong> Perpetual license for personal and commercial use</li>
            </ul>
            <p className="mt-2">
              License keys are non-transferable and may not be shared, resold, or distributed.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">4. Local Processing</h2>
            <p>
              Shimmy Vision processes all images locally on your device. No images are 
              transmitted to external servers for processing. License validation requires 
              periodic internet connectivity but does not transmit your image data.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">5. Payment Terms</h2>
            <p>
              Subscription plans are billed monthly in advance. Lifetime licenses are 
              one-time payments. All payments are processed securely through Stripe.
            </p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Subscriptions automatically renew unless cancelled</li>
              <li>You may cancel at any time from the customer portal</li>
              <li>Cancellations take effect at the end of the billing period</li>
              <li>Refunds are available within 14 days of purchase if the Service does not work as described</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">6. Acceptable Use</h2>
            <p>You agree not to:</p>
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>Reverse engineer, decompile, or disassemble the software</li>
              <li>Share, transfer, or resell your license key</li>
              <li>Use the Service for any illegal purpose</li>
              <li>Attempt to bypass license validation mechanisms</li>
              <li>Use automated systems to abuse the licensing infrastructure</li>
            </ul>

            <h2 className="text-xl font-semibold text-white mt-6">7. Intellectual Property</h2>
            <p>
              Shimmy Vision and its original content, features, and functionality are 
              owned by the developer and are protected by international copyright, 
              trademark, and other intellectual property laws.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">8. Disclaimer of Warranties</h2>
            <p>
              THE SERVICE IS PROVIDED "AS IS" WITHOUT WARRANTY OF ANY KIND, EXPRESS OR 
              IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, 
              FITNESS FOR A PARTICULAR PURPOSE, AND NONINFRINGEMENT. 
            </p>
            <p className="mt-2">
              We do not warrant that the Service will be uninterrupted, timely, secure, 
              or error-free, or that results obtained from the Service will be accurate 
              or reliable.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">9. Limitation of Liability</h2>
            <p>
              IN NO EVENT SHALL THE DEVELOPER BE LIABLE FOR ANY INDIRECT, INCIDENTAL, 
              SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, 
              LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING 
              FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE.
            </p>
            <p className="mt-2">
              Our total liability shall not exceed the amount paid by you for the Service 
              in the twelve (12) months preceding the claim.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">10. Changes to Terms</h2>
            <p>
              We reserve the right to modify or replace these Terms at any time. We will 
              provide notice of any material changes by posting the new Terms on this page 
              and updating the "last updated" date. Your continued use of the Service after 
              any changes constitutes acceptance of the new Terms.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">11. Termination</h2>
            <p>
              We may terminate or suspend your license immediately, without prior notice 
              or liability, for any reason, including breach of these Terms. Upon termination, 
              your right to use the Service will immediately cease.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">12. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws 
              of the United States, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-xl font-semibold text-white mt-6">13. Contact</h2>
            <p>
              If you have any questions about these Terms, please contact us at:{" "}
              <a href="mailto:support@shimmy.dev" className="text-purple-400 hover:text-purple-300">
                support@shimmy.dev
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Terms;
