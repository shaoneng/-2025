import './style.css';
import { renderHeader } from './src/components/Header.js';
import { renderHero } from './src/components/Hero.js';
import { renderFeatures } from './src/components/Features.js';
import { renderHowItWorks } from './src/components/HowItWorks.js';
import { renderTestimonials } from './src/components/Testimonials.js';
import { renderPricing } from './src/components/Pricing.js';
import { renderFAQ } from './src/components/FAQ.js';
import { renderFooter } from './src/components/Footer.js';
import { renderLevelSelection } from './src/components/LevelSelection.js';
import { renderPracticeUI } from './src/components/PracticeUI.js';
import { sentences } from './src/components/PracticeSentences.js';

// Render all sections
document.querySelector('#app').innerHTML = `
  ${renderHeader()}
  ${renderHero()}
  ${renderFeatures()}
  ${renderHowItWorks()}
  ${renderTestimonials()}
  ${renderPricing()}
  ${renderFAQ()}
  ${renderFooter()}
`;

// Add event listeners for trial buttons
document.querySelectorAll('button').forEach(button => {
  if (button.textContent.includes('试用')) {
    button.addEventListener('click', () => {
      document.body.insertAdjacentHTML('beforeend', renderLevelSelection());
      setupLevelSelection();
    });
  }
});

// Setup level selection functionality
function setupLevelSelection() {
  const modal = document.getElementById('levelSelectionModal');
  let selectedLevel = null;

  // Level selection
  document.querySelectorAll('.level-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.level-btn').forEach(b => 
        b.classList.remove('border-primary', 'bg-blue-50'));
      btn.classList.add('border-primary', 'bg-blue-50');
      selectedLevel = btn.dataset.level;
    });
  });

  // Start practice
  document.getElementById('startPractice').addEventListener('click', () => {
    if (!selectedLevel) {
      alert('请先选择难度等级！');
      return;
    }
    
    modal.remove();
    const sentence = sentences[selectedLevel][0];
    document.body.insertAdjacentHTML('beforeend', renderPracticeUI(sentence));
    setupPracticeUI();
  });
}

// Setup practice UI functionality
function setupPracticeUI() {
  const practiceUI = document.getElementById('practiceUI');
  
  // Close practice
  document.getElementById('closePractice').addEventListener('click', () => {
    practiceUI.remove();
  });

  // Show analysis
  document.getElementById('showAnalysis').addEventListener('click', () => {
    document.getElementById('analysisResult').classList.remove('hidden');
  });
}