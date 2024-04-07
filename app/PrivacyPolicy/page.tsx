import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-violet-600 mb-4">Privacy Policy</h1>
            <div className="prose text-gray-800">
                <p>Passion Theater respects your privacy and is committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and disclose information when you use our app.</p>

                <h2 className="text-violet-600">Information We Collect</h2>
                <p>We may collect personal information such as your name, email address, and payment details when you sign up for an account or make purchases through the app. We also collect non-personal information such as device information, log data, and cookies to improve our services and enhance your experience.</p>

                <h2 className="text-violet-600">How We Use Your Information</h2>
                <p>We use your personal information to provide and personalize our services, communicate with you, process payments, and improve our app. We may also use non-personal information for analytics, advertising, and security purposes.</p>

                <h2 className="text-violet-600">Information Sharing</h2>
                <p>We do not sell, trade, or rent your personal information to third parties. However, we may share your information with trusted service providers who assist us in operating our app, conducting business, or servicing you, as long as those parties agree to keep this information confidential.</p>

                <h2 className="text-violet-600">Security</h2>
                <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. However, no method of transmission over the internet or electronic storage is 100% secure, so we cannot guarantee absolute security.</p>

                <h2 className="text-violet-600">Changes to This Policy</h2>
                <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of the app after the changes have been made will signify your acceptance of the updated policy.</p>

                <h2 className="text-violet-600">Contact Us</h2>
                <p>If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:privacy@passiontheater.com" className="text-violet-600 hover:underline">privacy@passiontheater.com</a>.</p>
            </div>
        </div>
    )
}

export default page