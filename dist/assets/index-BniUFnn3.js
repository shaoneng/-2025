(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=l(e);fetch(e.href,i)}})();function o(){return`
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
  `}function n(){return`
    <section class="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-5xl font-bold mb-6">
            让考研英语长难句<br/>
            <span class="gradient-text">不再是噩梦</span>
          </h1>
          <p class="text-xl text-gray-600 mb-8">
            基于十余年考研培训经验，独创"五步解析法"<br/>
            已帮助超过50,000名考生提升英语成绩
          </p>
          <div class="flex justify-center gap-4">
            <button class="bg-primary text-white px-8 py-3 rounded-full text-lg hover:bg-blue-700 transition">
              免费试用
            </button>
            <button class="border-2 border-primary text-primary px-8 py-3 rounded-full text-lg hover:bg-blue-50 transition">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  `}function d(){return`
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
  `}function c(){return`
    <section id="how-it-works" class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">使用方法</h2>
        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <div class="absolute left-8 top-0 h-full w-0.5 bg-blue-200"></div>
            <div class="space-y-12">
              <div class="relative flex items-start">
                <div class="absolute left-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-primary">1</span>
                </div>
                <div class="ml-24">
                  <h3 class="text-xl font-semibold mb-2">选择练习内容</h3>
                  <p class="text-gray-600">根据自己的英语水平和目标院校，选择相应难度的长难句练习。</p>
                </div>
              </div>
              <div class="relative flex items-start">
                <div class="absolute left-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-primary">2</span>
                </div>
                <div class="ml-24">
                  <h3 class="text-xl font-semibold mb-2">完成句子分析</h3>
                  <p class="text-gray-600">使用五步解析法，逐步分析句子结构，理解句子含义。</p>
                </div>
              </div>
              <div class="relative flex items-start">
                <div class="absolute left-0 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                  <span class="text-2xl font-bold text-primary">3</span>
                </div>
                <div class="ml-24">
                  <h3 class="text-xl font-semibold mb-2">查看专业解析</h3>
                  <p class="text-gray-600">对比标准答案，了解句子结构分析的关键点和翻译技巧。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `}function u(){return`
    <section id="testimonials" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">学员反馈</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-xl font-bold text-primary">张</span>
              </div>
              <div>
                <h4 class="font-semibold">张同学</h4>
                <p class="text-sm text-gray-500">清华大学 - 计算机系</p>
              </div>
            </div>
            <p class="text-gray-600">"使用这个系统后，我的英语长难句理解能力显著提升。最终考研英语考了82分，顺利考上清华计算机系。"</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-xl font-bold text-primary">李</span>
              </div>
              <div>
                <h4 class="font-semibold">李同学</h4>
                <p class="text-sm text-gray-500">北京大学 - 金融系</p>
              </div>
            </div>
            <p class="text-gray-600">"五步解析法特别实用，让我对长难句不再恐惧。最后英语考了78分，成功考入北大金融系。"</p>
          </div>
          <div class="p-6 bg-gray-50 rounded-xl">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                <span class="text-xl font-bold text-primary">王</span>
              </div>
              <div>
                <h4 class="font-semibold">王同学</h4>
                <p class="text-sm text-gray-500">复旦大学 - 医学院</p>
              </div>
            </div>
            <p class="text-gray-600">"专业的解析方法和丰富的练习题库，帮助我在短时间内提高了英语水平。最终考研英语80分，圆了复旦梦。"</p>
          </div>
        </div>
      </div>
    </section>
  `}function m(){return`
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
  `}function h(){return`
    <section id="faq" class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <h2 class="text-4xl font-bold text-center mb-16">常见问题</h2>
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2">如何开始使用？</h3>
            <p class="text-gray-600">注册账号后即可开始使用基础功能，选择适合自己的会员套餐后可以使用更多高级功能。</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2">能保证提分吗？</h3>
            <p class="text-gray-600">我们的系统基于多年考研培训经验开发，配合学员自身努力，大多数用户都能取得明显进步。</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2">可以更换套餐吗？</h3>
            <p class="text-gray-600">可以随时升级或降级套餐，费用会按实际使用天数计算。</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-6">
            <h3 class="text-lg font-semibold mb-2">有退款保障吗？</h3>
            <p class="text-gray-600">新用户可以享受7天无理由退款，之后如对服务不满意可以随时取消会员。</p>
          </div>
        </div>
      </div>
    </section>
  `}function v(){return`
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
  `}function p(){return`
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" id="levelSelectionModal">
      <div class="bg-white rounded-xl p-8 max-w-2xl w-full mx-4">
        <h3 class="text-2xl font-bold mb-6">选择你的英语水平</h3>
        <div class="grid md:grid-cols-3 gap-4 mb-6">
          <button class="level-btn p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition" data-level="basic">
            <h4 class="font-semibold mb-2">基础水平</h4>
            <p class="text-sm text-gray-600">适合英语基础薄弱的同学</p>
          </button>
          <button class="level-btn p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition" data-level="intermediate">
            <h4 class="font-semibold mb-2">中等水平</h4>
            <p class="text-sm text-gray-600">适合已有一定英语基础的同学</p>
          </button>
          <button class="level-btn p-4 border-2 border-gray-200 rounded-lg hover:border-primary hover:bg-blue-50 transition" data-level="advanced">
            <h4 class="font-semibold mb-2">高级水平</h4>
            <p class="text-sm text-gray-600">适合英语基础扎实的同学</p>
          </button>
        </div>
        <button class="w-full py-3 bg-primary text-white rounded-full hover:bg-blue-700 transition" id="startPractice">
          开始练习
        </button>
      </div>
    </div>
  `}function x(t){return`
    <div class="fixed inset-0 bg-white overflow-y-auto z-50" id="practiceUI">
      <div class="container mx-auto px-4 py-8">
        <div class="max-w-4xl mx-auto">
          <div class="flex justify-between items-center mb-8">
            <h2 class="text-2xl font-bold">长难句练习</h2>
            <button class="text-gray-600 hover:text-gray-800" id="closePractice">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
          
          <div class="bg-blue-50 p-6 rounded-xl mb-8">
            <h3 class="font-semibold mb-4">原句：</h3>
            <p class="text-lg">${t.text}</p>
          </div>

          <div class="space-y-6">
            <div>
              <h3 class="font-semibold mb-4">请尝试分析：</h3>
              <textarea 
                class="w-full h-32 p-4 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary" 
                placeholder="在这里输入你的分析..."
              ></textarea>
            </div>
            
            <button class="bg-primary text-white px-8 py-3 rounded-full hover:bg-blue-700 transition" id="showAnalysis">
              查看专业解析
            </button>

            <div class="hidden" id="analysisResult">
              <div class="bg-white p-6 rounded-xl border-2 border-primary">
                <h4 class="font-semibold mb-4">专业解析：</h4>
                <div class="space-y-4">
                  <div>
                    <h5 class="font-medium mb-2">主干提取：</h5>
                    <p class="text-gray-700">${t.analysis.mainStructure.core}</p>
                  </div>
                  <div>
                    <h5 class="font-medium mb-2">修饰成分：</h5>
                    <ul class="list-disc list-inside space-y-1">
                      ${t.analysis.modifiers.map(s=>`<li>${s.type}：${s.content}（修饰"${s.modifies}"）</li>`).join("")}
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-medium mb-2">语义关系：</h5>
                    <p class="text-gray-700">${t.analysis.semanticRelations}</p>
                  </div>
                  <div>
                    <h5 class="font-medium mb-2">结构化分析：</h5>
                    <p class="text-gray-700">${t.analysis.structuredAnalysis}</p>
                  </div>
                  <div>
                    <h5 class="font-medium mb-2">参考翻译：</h5>
                    <p class="text-gray-700">${t.analysis.translation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `}const b={basic:[{text:"The rapid development of technology has changed the way we live and work.",analysis:{mainStructure:{original:"The rapid development of technology has changed the way we live and work.",core:"The development has changed the way"},modifiers:[{type:"形容词",content:"rapid",modifies:"development"},{type:"介词短语",content:"of technology",modifies:"development"},{type:"定语从句",content:"we live and work",modifies:"the way"}],semanticRelations:"主句说明科技发展带来的改变，从句描述具体改变的方面。",structuredAnalysis:"The (rapid) development (of technology) has changed the way (we live and work)",translation:"科技的快速发展改变了我们生活和工作的方式。"}}],intermediate:[{text:"While many scientists believe that climate change poses a serious threat to our planet, some people remain skeptical about its impact.",analysis:{mainStructure:{original:"While many scientists believe that climate change poses a serious threat to our planet, some people remain skeptical about its impact.",core:"some people remain skeptical"},modifiers:[{type:"让步状语从句",content:"While many scientists believe that climate change poses a serious threat to our planet",modifies:"整个主句"},{type:"介词短语",content:"about its impact",modifies:"skeptical"}],semanticRelations:"让步状语从句表示科学家的观点，主句表示部分人的怀疑态度，形成对比。",structuredAnalysis:"(While many scientists believe (that climate change poses a serious threat to our planet)), some people remain skeptical (about its impact)",translation:"尽管许多科学家认为气候变化对我们的星球构成严重威胁，但一些人仍对其影响持怀疑态度。"}}],advanced:[{text:"The extent to which artificial intelligence will transform various sectors of the economy remains uncertain, though experts predict significant disruption across industries in the coming decades.",analysis:{mainStructure:{original:"The extent to which artificial intelligence will transform various sectors of the economy remains uncertain, though experts predict significant disruption across industries in the coming decades.",core:"The extent remains uncertain"},modifiers:[{type:"定语从句",content:"to which artificial intelligence will transform various sectors of the economy",modifies:"extent"},{type:"让步状语从句",content:"though experts predict significant disruption across industries in the coming decades",modifies:"主句"}],semanticRelations:"主句表达AI影响程度的不确定性，让步从句说明专家预测的颠覆性影响。",structuredAnalysis:"The extent (to which artificial intelligence will transform various sectors of the economy) remains uncertain, (though experts predict significant disruption across industries in the coming decades)",translation:"人工智能将在多大程度上改变经济的各个部门仍不确定，尽管专家预测在未来几十年里它将对各行业产生重大颠覆性影响。"}}]};document.querySelector("#app").innerHTML=`
  ${o()}
  ${n()}
  ${d()}
  ${c()}
  ${u()}
  ${m()}
  ${h()}
  ${v()}
`;document.querySelectorAll("button").forEach(t=>{t.textContent.includes("试用")&&t.addEventListener("click",()=>{document.body.insertAdjacentHTML("beforeend",p()),g()})});function g(){const t=document.getElementById("levelSelectionModal");let s=null;document.querySelectorAll(".level-btn").forEach(l=>{l.addEventListener("click",()=>{document.querySelectorAll(".level-btn").forEach(r=>r.classList.remove("border-primary","bg-blue-50")),l.classList.add("border-primary","bg-blue-50"),s=l.dataset.level})}),document.getElementById("startPractice").addEventListener("click",()=>{if(!s){alert("请先选择难度等级！");return}t.remove();const l=b[s][0];document.body.insertAdjacentHTML("beforeend",x(l)),f()})}function f(){const t=document.getElementById("practiceUI");document.getElementById("closePractice").addEventListener("click",()=>{t.remove()}),document.getElementById("showAnalysis").addEventListener("click",()=>{document.getElementById("analysisResult").classList.remove("hidden")})}
