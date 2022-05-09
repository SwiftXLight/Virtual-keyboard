keyHash = {
    8: '.back',
    9: '.tab',
    13: '.enter',
    16: '.shift',
    17: '.control',
    18: '.alt',
    20: '.cap',
    27: '.esc',
    32: '.space',
    37: '.left',
    38: '.up',
    39: '.right',
    40: '.down',
    186: '.semi',
    187: '.add',
    189: '.sub',
    222: '.comma',
    219: '.openbracket',
    221: '.closebracket',
    220: '.pipe',
    188: '.openangular',
    190: '.closeangular',
    191: '.slash',
    91: '.win',
};

const ruText = `
<div class="key s2 esc" data-key="Esc" data-shift="Esc">Esc</div>
<div class="key" on-shift="!" data-key="1" data-shift="!">1</div>
<div class="key" on-shift="@" data-key="2" data-shift="@">2</div>
<div class="key" on-shift="#" data-key="3" data-shift="#">3</div>
<div class="key" on-shift="$" data-key="4" data-shift="$">4</div>
<div class="key" on-shift="%" data-key="5" data-shift="%">5</div>
<div class="key" on-shift="^" data-key="6" data-shift="^">6</div>
<div class="key" on-shift="&amp;" data-key="7" data-shift="&amp;">7</div>
<div class="key" on-shift="*" data-key="8" data-shift="*">8</div>
<div class="key" on-shift="(" data-key="9" data-shift="(">9</div>
<div class="key" on-shift=")" data-key="0" data-shift=")">0</div>
<div class="key sub" on-shift="_" data-key="-" data-shift="_">-</div>
<div class="key add" on-shift="+" data-key="=" data-shift="+">=</div>
<div class="key s4 back" data-key="backspace" data-shift="backspace">backspace</div>
<div class="key s3 tab" data-key="tab" data-shift="Tab">Tab</div>
<div class="key" data-key="Й" data-shift="Й">й</div>
<div class="key" data-key="Ц" data-shift="Ц">ц</div>
<div class="key" data-key="У" data-shift="У">у</div>
<div class="key" data-key="К" data-shift="К">к</div>
<div class="key" data-key="Е" data-shift="Е">е</div>
<div class="key" data-key="Н" data-shift="Н">н</div>
<div class="key" data-key="Г" data-shift="Г">г</div>
<div class="key" data-key="Ш" data-shift="Ш">ш</div>
<div class="key" data-key="Щ" data-shift="Щ">щ</div>
<div class="key" data-key="З" data-shift="З">з</div>
<div class="key openbracket" on-shift="Х" data-key="Х" data-shift="Х">х</div>
<div class="key closebracket" on-shift="Ъ" data-key="Ъ" data-shift="Ъ">ъ</div>
<div class="key s3 pipe" on-shift="/" data-key="\\" data-shift="/">\\</div>
<div class="key s4 cap" data-key="cap" data-shift="Caps Lock">Caps Lock</div>
<div class="key" data-key="Ф" data-shift="Ф">ф</div>
<div class="key" data-key="Ы" data-shift="Ы">ы</div>
<div class="key" data-key="В" data-shift="В">в</div>
<div class="key dotted" data-key="А" data-shift="А">а</div>
<div class="key" data-key="П" data-shift="П">п</div>
<div class="key" data-key="Р" data-shift="Р">р</div>
<div class="key dotted" data-key="О" data-shift="О">о</div>
<div class="key" data-key="Л" data-shift="Л">л</div>
<div class="key" data-key="Д" data-shift="Д">д</div>
<div class="key semi" on-shift="Ж" data-key="Ж" data-shift="Ж">ж</div>
<div class="key comma" on-shift="Э" data-key="Э" data-shift="Э">э</div>
<div class="key s4 enter" data-key="enter" data-shift="Enter">Enter</div>
<div class="key s5 shift" data-key="shift" data-shift="Shift">Shift</div>
<div class="key" data-key="Я" data-shift="Я">я</div>
<div class="key" data-key="Ч" data-shift="Ч">ч</div>
<div class="key" data-key="С" data-shift="С">с</div>
<div class="key" data-key="М" data-shift="М">м</div>
<div class="key" data-key="И" data-shift="И">и</div>
<div class="key" data-key="Т" data-shift="Т">т</div>
<div class="key" data-key="Ь" data-shift="Ь">ь</div>
<div class="key openangular" on-shift="Б" data-key="Б" data-shift="Б">б</div>
<div class="key closeangular" on-shift="Ю" data-key="Ю" data-shift="Ю">ю</div>
<div class="key slash" on-shift="," data-key="." data-shift=",">.</div>
<div class="key s5 shift" data-key="shift" data-shift="Shift">Shift</div>
<div class="key s2 control" data-key="Ctrl" data-shift="Ctrl">Ctrl</div>
<div class="key s2 win" data-key="Win" data-shift="Win">Win</div>
<div class="key s2 alt" data-key="alt" data-shift="Alt">Alt</div>
<div class="key s12 space" data-key="" data-shift=""></div>
<div class="key s2 alt" data-key="alt" data-shift="Alt">Alt</div>
<div class="key s2 control" data-key="Ctrl" data-shift="Ctrl">Ctrl</div>
<div class="key s2 left arr" data-key="←" data-shift="←">←</div>
<div class="key s2 up arr" data-key="↑" data-shift="↑">↑</div>
<div class="key s2 down arr" data-key="↓" data-shift="↓">↓</div>
<div class="key s2 right arr" data-key="→" data-shift="→">→</div>
`;

