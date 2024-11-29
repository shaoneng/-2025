export function renderHero() {
  return `
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
  `;
}