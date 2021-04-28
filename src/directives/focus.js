export default {
	mounted(el) {
		const oSelectorInput = el.querySelector(".selector-input")
		const oSelectorMenu = el.querySelector('.selector-menu')
		const oInput = oSelectorInput.querySelector('input')
		const oPlaceholder = oSelectorInput.querySelector('label')
		const oIcon = oSelectorInput .querySelector('i')
		oInput.addEventListener("focus", function () {
			oPlaceholder.style.display = 'none'
			oIcon.className = 'iconfont el-icon-search'
			setTimeout(() => {
				oSelectorMenu.style.display = 'block'
			}, 200)
		}, false)
		
		oInput.addEventListener("blur", function () {
			oIcon.className = 'iconfont el-icon-arrow-down'
			setTimeout(() => {
				oSelectorMenu.style.display = 'none'
				if (this.value.length === 0) {
					oPlaceholder.style.display = 'block'
				}
			}, 200)
		}, false)
	}
}
