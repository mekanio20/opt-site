<template>
    <div class="w-full h-full bg-[#fff] text-[#0243BE] font-sans">

        <!-- Header -->
        <header class="bg-[#1E69E2] text-white py-6 shadow-md">
            <div class="container mx-auto px-4">
                <h1 class="text-3xl font-bold">Privacy Policy</h1>
                <p class="text-sm mt-1">Effective Date: <span class="font-medium">{{ new Date().getFullYear() }}</span></p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="container mx-auto px-4 py-10 space-y-10 text-black">

            <!-- Introduction -->
            <section>
                <p class="text-lg">
                    Welcome to our application ("we", "our", or "us"). We are committed to protecting your personal
                    information and your right to privacy.
                    This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you
                    use our application that serves as a
                    digital platform for shopping and selling products within major shopping centers in Turkmenistan.
                </p>
                <p class="mt-4">
                    By using our application, you agree to the terms of this Privacy Policy. If you do not agree, please
                    do not use the application.
                </p>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">1. Information We Collect</h2>
                <p>We collect several types of information from users and sellers in order to provide and improve our
                    services:</p>
                <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li><strong>Personal Information:</strong> Full name, email, phone, location, profile image, payment
                        details, comments, and reviews.</li>
                    <li><strong>Seller Information:</strong> Store details, product listings, videos, promotions, sales
                        history.</li>
                    <li><strong>Device Data:</strong> IP address, OS, session durations, navigation behavior.</li>
                </ul>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">2. How We Use Your Information</h2>
                <ul class="list-disc ml-6 space-y-1">
                    <li>To operate the app and provide services</li>
                    <li>To process orders and payments</li>
                    <li>To display stores, products, and media</li>
                    <li>To allow interaction (likes, comments, reviews)</li>
                    <li>To send notifications and promotional updates</li>
                    <li>To analyze and improve performance</li>
                </ul>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">3. Sharing Your Information</h2>
                <p>We do not sell or rent your personal data. Information may be shared with:</p>
                <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li><strong>Service Providers:</strong> For hosting, payments, analytics.</li>
                    <li><strong>Sellers:</strong> For fulfilling orders.</li>
                    <li><strong>Legal Requirements:</strong> If required by law.</li>
                    <li><strong>Business Transfers:</strong> During mergers or acquisitions.</li>
                </ul>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">4. User-Generated Content</h2>
                <p>All user and seller posts (comments, reviews, videos) are public within the app. You are responsible
                    for what you post.</p>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">5. Your Privacy Rights</h2>
                <p>You may request:</p>
                <ul class="list-disc ml-6 mt-2 space-y-1">
                    <li>Access, correction, or deletion of your data</li>
                    <li>Restriction or objection to data processing</li>
                    <li>Withdrawal of consent</li>
                </ul>
                <p class="mt-2">To make a request, contact us at: <strong>akmuhammed@parlaknesil.com</strong></p>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">6. Data Security</h2>
                <p>We use encryption, access control, and secure protocols to protect your information from unauthorized
                    access and misuse.</p>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">7. Children's Privacy</h2>
                <p>Our app is not intended for children under 13. If we find that we collected data from a child, we
                    will delete it immediately.</p>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">8. Third-Party Services</h2>
                <p>We are not responsible for external websites linked in our app. Their privacy policies apply
                    separately.</p>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">9. Data Retention</h2>
                <p>We retain data only as long as needed for legal, business, and operational purposes. Data is securely
                    deleted afterward.</p>
            </section>

            <!-- Section -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">10. Changes to This Policy</h2>
                <p>We may update this policy. The latest version will always be available in the app with the updated
                    "Effective Date."</p>
            </section>

            <!-- Contact -->
            <section>
                <h2 class="text-2xl font-semibold text-[#1E69E2] mb-2">11. Contact Us</h2>
                <p>If you have any questions, please contact us:</p>
                <ul class="list-none ml-2 mt-2">
                    <li>📧 <strong>Email:</strong>akmuhammed@parlaknesil.com</li>
                    <li>📍 <strong>Address:</strong>Aşgabat ş. Bitarap Türkmenistan şaýoly, 163</li>
                </ul>
            </section>
        </main>

        <!-- Footer -->
        <footer class="bg-[#498BFF] text-white text-center py-4">
            <p>&copy; <span id="year"></span> Your Company Name. All rights reserved.</p>
        </footer>

    </div>
</template>