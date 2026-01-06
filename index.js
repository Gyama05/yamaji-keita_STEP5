const input = document.getElementById('textInput');
const btn = document.getElementById('btn');
const displayArea = document.getElementById('displayArea');
const colorBtn = document.getElementById('colorBtn');
const tableBody = document.querySelector('#table');


//表示ボタンの処理
btn.addEventListener('click', () => {
const value = input.value;

    if (value === '') {
        displayArea.textContent = '入力値が空です。';
    } else {
        displayArea.textContent = value;
    }
    
    //highlightクラスをトグルする
    displayArea.classList.toggle('highlight');

    //テーブルに行を追加
    addRow(value);
});

// 行追加処理
function addRow(text) {
    const tr = document.createElement('tr');
    
    //テキストセル
    const tdText = document.createElement('td'); 
    tdText.textContent = text;

    //削除ボタンセル
    const tdDelete = document.createElement('td');
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';
    
    //削除ボタンの動作
    deleteBtn.addEventListener('click', () => {
        tr.remove();
    });

    tdDelete.appendChild(deleteBtn);
    
    tr.appendChild(tdText);
    tr.appendChild(tdDelete);
    
    tableBody.appendChild(tr);
}

//背景色変更ボタンの処理
const colors = ['lightblue', 'lightgreen', 'lightcoral'];
let currentIndex = 0;

colorBtn.addEventListener('click', () => {
    document.body.style.backgroundColor = colors[currentIndex];
    currentIndex = (currentIndex + 1) % colors.length; //循環させる
});