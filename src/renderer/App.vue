<template>
  <div class="min-h-screen bg-gradient-to-br from-violet-900 via-purple-800 to-indigo-900 flex items-center justify-center p-6 font-sans">
    <div class="container mx-auto bg-black/20 backdrop-blur-xl rounded-3xl shadow-2xl max-w-4xl p-8 border border-white/10">
      <!-- Header Section -->
      <div class="text-center space-y-4 mb-12">
        <h1 class="text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
          Electron + Vue
        </h1>
        <p class="text-gray-300 text-xl hover:text-red-150 font-medium">IPC Communication Demo</p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <!-- Left: Greeting Section -->
        <div class="space-y-6">
          <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
            <h2 class="text-2xl font-semibold text-emerald-400 mb-4">Greeting Panel</h2>
            <div class="space-y-4">
              <input 
                v-model="userName" 
                type="text" 
                placeholder="Enter your name"
                class="w-full bg-black/20 border border-white/20 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-emerald-500 placeholder-gray-400"
              >
              <div class="flex space-x-4">
                <button 
                  @click="sayHi"
                  class="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white py-2 rounded-lg transition-all duration-300 font-medium"
                >
                  Say Hi
                </button>
                <button 
                  @click="sayBye"
                  class="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-2 rounded-lg transition-all duration-300 font-medium"
                >
                  Say Bye
                </button>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Response Section -->
        <div class="bg-white/5 rounded-2xl p-6 border border-white/10">
          <h2 class="text-2xl font-semibold text-cyan-400 mb-4">Response Log</h2>
          <div class="space-y-4">
            <div class="bg-black/30 rounded-lg p-4 max-h-[300px] overflow-y-auto text-gray-300 font-mono text-sm">
              <pre class="whitespace-pre-wrap">{{ responseLog }}</pre>
            </div>
          </div>
        </div>
      </div>

      <!-- Footer Tools -->
      <div class="flex justify-center">
        <button 
          @click="toggleDevTools"
          class="px-6 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all duration-300 border border-white/20 font-medium"
        >
          Toggle DevTools
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const userName = ref('')
const responseLog = ref('')

const appendLog = (message: string) => {
  const timestamp = new Date().toLocaleTimeString()
  responseLog.value = `[${timestamp}] ${message}\n${responseLog.value}`
  // Keep recent 20 logs
  const logLines = responseLog.value.split('\n')
  if (logLines.length > 20) {
    responseLog.value = logLines.slice(0, 20).join('\n')
  }
}

const sayHi = () => {
  if (!userName.value) {
    appendLog('❌ Please enter a name')
    return
  }
  window.helloWorld.hi(userName.value)
  appendLog(`👋 Sent Hi message: ${userName.value}`)
}

const sayBye = async () => {
  if (!userName.value) {
    appendLog('❌ Please enter a name')
    return
  }
  const response = await window.helloWorld.bye(userName.value)
  appendLog(`👋 Received response: ${response}`)
}

const toggleDevTools = async () => {
  await window.helloWorld.toggleDevTools()
  appendLog('🛠 DevTools toggled')
}
</script>

<style>
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