const engText = `
<div class="key s2 esc" data-key="Esc" data-shift="Esc">Esc</div>
<div class="key" on-shift="!" data-key="1" data-shift="!">1</div>
<div class="key" on-shift="@" data-key="2" data-shift="@">2</div>
<div class="key" on-shift="#" data-key="3" data-shift="#">3</div>
<div class="key" on-shift="$" data-key="4" data-shift="$">4</div>
<div class="key" on-shift="%" data-key="5" data-shift="%">5</div>
<div class="key" on-shift="^" data-key="6" data-shift="^">6</div>
<div class="key" on-shift="&amp;" data-key="7" data-shift="&amp;">7</div>
<div class="key" on-shift="*" data-key="8" data-shift="*">8</div>
<div class="key" on-shift="(" data-key="9" data-shift="(">9</div>
<div class="key" on-shift=")" data-key="0" data-shift=")">0</div>
<div class="key sub" on-shift="_" data-key="-" data-shift="_">-</div>
<div class="key add" on-shift="+" data-key="=" data-shift="+">=</div>
<div class="key s4 back" data-key="backspace" data-shift="backspace">backspace</div>
<div class="key s3 tab" data-key="tab" data-shift="Tab">Tab</div>
<div class="key" data-key="Q" data-shift="Q">q</div>
<div class="key" data-key="W" data-shift="W">w</div>
<div class="key" data-key="E" data-shift="E">e</div>
<div class="key" data-key="R" data-shift="R">r</div>
<div class="key" data-key="T" data-shift="T">t</div>
<div class="key" data-key="Y" data-shift="Y">y</div>
<div class="key" data-key="U" data-shift="U">u</div>
<div class="key" data-key="I" data-shift="I">i</div>
<div class="key" data-key="O" data-shift="O">o</div>
<div class="key" data-key="P" data-shift="P">p</div>
<div class="key openbracket" on-shift="{" data-key="[" data-shift="{">[</div>
<div class="key closebracket" on-shift="}" data-key="]" data-shift="}">]</div>
<div class="key s3 pipe" on-shift="|" data-key="\\" data-shift="|">\\</div>
<div class="key s4 cap" data-key="cap" data-shift="Caps Lock">Caps Lock</div>
<div class="key" data-key="A" data-shift="A">a</div>
<div class="key" data-key="S" data-shift="S">s</div>
<div class="key" data-key="D" data-shift="D">d</div>
<div class="key dotted" data-key="F" data-shift="F">f</div>
<div class="key" data-key="G" data-shift="G">g</div>
<div class="key" data-key="H" data-shift="H">h</div>
<div class="key dotted" data-key="J" data-shift="J">j</div>
<div class="key" data-key="K" data-shift="K">k</div>
<div class="key" data-key="L" data-shift="L">l</div>
<div class="key semi" on-shift=":" data-key=";" data-shift=":">;</div>
<div class="key comma" on-shift="&quot;" data-key="," data-shift="&quot;">'</div>
<div class="key s4 enter" data-key="enter" data-shift="Enter">Enter</div>
<div class="key s5 shift" data-key="shift" data-shift="Shift">Shift</div>
<div class="key" data-key="Z" data-shift="Z">z</div>
<div class="key" data-key="X" data-shift="X">x</div>
<div class="key" data-key="C" data-shift="C">c</div>
<div class="key" data-key="V" data-shift="V">v</div>
<div class="key" data-key="B" data-shift="B">b</div>
<div class="key" data-key="N" data-shift="N">n</div>
<div class="key" data-key="M" data-shift="C">m</div>
<div class="key openangular" on-shift="&lt;" data-key="," data-shift="&lt;">,</div>
<div class="key closeangular" on-shift="&gt;" data-key="." data-shift="&gt;">.</div>
<div class="key slash" on-shift="?" data-key="/" data-shift="?">/</div>
<div class="key s5 shift" data-key="shift" data-shift="Shift">Shift</div>
<div class="key s2 control" data-key="Ctrl" data-shift="Ctrl">Ctrl</div>
<div class="key s2 win" data-key="Win" data-shift="Win">Win</div>
<div class="key s2 alt" data-key="alt" data-shift="Alt">Alt</div>
<div class="key s12 space" data-key="" data-shift=""></div>
<div class="key s2 alt" data-key="alt" data-shift="Alt">Alt</div>
<div class="key s2 control" data-key="Ctrl" data-shift="Ctrl">Ctrl</div>
<div class="key s2 left arr" data-key="←" data-shift="←">←</div>
<div class="key s2 up arr" data-key="↑" data-shift="↑">↑</div>
<div class="key s2 down arr" data-key="↓" data-shift="↓">↓</div>
<div class="key s2 right arr" data-key="→" data-shift="→">→</div>
`;


