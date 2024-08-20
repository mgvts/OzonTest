import './main.pcss'

/**
 * usage:
 * to start call `placeById with id in this element will be placed html of progress bar
 * or can place by yourself html and then must be call `start`
 */
const component = {
    html: `<div class="progress-bar" id="progress-bar">
                <!-- bar styles-->
                <div class="bar-element" id="bar-element">
                    <!-- Circular progress bar -->
                    <div class="circle">
                        <svg class="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                            <!-- Background Circle -->
                            <circle cx="18" cy="18" r="16" 
                                fill="none" 
                                class="stroke-current text-gray"
                                stroke-width="2"></circle>
                            <!-- Progress Circle -->
                            <circle
                                    id="progress-value"
                                    cx="18" cy="18" r="16"
                                    fill="none"
                                    class="stroke-current text-blue"
                                    stroke-width="0"
                                    stroke-dasharray="100"
                                    stroke-dashoffset="100"
                                    stroke-linecap="round"></circle>
                        </svg>
                    </div>
                </div>
            </div>`,
    placeById(id) {
        const place = document.getElementById(id)
        place.innerHTML = this.html
        this.start()
    },
    start() {
        this.element = document.getElementById('progress-bar')

        if (!this.element) throw new Error('progress component doesnt present in document')
        this.valueElement = this.element.querySelector('#progress-value')
        this.actions = this.createActions();
    },
    createActions() {
        const cnt = this
        return {
            hide() {
                cnt.element.classList.add('hide')
            },
            isHide() {
                return cnt.element.classList.contains('hide');
            },
            toggleHide() {
                if (cnt.actions.isHide()) {
                    cnt.actions.show()
                } else {
                    cnt.actions.hide()
                }
            },
            show() {
                cnt.element.classList.remove('hide');
            },
            setValue(value) {
                let newValue = parseInt(value, 10);
                if (isNaN(newValue) || newValue < 0) {
                    newValue = 0
                } else if (newValue > 100) {
                    newValue = 100
                }

                cnt.valueElement.style.strokeWidth = newValue === 0 ? '0' : '2'
                cnt.valueElement.style.strokeDashoffset = `${100 - newValue}`;

                cnt.valueElement.value = newValue;
                return newValue
            },
            isAnimate() {
                return cnt.valueElement.classList.contains('animate')
            },
            startAnimate() {
                cnt.valueElement.classList.add('animate')
            },
            stopAnimate() {
                cnt.valueElement.classList.remove('animate')
            },
            toggleAnimate() {
                if (cnt.actions.isAnimate()) {
                    cnt.actions.stopAnimate()
                } else {
                    cnt.actions.startAnimate()
                }
            }
        }
    }
}

export default component