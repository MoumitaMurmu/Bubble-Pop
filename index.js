document.addEventListener('DOMContentLoaded', function () {
    const gameContainer = document.getElementById('game-container');
    const popTexts = [];
  
    // Create bubbles
    for (let i = 0; i < 10; i++) {
      createBubble();
    }
  
    // Function to create a bubble
    function createBubble() {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      bubble.style.top = `${Math.random() * 400}px`;
      bubble.style.left = `${Math.random() * 400}px`;
      
      bubble.addEventListener('mouseover', () => popBubble(bubble));
  
      gameContainer.appendChild(bubble);
  
      const popText = document.createElement('div');
      popText.classList.add('pop-text');
      gameContainer.appendChild(popText);
      popTexts.push(popText);
    }
  
    // Function to pop a bubble
    function popBubble(bubble) {
      bubble.style.transform = 'scale(0)';
      const popText = popTexts.pop();
      popText.style.top = bubble.style.top;
      popText.style.left = bubble.style.left;
      popText.style.display = 'block';
      popText.innerText = 'Pop';
  
      // Check if all bubbles are popped
      if (popTexts.length === 0) {
        setTimeout(() => displayGameResult(), 1000);
      }
    }
  
    // Function to display the game result
    function displayGameResult() {
      const resultText = document.createElement('div');
      resultText.innerText = 'Wow! All bubbles popped';
      resultText.style.position = 'absolute';
      resultText.style.top = '50%';
      resultText.style.left = '50%';
      resultText.style.transform = 'translate(-50%, -50%)';
      resultText.style.fontSize = '24px';
      resultText.style.fontWeight = 'bold';
      resultText.style.color = '#2ecc71';
      gameContainer.appendChild(resultText);
    }
  });
  