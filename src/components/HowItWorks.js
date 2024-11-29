export function renderHowItWorks() {
  return `
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
  `;
}