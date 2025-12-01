let describe = ''

const keyEnum = {
	key0: '`',
	key1: '1',
	key2: '2',
	key3: '3',
	key4: '4',
	key5: '5',
	key6: '6',
	key7: '7',
	key8: '8',
	key9: '9',
	key10: '0',
	key11: '-',
	key12: '=',
	key13: 'backspace',
	key14: 'Tab',
	key15: 'Q',
	key16: 'W',
	key17: 'E',
	key18: 'R',
	key19: 'T',
	key20: 'Y',
  key21: 'U',
  key22: 'I',
  key23: 'O',
  key24: 'P',
  key25: '[',
  key26: ']',
  key27: '|',
  key28: 'capslock',
  key29: 'A',
  key30: 'S',
  key31: 'D',
  key32: 'F',
  key33: 'G',
  key34: 'H',
  key35: 'J',
  key36: 'K',
  key37: 'L',
  key38: ';',
  key39: '“',
  key40: 'enter',
  key41: 'shift',
  key42: 'Z',
  key43: 'X',
  key44: 'C',
  key45: 'V',
  key46: 'B',
  key47: 'N',
  key48: 'M',
  key49: ',',
  key50: '.',
  key51: "/",
  key52: 'ctrl',
  key53: 'win',
  key54: 'alt',
  key55: 'blank',
  key56: 'menu',
}

const template = 'hello, im WP993080086. Im interested in Css and JavaScript and typeScript and Nodejs and Android. welcome to browse and communicate.'

window.onload = () => {
	document.getElementById('keyboard').addEventListener('click', function (event) {
		const value = removeSpaces(event.target.textContent)
		describe += value.toLowerCase()
		renderDescribe()
	})
}

// 去掉空格
function removeSpaces(str) {
	return str.replace(/\s+/g, '')
}

// 渲染描述
function renderDescribe() {
	document.getElementById('textbox').innerText = describe
}

// 添加点击样式
function addClickStyle(queue) {
	if (queue.length > 0) {
		const target = queue[0]
		const keyDom = document.getElementsByClassName(target)[0]
		keyDom.classList.add('active')
		setTimeout(() => {
      const str = removeSpaces(keyDom.innerText).split('')
      describe += str.length > 1 ? str[1].toLowerCase() : str[0] ? str[0].toLowerCase() : ' '
		  renderDescribe()
			keyDom.classList.remove('active')
      queue.shift()
      addClickStyle(queue)
		}, 300)
	}
}

// 启动点击
function launchClick(des) {
	const arr = des.toUpperCase().split('')
	const keyArr = Object.keys(keyEnum)
	const queue = []
	arr.forEach((item1) => {
		keyArr.forEach((item2) => {
			if (keyEnum[item2] === item1) {
				queue.push(item2)
			}
		})
    if (item1 === ' ') queue.push('blank')
	})
  addClickStyle(queue)
}

launchClick(template)