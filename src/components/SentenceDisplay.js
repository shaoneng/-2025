export function renderSentenceAnalysis(analysis) {
  return `
    <div class="space-y-6">
      <div class="bg-white p-6 rounded-lg shadow-sm">
        <h4 class="font-bold text-lg mb-3">原句</h4>
        <p class="text-gray-800">${analysis.mainStructure.original}</p>
      </div>

      <div class="bg-blue-50 p-6 rounded-lg">
        <h4 class="font-bold text-lg mb-4">专业分析</h4>
        
        <div class="space-y-4">
          <div>
            <h5 class="font-semibold mb-2">主干提取</h5>
            <p class="text-gray-700">${analysis.mainStructure.core}</p>
          </div>

          <div>
            <h5 class="font-semibold mb-2">修饰成分分解</h5>
            <ul class="list-disc list-inside space-y-1 text-gray-700">
              ${analysis.modifiers.map(m => 
                `<li>${m.type}：${m.content}（修饰"${m.modifies}"）</li>`
              ).join('')}
            </ul>
          </div>

          <div>
            <h5 class="font-semibold mb-2">语义关系说明</h5>
            <p class="text-gray-700">${analysis.semanticRelations}</p>
          </div>

          <div>
            <h5 class="font-semibold mb-2">最终结构化分析</h5>
            <p class="text-gray-700">${analysis.structuredAnalysis}</p>
          </div>

          <div>
            <h5 class="font-semibold mb-2">中文翻译</h5>
            <p class="text-gray-700">${analysis.translation}</p>
          </div>
        </div>
      </div>
    </div>
  `;
}