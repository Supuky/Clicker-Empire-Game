function displayNone(ele) {
    ele.classList.remove('d-block')
    ele.classList.add('d-none')
}

function displayBlock(ele) {
    ele.classList.remove('d-none')
    ele.classList.add('d-block')
}

// 名前空間 いつでもアクセス可能
const config = {
    initialPage: document.querySelector('#initialPage'),
    mainPage: document.querySelector('#mainPage'),
}

// スタートボタンを押した時の関数
function gameStart() {
    let playerName = document.querySelector('#playerName').value
    if(playerName === "") {
        alert('ニックネームを1文字以上入力してください。')
        
    } else {
        displayNone(config.initialPage)
        displayBlock(config.mainPage)
    }
}

// スタートボタンを押した時
const startBtn = document.querySelector('#newGame')
startBtn.addEventListener('click', gameStart)

// ユーザークラス
class User {
    age = 20
    money = 50000
    earn = 25

    constructor(name) {
        this.name = name
    }

    clickAddMoney() {
        this.money += this.earn
        return this.money 
    }
}

let user1 = new User('HS')
console.log(user1.clickAddMoney())
console.log(user1.money)
console.log(user1.clickAddMoney())
console.log(user1.money)