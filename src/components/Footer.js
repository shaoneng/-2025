export function renderFooter() {
  return `
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto px-6">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 class="text-xl font-bold mb-4">考研英语助手</h4>
            <p class="text-gray-400">
              专注于帮助考研学子提升英语能力，让你的考研之路更轻松。
            </p>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">快速链接</h4>
            <ul class="space-y-2">
              <li><a href="#features" class="text-gray-400 hover:text-white">核心功能</a></li>
              <li><a href="#pricing" class="text-gray-400 hover:text-white">会员价格</a></li>
              <li><a href="#testimonials" class="text-gray-400 hover:text-white">学员反馈</a></li>
              <li><a href="#faq" class="text-gray-400 hover:text-white">常见问题</a></li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">联系我们</h4>
            <ul class="space-y-2">
              <li class="text-gray-400">邮箱：bourneliu66@gmail.com</li>
              <li class="text-gray-400">工作时间：周一至周日 9:00-21:00</li>
            </ul>
          </div>
          <div>
            <h4 class="text-lg font-semibold mb-4">关注我们</h4>
            <div class="flex space-x-4">
              <a href="#" class="text-gray-400 hover:text-white">
                <span class="sr-only">微信</span>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8.667 15.373c-0.838 0-1.517-0.679-1.517-1.517s0.679-1.517 1.517-1.517c0.838 0 1.517 0.679 1.517 1.517s-0.679 1.517-1.517 1.517zM15.333 15.373c-0.838 0-1.517-0.679-1.517-1.517s0.679-1.517 1.517-1.517c0.838 0 1.517 0.679 1.517 1.517s-0.679 1.517-1.517 1.517z"></path>
                  <path d="M23.5 12.373c0-6.617-5.383-12-12-12s-12 5.383-12 12c0 6.617 5.383 12 12 12s12-5.383 12-12zM17.333 16.873c-1.367 0.733-3.067 1.233-4.833 1.233-1.767 0-3.467-0.5-4.833-1.233-2.9-1.567-4.667-4.233-4.667-7.167 0-4.567 4.267-8.333 9.5-8.333s9.5 3.767 9.5 8.333c0 2.933-1.767 5.6-4.667 7.167z"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div class="border-t border-gray-800 pt-8">
          <p class="text-center text-gray-400">© 2024 考研英语助手. All rights reserved.</p>
        </div>
      </div>
    </footer>
  `;
}