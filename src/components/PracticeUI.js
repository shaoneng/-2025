export function renderPracticeUI(sentence) {
  return `
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
            <p class="text-lg">${sentence.text}</p>
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
                    <p class="text-gray-700">${sentence.analysis.mainStructure.core}</p>
                  </div>
                  <div>
                    <h5 class="font-medium mb-2">修饰成分：</h5>
                    <ul class="list-disc list-inside space-y-1">
                      ${sentence.analysis.modifiers.map(m => 
                        `<li>${m.type}：${m.content}（修饰"${m.modifies}"）</li>`
                      ).join('')}
                    </ul>
                  </div>
                  <div>
                    <h5 class="font-medium mb-2">语义关系：</h5>
                    <p class="text-gray-700">${sentence.analysis.semanticRelations}</p>
                  </div>
                  <div>
                    <h5 class="font-medium mb-2">结构化分析：</h5>
                    <p class="text-gray-700">${sentence.analysis.structuredAnalysis}</p>
                  </div>
                  <div>
                    <h5 class="font-medium mb-2">参考翻译：</h5>
                    <p class="text-gray-700">${sentence.analysis.translation}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}