/**Enum for the Icon states.*/
const Icon = Object.freeze({
  READY: 1,
  JUMPING: 2,
  FALLING: 3,
  FINISHED: 4
});

const jumpHeight = 3;
const speed = 1;
const tickSpeed = 30;
/**
 * Used with onmouseover to allow this footer icon to briefly jump.
 * @param {*} icon html img element.
 * @returns {void}
 */
function iconJump(icon) {
	let jumpPos = 0;

	let mode = Icon.READY;
	if (mode === Icon.READY) {
		mode = Icon.JUMPING;
		let intervals = setInterval(()=>{
			switch (mode) {
				case Icon.JUMPING:
					jumpPos = jumpPos + 1 * speed;
					icon.style.top = -jumpPos + "px";
					if (jumpPos >= jumpHeight)
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
		}, tickSpeed);
	}
}