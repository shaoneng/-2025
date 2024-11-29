export function renderFAQ() {
  return `
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
  `;
}