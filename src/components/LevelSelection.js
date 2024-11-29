export function renderLevelSelection() {
  return `
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
  `;
}