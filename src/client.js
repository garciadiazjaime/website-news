import * as sapper from '@sapper/app';

const target = document.querySelector('#sapper')

if (!target) {
	setTimeout(init, 0)
} else {
	init()
}

function init() {
	sapper.start({
		target: document.querySelector('#sapper')
	});
}
