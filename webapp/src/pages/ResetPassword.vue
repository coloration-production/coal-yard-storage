<template>
  <main class="bg-white">

    <div class="relative md:flex">

      <!-- Content -->
      <div class="md:w-1/2">
        <div class="max-w-sm mx-auto min-h-screen flex flex-col justify-center px-4 py-8">

          <div class="w-full">
            <h1 class="text-3xl text-gray-800 font-bold mb-6">Reset your Password ✨</h1>
            <!-- Form -->
            <form>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email Address <span class="text-red-500">*</span></label>
                  <input id="email" class="form-input w-full" type="email" />
                </div>
              </div>
              <div class="flex justify-end mt-6">
                <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white whitespace-nowrap">Send Reset Link</button>
              </div>
            </form>
          </div>

        </div>
      </div>

      <!-- Image -->
      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">
        <img class="object-cover object-center w-full h-full" src="../images/auth-image.jpg" width="760" height="1024" alt="Authentication" />
        <img class="absolute top-1/4 left-0 transform -translate-x-1/2 ml-8" src="../images/auth-decoration.png" width="218" height="224" alt="Authentication decoration" />
      </div>

    </div>

  </main>
</template>

<script>

export default {
  name: 'ResetPassword',
}
</script>