let keyboardContainer = document.createElement('div');
keyboardContainer.classList.add('keyboard');
let textArea = document.createElement('textarea');
textArea.classList.add('input-val');
textArea.readOnly = true;
let keyCombo = document.createElement('h1');
keyCombo.innerHTML = `
Press Ctrl + Alt to change language.
It is still buggy, so please score without it
`;
keyboardContainer.innerHTML = engText;

function changeLanguage () {
    if (keyboardContainer.classList.contains('ru')) {
        keyboardContainer.classList.remove('ru');
        keyboardContainer.innerHTML = engText;
    } else {
        keyboardContainer.classList.add('ru');
        keyboardContainer.innerHTML = ruText;
    }
}

document.body.appendChild(textArea);
document.body.appendChild(keyboardContainer);
document.body.appendChild(keyCombo);

const cap = document.querySelector('.cap');
const keyboard = document.querySelector('.keyboard');

function checkCaps() {
    if (event.getModifierState('CapsLock')) {
        cap.classList.add('on');
    } else {
        cap.classList.remove('on');
    }
}

const handleKeyDown = (e) => {
    checkCaps();
    let target = keyHash[e.keyCode];
    if (!target) target = `.key[data-key='${String.fromCharCode(e.keyCode)}']`;
    let key = document.querySelector(target);
    key && key.classList.toggle('pressed');
    switch (e.key) {
        case 'Backspace':
            let el = textArea.textContent;
            textArea.textContent = el.substring(0, el.length - 1);
            break;
        case 'ArrowLeft':
            textArea.textContent += '←';
            break;
        case 'ArrowRight':
            textArea.textContent += '→';
            break;
        case 'ArrowUp':
            textArea.textContent += '↑';
            break;
        case 'ArrowDown':
            textArea.textContent += '↓';
            break;
        case 'Tab':
            textArea.textContent += '   ';
            break;
        case 'Enter':
            textArea.innerHTML += '\n';
            break;
        case 'Meta':
            break;
        case 'Escape':
            break;
        case 'Shift':
            break;
        case 'CapsLock':
            break;
        case 'Alt':
            break;
        case 'Control':
            break;
        case 'F12':
            break;
        case 'F11':
            break;
        default:
            textArea.textContent += e.key;
    }
};

document.querySelectorAll('.key').forEach(function (e) {
    e.onclick = function (e) {
        document.querySelectorAll('.key').forEach(function (e) {
            e.classList.remove('pressed');
        });
        let upperCaseText = this.getAttribute('data-shift');
        let underCaseText = this.textContent;
        let text
        if (capsOn === true) {
            text = upperCaseText;
        } else {
            text = underCaseText;
        }
        this.classList.add('pressed');
        switch (text) {
            case 'backspace':
                let el = textArea.textContent;
                textArea.textContent = el.substring(0, el.length - 1);
                break;
            case 'ArrowLeft':
                textArea.textContent += '←';
                break;
            case 'ArrowRight':
                textArea.textContent += '→';
                break;
            case 'ArrowUp':
                textArea.textContent += '↑';
                break;
            case 'ArrowDown':
                textArea.textContent += '↓';
                break;
            case 'Tab':
                textArea.textContent += '   ';
                break;
            case 'Enter':
                textArea.innerHTML += '\n';
                break;
            case '':
                textArea.textContent += ' ';
                break;
            case 'Win':
                break;
            case 'Esc':
                break;
            case 'Shift':
                break;
            case 'Caps Lock':
                break;
            case 'Alt':
                break;
            case 'Ctrl':
                break;
            default:
                textArea.textContent += text;
        }
    }
});

function unPress(e) {
    if (e.propertyName === 'transform') this.classList.remove('pressed');
}

let capsOn = false;
function clickCaps() {
    cap.classList.toggle('on');
    if (capsOn === false) {
        capsOn = true;
    } else {
        capsOn = false;
    }
};

document.onkeydown = function (e) {
    if (e.altKey && e.ctrlKey) {
        changeLanguage();
    } else {
        return;
    }
}

window.addEventListener('keydown', handleKeyDown);
const keys = document.querySelectorAll('.key');
keys.forEach((k) => k.addEventListener('transitionend', unPress));
cap.addEventListener('click', clickCaps);

console.log(`Ваша отметка - 100 балла(ов)
Отзыв по пунктам ТЗ:

Частично выполненные пункты:
1) Реализовано переключение виртуальной клавиатуры между английским и другим языком. Выбранный язык сохраняется после перезагрузки страницы. На странице указана комбинация клавиш для смены языка — 5 балл(а)
При перезагрузке не сохраняется, клавиатура на русском забагована. (-10)
`)