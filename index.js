const input = document.getElementById('textInput');
const btn = document.getElementById('btn');
const displayArea = document.getElementById('displayArea');
const colorBtn = document.getElementById('colorBtn');


// 表示ボタンの処理
btn.addEventListener('click', () => {
const value = input.value;

    if (value === '') {
        displayArea.textContent = '入力値が空です。';
    } else {
        displayArea.textContent = value;
    }
    
});

// 背景色変更ボタンの処理
const colors = ['lightblue', 'lightgreen', 'lightcoral'];
let currentIndex = 0;

colorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; // 循環させる
});