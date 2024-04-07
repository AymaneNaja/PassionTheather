import React from 'react'

type Props = {}

function page({ }: Props) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
            <div className="prose">
                <p>{`These Terms of Service ("Terms") govern your access to and use of Passion Theater (the "Service").`}</p>
                <p>{`By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the terms, then you may not access the Service.`}</p>
                <h2>1. Content</h2>
                <p>{`The Service allows you to access and view a variety of movie and TV show content. This content may be provided by third-party licensors, and Passion Theater does not endorse or guarantee the accuracy, completeness, or reliability of any content.`}</p>
                <h2>2. User Accounts</h2>
                <p>To access certain features of the Service, you may be required to create a user account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account.</p>
                <h2>3. Intellectual Property</h2>
                <p>All content and materials available on the Service, including but not limited to text, graphics, logos, images, and audio/video clips, are the property of Passion Theater or its licensors and are protected by copyright and other intellectual property laws.</p>
                <h2>4. Disclaimer</h2>
                <p>{`The Service is provided on an "as is" and "as available" basis, without warranties of any kind, either express or implied. Passion Theater disclaims all warranties, including but not limited to merchantability, fitness for a particular purpose, and non-infringement.`}</p>
                <h2>5. Limitation of Liability</h2>
                <p>Under no circumstances shall Passion Theater be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or in connection with your use of the Service.</p>
                <p>For the full terms and conditions, please refer to the <a href="/privacy-policy" className="text-violet-500 hover:underline">Privacy Policy</a>.</p>
            </div>
        </div>

    )
}

export default page