export function renderHeader() {
  return `
    <header class="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <nav class="container mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          <div class="text-2xl font-bold gradient-text">考研英语助手</div>
          <div class="hidden md:flex space-x-8">
            <a href="#features" class="text-gray-700 hover:text-primary">核心功能</a>
            <a href="#how-it-works" class="text-gray-700 hover:text-primary">使用方法</a>
            <a href="#testimonials" class="text-gray-700 hover:text-primary">学员反馈</a>
            <a href="#pricing" class="text-gray-700 hover:text-primary">会员价格</a>
            <a href="#faq" class="text-gray-700 hover:text-primary">常见问题</a>
          </div>
          <button class="bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-700 transition">
            立即体验
          </button>
        </div>
      </nav>
    </header>
  `;
}