// 作成ボタンの要素を取得
const newBtn = document.getElementById('new')

newBtn.addEventListener('click', () => addNewHusen())

// 作成ボタンのクリックイベント
function addNewHusen() {
  // div要素の作成
  const husen = document.createElement('div')

  // div要素にclass="husen"を追加
  husen.classList.add('husen')

  // husenの中身を追加
  husen.innerHTML = `
  <div class="bar">
    <button class="delete">
      <span class="material-icons">delete_forever</span>
    </button>
    <ul id="change-background-color">
      <li style="background-color:#ffddbc;" onClick="changeBackgroundColor('textarea','#ffddbc')">&emsp;</li>
      <li style="background-color:#bcbcff;" onClick="changeBackgroundColor('textarea', '#bcbcff')">&emsp;</li>
      <li style="background-color:#ffffbc;" onClick="changeBackgroundColor('textarea', '#ffffbc')">&emsp;</li>
      <li style="background-color:#bcffbc;" onClick="changeBackgroundColor('textarea', '#bcffbc')">&emsp;</li>
      <li style="background-color:#fff;" onClick="changeBackgroundColor('textarea', '#fff')">&emsp;</li>
    </ul>
  </div>
  <textarea id="textarea"></textarea>
  `

  // 操作に必要な要素を取得
  const deleteBtn = husen.querySelector('.delete')
  const textArea = husen.querySelector('textarea')

  // 削除のクリックイベント
  deleteBtn.addEventListener('click', () => {
    deleteHusen(husen)
  })

  // ドラッグ&ドロップ
  husen.onmousedown = function(event) {
    let shiftX = event.clientX - husen.getBoundingClientRect().left;
    let shiftY = event.clientY - husen.getBoundingClientRect().top;
    
    husen.style.position = 'absolute';
    husen.style.zIndex = 1000;

    moveAt(event.pageX, event.pageY);
    
    function moveAt(pageX, pageY) {
      husen.style.left = pageX - shiftX + 'px';
      husen.style.top = pageY - shiftY + 'px';
    }
    
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
    
    document.addEventListener('mousemove', onMouseMove);

    husen.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      husen.onmouseup = null;
    };
    
  };

  husen.ondragstart = function() {
    return false;
  };

  document.body.appendChild(husen)
}

// 付箋の削除
function deleteHusen(husen) {
  husen.remove()
}

// 背景色の変更
function changeBackgroundColor(id, color){ // 引数を変数idと変数colorに代入
  document.getElementById(id).style.backgroundColor = color; // id属性の値が、変数idの値である要素の背景色を変更
}

// ノートの削除
const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', () => {
  closeNote(note)
});

function closeNote(note) {
  note.remove()
}
