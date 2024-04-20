const Icon = Object.freeze({
  READY: 1,
  JUMPING: 2,
  FALLING: 3,
  FINISHED: 4
});

/**
 * Used with onmouseover to allow this footer icon to briefly jump.
 * @param {*} icon html img element.
 */
function iconJump(icon) {
	let maxJump = 3;
	let speed = 1;
	let jumpPos = 0;

	let mode = Icon.READY;
	if (mode === Icon.READY) {
		mode = Icon.JUMPING;
		let intervals = setInterval(()=>{
			switch (mode) {
				case Icon.JUMPING:
					jumpPos = jumpPos + 1 * speed;
					icon.style.top = -jumpPos + "px";
					if (jumpPos >= maxJump)
						mode = Icon.FALLING;
					break;
				case Icon.FALLING:
					jumpPos = jumpPos - 1 * speed;
					icon.style.top = -jumpPos + "px";
					if (jumpPos <= 0) {
						mode = Icon.FINISHED;
						icon.style.top = 0 + "px";
					}
					break;
				case Icon.FINISHED:
					clearInterval(intervals);
					break;
			}
		}, 30);
	}
}