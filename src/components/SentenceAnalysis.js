export function analyzeSentence(sentence) {
  return {
    mainStructure: {
      original: sentence,
      core: "The discovery is one of the most important breakthroughs"
    },
    modifiers: [
      {
        type: "定语从句",
        content: "that the brain can generate new cells throughout life",
        modifies: "The discovery"
      },
      {
        type: "地点状语",
        content: "in neuroscience",
        modifies: "breakthroughs"
      },
      {
        type: "时间状语",
        content: "in the past century",
        modifies: "breakthroughs"
      }
    ],
    semanticRelations: "主句说明发现的重要性，定语从句解释发现的具体内容，状语说明发现的领域和时间范围。",
    structuredAnalysis: "The discovery (that the brain can generate new cells throughout life) is one of the most important breakthroughs (in neuroscience) (in the past century)",
    translation: "大脑在整个生命过程中能够产生新细胞的这一发现，是过去一个世纪神经科学领域最重要的突破之一。"
  };
}