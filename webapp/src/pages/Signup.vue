<template>
  <main class="bg-white">

    <div class="relative md:flex">

      <!-- Content -->
      <div class="md:w-1/2">
        <div class="max-w-sm mx-auto min-h-screen flex flex-col justify-center px-4 py-8">

          <div class="w-full">
            <h1 class="text-3xl text-gray-800 font-bold mb-6">Create your Account ✨</h1>
            <!-- Form -->
            <form>
              <div class="space-y-4">
                <div>
                  <label class="block text-sm font-medium mb-1" for="email">Email Address <span class="text-red-500">*</span></label>
                  <input id="email" class="form-input w-full" type="email" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="name">Full Name <span class="text-red-500">*</span></label>
                  <input id="name" class="form-input w-full" type="name" />
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="role">Your Role <span class="text-red-500">*</span></label>
                  <select id="role" class="form-select w-full">
                    <option>Designer</option>
                    <option>Developer</option>
                    <option>Accountant</option>
                  </select>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="password">Password</label>
                  <input id="password" class="form-input w-full" type="password" autoComplete="on" />
                </div>
              </div>
              <div class="flex items-center justify-between mt-6">
                <div class="mr-1">
                  <label class="flex items-center">
                    <input type="checkbox" class="form-checkbox" />
                    <span class="text-sm ml-2">Email me about product news.</span>
                  </label>
                </div>
                <router-link class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3 whitespace-nowrap" to="/">Sign Up</router-link>
              </div>
            </form>
            <!-- Footer -->
            <div class="pt-5 mt-6 border-t border-gray-200">
              <div class="text-sm">
                Have an account? <router-link class="font-medium text-indigo-500 hover:text-indigo-600" to="/signin">Sign In</router-link>
              </div>
            </div>
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
  name: 'Signup',
}
</script>