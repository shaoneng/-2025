export function renderPricing() {
  return `
    <section id="pricing" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">会员价格</h2>
        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-4">基础版</h3>
            <div class="text-3xl font-bold mb-4">
              ¥99<span class="text-base font-normal text-gray-500">/月</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                每日10道长难句练习
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                基础解析功能
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                进度跟踪
              </li>
            </ul>
            <button class="w-full py-3 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition">
              开始试用
            </button>
          </div>
          <div class="bg-primary text-white p-8 rounded-xl shadow-lg transform scale-105">
            <div class="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span class="bg-yellow-400 text-primary text-sm font-semibold px-4 py-1 rounded-full">
                最受欢迎
              </span>
            </div>
            <h3 class="text-xl font-semibold mb-4">专业版</h3>
            <div class="text-3xl font-bold mb-4">
              ¥199<span class="text-base font-normal text-blue-200">/月</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                无限量长难句练习
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                高级解析功能
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                智能推荐系统
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                每周在线答疑
              </li>
            </ul>
            <button class="w-full py-3 bg-white text-primary rounded-full hover:bg-blue-50 transition">
              立即开通
            </button>
          </div>
          <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition">
            <h3 class="text-xl font-semibold mb-4">团队版</h3>
            <div class="text-3xl font-bold mb-4">
              ¥299<span class="text-base font-normal text-gray-500">/月</span>
            </div>
            <ul class="space-y-3 mb-8">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                专业版全部功能
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                5人团队账号
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
                专属客服支持
              </li>
            </ul>
            <button class="w-full py-3 bg-gray-100 text-gray-800 rounded-full hover:bg-gray-200 transition">
              联系我们
            </button>
          </div>
        </div>
      </div>
    </section>
  `;
}