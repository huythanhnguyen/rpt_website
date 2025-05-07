<script setup>
import { ref, onMounted, computed } from 'vue';
import { useLanguageStore } from '../stores/language.js';

// Get language store for translations
const languageStore = useLanguageStore();
const { t } = languageStore;

// Demo state
const messages = ref([]);
const userInput = ref('');
const isLoading = ref(false);
const agentMessageDelay = 1500; // Simulated delay for agent response in ms

// Chat window ref for auto-scrolling
const chatContainer = ref(null);

// Initial message with proper language support
const getWelcomeMessage = computed(() => {
  return languageStore.currentLang === 'en' 
    ? 'Hello! I\'m RPT\'s AI Agent demo using A2A technology. How can I help you today?' 
    : 'Xin chào! Tôi là bản demo AI Agent của RPT sử dụng công nghệ A2A. Tôi có thể giúp gì cho bạn hôm nay?';
});

// Initialize messages with welcome message
onMounted(() => {
  messages.value = [
    {
      role: 'system',
      content: getWelcomeMessage.value
    }
  ];
  scrollToBottom();
});

// Watch for language changes and update bot responses if necessary
languageStore.$subscribe((mutation, state) => {
  // If there's only one message (the welcome message), update it
  if (messages.value.length === 1 && messages.value[0].role === 'system') {
    messages.value[0].content = getWelcomeMessage.value;
  }
});

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
    const lang = languageStore.currentLang;
    
    if (userMessage.toLowerCase().includes('a2a') || 
        userMessage.toLowerCase().includes('agent to agent') ||
        (lang === 'vi' && userMessage.toLowerCase().includes('tác tử'))) {
      response = lang === 'en' 
        ? 'A2A (Agent to Agent) is our proprietary protocol that enables AI systems to communicate seamlessly with each other. It establishes standardized formats, message routing, and negotiation frameworks that allow specialized AI agents to collaborate on complex tasks while maintaining human oversight.'
        : 'A2A (Agent to Agent) là giao thức độc quyền của chúng tôi cho phép các hệ thống AI giao tiếp liền mạch với nhau. Nó thiết lập các định dạng chuẩn hóa, định tuyến thông điệp và khung đàm phán cho phép các AI agent chuyên biệt cộng tác trong các nhiệm vụ phức tạp trong khi duy trì sự giám sát của con người.';
    } 
    else if (userMessage.toLowerCase().includes('mcp') || 
             userMessage.toLowerCase().includes('model context') ||
             (lang === 'vi' && userMessage.toLowerCase().includes('ngữ cảnh mô hình'))) {
      response = lang === 'en'
        ? 'The Model Context Protocol (MCP) is our solution for efficient context management between AI models. It optimizes how context is compressed, transferred, and preserved across different agents and conversation sessions, enabling more complex workflows and better preservation of important information.'
        : 'Giao thức Ngữ cảnh Mô hình (MCP) là giải pháp của chúng tôi cho việc quản lý ngữ cảnh hiệu quả giữa các mô hình AI. Nó tối ưu hóa cách nén, chuyển giao và lưu trữ ngữ cảnh giữa các agent khác nhau và các phiên hội thoại, cho phép quy trình làm việc phức tạp hơn và bảo toàn thông tin quan trọng tốt hơn.';
    }
    else if ((userMessage.toLowerCase().includes('how') && userMessage.toLowerCase().includes('work')) ||
             (lang === 'vi' && userMessage.toLowerCase().includes('hoạt động') && userMessage.toLowerCase().includes('như thế nào'))) {
      response = lang === 'en'
        ? 'Behind the scenes, this demo is using a simplified version of our A2A framework. When you ask a question, it\'s routed through multiple specialized agents - an intent classifier, a knowledge retriever, and a response generator - all coordinating to produce the final response you see. In a full implementation, dozens of agents can work together on complex tasks.'
        : 'Đằng sau màn hình, demo này đang sử dụng phiên bản đơn giản hóa của khung A2A của chúng tôi. Khi bạn đặt câu hỏi, nó được định tuyến qua nhiều agent chuyên biệt - một bộ phân loại ý định, một bộ truy xuất kiến thức và một bộ tạo phản hồi - tất cả phối hợp để tạo ra phản hồi cuối cùng mà bạn thấy. Trong triển khai đầy đủ, hàng chục agent có thể làm việc cùng nhau trong các nhiệm vụ phức tạp.';
    }
    else if (userMessage.toLowerCase().includes('hello') || 
             userMessage.toLowerCase().includes('hi') ||
             (lang === 'vi' && (userMessage.toLowerCase().includes('xin chào') || userMessage.toLowerCase().includes('chào')))) {
      response = lang === 'en'
        ? 'Hello! I\'m demonstrating RPT\'s A2A technology. You can ask me about A2A, MCP, or how our technology works!'
        : 'Xin chào! Tôi đang trình diễn công nghệ A2A của RPT. Bạn có thể hỏi tôi về A2A, MCP, hoặc cách công nghệ của chúng tôi hoạt động!';
    }
    else {
      response = lang === 'en'
        ? 'I\'m a limited demo of RPT\'s A2A technology. In a full implementation, your query would be routed to the appropriate specialized agents that would collaborate to provide a comprehensive answer. Try asking about A2A, MCP, or how our technology works!'
        : 'Tôi là bản demo hạn chế về công nghệ A2A của RPT. Trong triển khai đầy đủ, truy vấn của bạn sẽ được định tuyến đến các agent chuyên biệt thích hợp, những agent này sẽ cộng tác để cung cấp câu trả lời toàn diện. Hãy thử hỏi về A2A, MCP, hoặc cách công nghệ của chúng tôi hoạt động!';
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
</script>

<template>
  <div class="demo-page py-12 md:py-20">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12">
          <h1 class="heading-2 mb-6">{{ t.demo.title }}</h1>
          <p class="text-xl text-gray-600 max-w-2xl mx-auto">
            {{ t.demo.subtitle }}
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
              :placeholder="t.demo.inputPlaceholder"
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
          <h2 class="text-xl font-bold mb-4">{{ t.demo.aboutTitle }}</h2>
          <p class="text-gray-700 mb-4">
            {{ t.demo.aboutDescription1 }}
          </p>
          <p class="text-gray-700">
            {{ t.demo.aboutDescription2 }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
