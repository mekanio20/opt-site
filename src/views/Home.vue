<template>
    <div
        class="min-h-screen bg-gradient-to-b from-[#1E69E2] via-[#498BFF] to-[#0243BE] flex flex-col items-center p-12">
        <div class="text-white">
            <h1 class="text-5xl font-dmSans font-bold flex items-center justify-center">
                <img src="/logo.svg" alt="Optowoy Logo" class="w-16 h-16 mr-4" /> Optowoy
            </h1>
            <p class="text-lg font-dmSans font-medium mt-6">Интернет-платформа для электронной торговли</p>
        </div>

        <div class="flex flex-wrap justify-center gap-4 my-10">
            <img src="/phone.png" alt="Phone" class="w-[600px] object-cover" />
        </div>

        <div class="flex gap-4">
            <a href="https://play.google.com/store/apps/details?id=com.opto.app&pcampaignid=web_share" target="_blank"
                class="text-white border px-4 py-3 rounded-lg flex items-center gap-2">
                <img src="/google-play.svg" class="w-6 h-6" alt="Google Play" /> Google Play
            </a>
            <a href="https://apps.apple.com/tm/app/optowoy/id6738506606" target="_blank"
                class="text-white border px-4 py-3 rounded-lg flex items-center gap-2">
                <img src="/app-store.svg" class="w-6 h-6" alt="App Store" /> App Store
            </a>
        </div>
    </div>
</template>