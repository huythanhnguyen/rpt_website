<script setup>
import { ref, onMounted } from 'vue';

// Demo state
const messages = ref([
  {
    role: 'system',
    content: 'Hello! I\'m RPT\'s AI Agent demo using A2A technology. How can I help you today?'
  }
]);

const userInput = ref('');
const isLoading = ref(false);
const agentMessageDelay = 1500; // Simulated delay for agent response in ms

// Chat window ref for auto-scrolling
const chatContainer = ref(null);

// Send message function
const sendMessage = () => {
  if (!userInput.value.trim()) return;
  
  // Add user message to chat
  messages.value.push({
    role: 'user',
    content: userInput.value
  });
  
  // Clear input and scroll to bottom
  const userMessage = userInput.value;
  userInput.value = '';
  scrollToBottom();
  
  // Show agent is typing
  isLoading.value = true;
  
  // Simulate agent processing with A2A tech
  setTimeout(() => {
    // Demo responses based on A2A concept
    let response = '';
    
    if (userMessage.toLowerCase().includes('a2a') || userMessage.toLowerCase().includes('agent to agent')) {
      response = 'A2A (Agent to Agent) is our proprietary protocol that enables AI systems to communicate seamlessly with each other. It establishes standardized formats, message routing, and negotiation frameworks that allow specialized AI agents to collaborate on complex tasks while maintaining human oversight.';
    } 
    else if (userMessage.toLowerCase().includes('mcp') || userMessage.toLowerCase().includes('model context')) {
      response = 'The Model Context Protocol (MCP) is our solution for efficient context management between AI models. It optimizes how context is compressed, transferred, and preserved across different agents and conversation sessions, enabling more complex workflows and better preservation of important information.';
    }
    else if (userMessage.toLowerCase().includes('how') && userMessage.toLowerCase().includes('work')) {
      response = 'Behind the scenes, this demo is using a simplified version of our A2A framework. When you ask a question, it\'s routed through multiple specialized agents - an intent classifier, a knowledge retriever, and a response generator - all coordinating to produce the final response you see. In a full implementation, dozens of agents can work together on complex tasks.';
    }
    else if (userMessage.toLowerCase().includes('hello') || userMessage.toLowerCase().includes('hi')) {
      response = 'Hello! I\'m demonstrating RPT\'s A2A technology. You can ask me about A2A, MCP, or how our technology works!';
    }
    else {
      response = 'I\'m a limited demo of RPT\'s A2A technology. In a full implementation, your query would be routed to the appropriate specialized agents that would collaborate to provide a comprehensive answer. Try asking about A2A, MCP, or how our technology works!';
    }
    
    // Add agent response
    messages.value.push({
      role: 'system',
      content: response
    });
    
    // Hide loading and scroll to bottom
    isLoading.value = false;
    scrollToBottom();
  }, agentMessageDelay);
};

// Auto-scroll chat to bottom
const scrollToBottom = () => {
  setTimeout(() => {
    if (chatContainer.value) {
      chatContainer.value.scrollTop = chatContainer.value.scrollHeight;
    }
  }, 100);
};

// Handle Enter key
const handleKeyDown = (e) => {
  if (e.key === 'Enter' && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
};

// Initial scroll to bottom when component mounts
onMounted(() => {
  scrollToBottom();
});
</script>

<template>
  <div class="demo-page py-12 md:py-20">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="heading-2 mb-6">Experience RPT's A2A Technology</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            This interactive demo showcases a simplified version of our Agent-to-Agent communication protocol. 
            Try asking about A2A, MCP, or how the technology works behind the scenes.
          </p>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg overflow-hidden">
          <!-- Chat Header -->
          <div class="bg-primary-900 text-white p-4 flex items-center space-x-2">
            <div class="w-3 h-3 rounded-full bg-green-500"></div>
            <span class="font-medium">RPT A2A Demo</span>
          </div>
          
          <!-- Chat Messages -->
          <div 
            ref="chatContainer"
            class="p-4 h-96 overflow-y-auto space-y-4"
          >
            <div 
              v-for="(message, index) in messages" 
              :key="index" 
              class="flex"
              :class="message.role === 'user' ? 'justify-end' : 'justify-start'"
            >
              <div 
                class="max-w-3/4 rounded-xl p-3"
                :class="message.role === 'user' 
                  ? 'bg-primary-100 text-primary-900' 
                  : 'bg-gray-100 text-gray-800'"
              >
                {{ message.content }}
              </div>
            </div>
            
            <!-- Loading indicator -->
            <div v-if="isLoading" class="flex justify-start">
              <div class="bg-gray-100 text-gray-800 rounded-xl p-3 flex items-center space-x-2">
                <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce"></div>
                <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0.2s"></div>
                <div class="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style="animation-delay: 0.4s"></div>
              </div>
            </div>
          </div>
          
          <!-- Input Area -->
          <div class="border-t p-4 flex items-center space-x-2">
            <textarea
              v-model="userInput"
              class="flex-grow resize-none border rounded-lg p-2 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 focus:outline-none h-12"
              placeholder="Type your message here..."
              rows="1"
              @keydown="handleKeyDown"
            ></textarea>
            <button 
              @click="sendMessage"
              class="btn-primary p-2 rounded-lg"
              :disabled="isLoading || !userInput.trim()"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>
        
        <div class="mt-10 bg-gray-50 rounded-xl p-6 border border-gray-200">
          <h2 class="text-xl font-bold mb-4">About This Demo</h2>
          <p class="text-gray-700 mb-4">
            This is a simplified demonstration of RPT's A2A technology. In a full implementation, 
            queries are processed by a network of specialized AI agents that collaborate to handle complex tasks.
          </p>
          <p class="text-gray-700">
            The A2A protocol enables these agents to communicate efficiently, share context, and coordinate 
            their work while maintaining human oversight and alignment with user goals.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
