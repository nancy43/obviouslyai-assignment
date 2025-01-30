<template>
    <div class="relative min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <!-- Library Modal -->
      <div class="bg-white w-[1267px] h-[813px] p-6 rounded-lg shadow-lg border border-gray-300 flex flex-col">
        <!-- Header with Close Button -->
    <div class="flex flex-col pb-4">
            <div class="flex items-center justify-between">
                <h2 class="text-[24px] font-semibold leading-[32px] text-left font-inter">Library</h2>
                <button @click="closeLibrary" class="text-[#D0D5DD] hover:text-gray-700 text-xl">
                    <img src="/src/assets/cross.svg" alt="Close" class="w-6 h-6" />
                </button>
                </div>
                <p class="text-[16px] font-normal leading-[24px] text-left font-inter text-[#182230]">
                Here is a list of datasets already connected to your Obviously AI account.
                </p>
                <hr class="w-full border-t border-[#E4E7EC] mt-4" />
            </div>
        <!-- Search Bar -->
        <div class="mt-5 relative w-[263px] h-[30px] border border-gray-300 rounded-md flex items-center px-2 py-2">
        <img src="/src/assets/search-lg.svg" alt="Search icon" class="w-4 h-4 text-[#667085]" />
        <input type="text" placeholder="Search" v-model="searchQuery"  class="w-full h-full focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2" />
        </div>
            
        <!-- Table Section with Virtual Scrolling -->
        <div class="mt-3 w-[1219px] h-[548px] overflow-y-auto overflow-x-auto border border-gray-300 rounded-lg">
          <table class="w-full text-left">
            <thead>
                <tr class="text-left text-sm font-medium font-inter">
                    <th class="px-4 py-2 w-[579px] flex items-center gap-2">
                        <label class="flex items-center cursor-pointer">
                            <input type="checkbox" class="hidden peer">
                            <span class="w-5 h-5 flex items-center justify-center border border-[#7F56D9] rounded-md 
                                peer-checked:bg-[#7F56D9] peer-checked:border-[#7F56D9]">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                                </svg>
                            </span>
                        </label>

                    <span>Dataset Name</span>
                    <img src="/src/assets/arrow-down.svg" alt="down arrow" class="w-4 h-4" />
                    </th>
                    <th class="px-4 py-2 w-[132px]">Status</th>
                    <th class="px-4 py-2 w-[198px]">Created at</th>
                    <th class="px-4 py-2 w-[272px]">Created by</th>
                    <th class="px-4 py-2 w-[75px]"></th>
                </tr>
            </thead>
            
            <tbody>
              <tr v-for="dataset in filteredDatasets" :key="dataset.id" class="border-t font-normal text-sm">
                <td class="px-6 py-6 flex items-center gap-2">
                    <label class="flex items-center cursor-pointer">
                        <input type="checkbox" class="hidden peer">
                        <span class="w-5 h-5 flex items-center justify-center border border-[#3882FF] rounded-md peer-checked:bg-[#3882FF] peer-checked:border-[#3882FF]">
                                <svg class="w-3 h-3 text-white" fill="none" stroke="currentColor" stroke-width="3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7"></path>
                            </svg>
                        </span>
                    </label>
                    
                  <img :src="getFileIcon(dataset.name)" alt="file type" class="w-8 h-8">
                  <span>{{ dataset.name }}</span>
                </td>
                
                <td class="px-4 py-2">
                <img :src="getStatusIcon(dataset.status)" :alt="dataset.status" />
                </td>
                <td class="px-4 py-2">{{ dataset.createdAt }}</td>
                <td class="px-4 py-2 w-[272px]">
                <div class="flex flex-col">
                    <span>{{ dataset.createdBy }}</span>
                    <span>{{ dataset.email }}</span>
                </div>
                </td>

                <td class="px-4 py-2">
                  <button @click="deleteDataset(dataset.id)" class="text-red-500 hover:text-red-700">
                    <img src="/src/assets/trash-01.svg" alt="Delete" class="w-4 h-4" />
                </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
        <!-- Navigation Buttons -->
        <div class="flex justify-end mt-4">
  <button class="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2">
    Next
    <img src="/src/assets/rightarrow.svg" alt="right arrow" class="w-4 h-4" />
  </button>
</div>

      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, computed } from 'vue';
  import datasetsData from '../data/datasets'; 
  
  const searchQuery = ref('');
  const datasets = ref(datasetsData);

  const filteredDatasets = computed(() => {
    return datasets.value.filter(dataset =>
      dataset.name.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  });

  const fileIcons = {
    pdf: './src/assets/PDF.svg',
    jpg: './src/assets/JPG.svg',
    mp4: './src/assets/MP4.svg',
    fig: './src/assets/FIG.svg',
    docx: './src/assets/DOCX.svg',
    aep: './src/assets/AEP.svg'
  };

  const statusIcons = {
  Uploaded: './src/assets/success.svg',
  Connected: './src/assets/connected.svg',
  Error: './src/assets/error.svg'
};

const getStatusIcon = (status) => {
  return statusIcons[status] || '/assets/default-status.svg';
};

const getFileIcon = (fileName) => {
  const ext = fileName.split('.').pop().toLowerCase();
  return fileIcons[ext] || '/assets/default.svg';
};
  
  const deleteDataset = (id) => {
    datasets.value = datasets.value.filter(dataset => dataset.id !== id);
  };
  
  const closeLibrary = () => {
    console.log("Close button clicked");
  };
  </script>
  
  <style>
  @import "tailwindcss/base";
  @import "tailwindcss/components";
  @import "tailwindcss/utilities";
  
  </style>
  
