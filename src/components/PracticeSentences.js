export const sentences = {
  basic: [
    {
      text: "The rapid development of technology has changed the way we live and work.",
      analysis: {
        mainStructure: {
          original: "The rapid development of technology has changed the way we live and work.",
          core: "The development has changed the way"
        },
        modifiers: [
          {
            type: "形容词",
            content: "rapid",
            modifies: "development"
          },
          {
            type: "介词短语",
            content: "of technology",
            modifies: "development"
          },
          {
            type: "定语从句",
            content: "we live and work",
            modifies: "the way"
          }
        ],
        semanticRelations: "主句说明科技发展带来的改变，从句描述具体改变的方面。",
        structuredAnalysis: "The (rapid) development (of technology) has changed the way (we live and work)",
        translation: "科技的快速发展改变了我们生活和工作的方式。"
      }
    }
  ],
  intermediate: [
    {
      text: "While many scientists believe that climate change poses a serious threat to our planet, some people remain skeptical about its impact.",
      analysis: {
        mainStructure: {
          original: "While many scientists believe that climate change poses a serious threat to our planet, some people remain skeptical about its impact.",
          core: "some people remain skeptical"
        },
        modifiers: [
          {
            type: "让步状语从句",
            content: "While many scientists believe that climate change poses a serious threat to our planet",
            modifies: "整个主句"
          },
          {
            type: "介词短语",
            content: "about its impact",
            modifies: "skeptical"
          }
        ],
        semanticRelations: "让步状语从句表示科学家的观点，主句表示部分人的怀疑态度，形成对比。",
        structuredAnalysis: "(While many scientists believe (that climate change poses a serious threat to our planet)), some people remain skeptical (about its impact)",
        translation: "尽管许多科学家认为气候变化对我们的星球构成严重威胁，但一些人仍对其影响持怀疑态度。"
      }
    }
  ],
  advanced: [
    {
      text: "The extent to which artificial intelligence will transform various sectors of the economy remains uncertain, though experts predict significant disruption across industries in the coming decades.",
      analysis: {
        mainStructure: {
          original: "The extent to which artificial intelligence will transform various sectors of the economy remains uncertain, though experts predict significant disruption across industries in the coming decades.",
          core: "The extent remains uncertain"
        },
        modifiers: [
          {
            type: "定语从句",
            content: "to which artificial intelligence will transform various sectors of the economy",
            modifies: "extent"
          },
          {
            type: "让步状语从句",
            content: "though experts predict significant disruption across industries in the coming decades",
            modifies: "主句"
          }
        ],
        semanticRelations: "主句表达AI影响程度的不确定性，让步从句说明专家预测的颠覆性影响。",
        structuredAnalysis: "The extent (to which artificial intelligence will transform various sectors of the economy) remains uncertain, (though experts predict significant disruption across industries in the coming decades)",
        translation: "人工智能将在多大程度上改变经济的各个部门仍不确定，尽管专家预测在未来几十年里它将对各行业产生重大颠覆性影响。"
      }
    }
  ]
};