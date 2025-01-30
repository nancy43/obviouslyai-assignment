<template>
  <div class="flex items-center justify-center min-h-screen bg-white">

        <!-- Top Navigation -->
    <div class="absolute top-6 left-8">
      <img src="../assets/Logo_Brandmark_FullColor.svg" alt="Obviously AI Logo" class="h-6" />
    </div>

    <div class="flex flex-col items-center">
      <!-- Top Section -->
      <div class="flex flex-col items-center pb-8">
        <div class="w-[56px] h-[56px] bg-[#FAFAFA] rounded-lg border border-[##E9EAEB] flex items-center justify-center">
          <img src="../assets/users-03.svg" alt="Users Icon" class="w-8 h-8"/>
</div>


        <h2 class="text-[30px] font-semibold leading-[38px] text-center font-inter mt-6">Sign In</h2>
        <p class="text-[16px] font-normal leading-[24px] text-center font-inter text-gray-500 mt-3">Welcome back! Let's get started with AI</p>
      </div>

      <!-- Form Section -->
      <div class="bg-white w-[460px] h-[475px] p-[32px] px-[40px] gap-[24px] rounded-lg border border-gray-300 shadow-lg">
        <form class="space-y-6" @submit.prevent="submitForm">
          <div>
            <label class="text-[14px] font-medium leading-[20px] text-left font-inter text-[#414651]">Email</label>
            <input v-model="email" type="email" placeholder="Enter your email" class="w-[380px] h-[44px] px-[14px] py-[10px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px] font-normal leading-[24px] text-left font-inter text-[#717680] mt-1" />
          </div>
          <div>
            <label class="text-[14px] font-medium leading-[20px] text-left font-inter text-[#414651]">Password</label>
            <input v-model="password" type="password" placeholder="Create a password" class="w-[380px] h-[44px] px-[14px] py-[10px] border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-[16px] font-normal leading-[24px] text-left font-inter text-[#717680] mt-1"/>
          </div>
          <button type="button" class="w-[384px] h-[44px] bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600" @click="navigateToLibrary">Sign In</button>
        </form>

        <div class="flex items-center space-x-2 my-4 mt-6">
          <hr class="w-full border-[#D3D3D3]" />
          <span class="text-[#B9B9B9]">OR</span>
          <hr class="w-full border-[#D3D3D3]" />
        </div>

        <div class="flex flex-col space-y-4 mt-6">
          <button class="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-200">
          <img src="../assets/Google.svg" alt="Users Icon" class="w-6 h-6 mr-3"/> Sign up with Google
          </button>
          <button class="w-full flex items-center justify-center border py-2 rounded-lg hover:bg-gray-200">
            <img src="../assets/Linkedin.svg" alt="Users Icon" class="w-6 h-6 mr-3"/> Sign up with LinkedIn
          </button>
        </div>
      </div>

      <p class="text-center text-gray-500 mt-4">
        Don't have an account? <a href="#" class="text-[#3882FF]">Sign up</a>
      </p>
    </div>
        <!-- Footer -->
        <div class="absolute bottom-6 left-8 text-gray-400 text-sm">
      © Copyrights 2025 by Obviously AI, Inc. All rights reserved.
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();

const submitForm = () => {
  console.log('Submitted:', { email: email.value, password: password.value });
};

const navigateToLibrary = () => {
  router.push('/library');
};

</script>

<style>
@import "tailwindcss/base";
@import "tailwindcss/components";
@import "tailwindcss/utilities";
</style>