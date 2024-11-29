export function renderFeatures() {
  return `
    <section id="features" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">为什么选择我们</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">专业解析方法</h3>
            <p class="text-gray-600">独创五步解析法，让你快速掌握长难句结构，提高阅读理解能力。</p>
          </div>
          <div class="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">真题练习</h3>
            <p class="text-gray-600">精选历年考研真题，配套详细解析，让你在实战中提升能力。</p>
          </div>
          <div class="p-6 rounded-xl bg-gray-50 hover:shadow-lg transition">
            <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"/>
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">智能跟踪</h3>
            <p class="text-gray-600">系统自动记录学习进度，针对性推荐练习内容，提高学习效率。</p>
          </div>
        </div>
      </div>
    </section>
  `;
}