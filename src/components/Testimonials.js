export function renderTestimonials() {
  return `
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
  `;
}