import progressComponent from './components/progress/index'


progressComponent.placeById('progress-component')


const valueInput = document.getElementById('value')
const animateInput = document.getElementById('animate')
const hideInput = document.getElementById('hide')
const {actions} = progressComponent

valueInput.addEventListener('input', (ev) => {
    actions.setValue(ev.target.value)
    let newValue = parseInt(ev.target.value, 10);
    if (isNaN(newValue) || newValue < 0) {
        newValue = ''; // Set to minimum if out of range
    } else if (newValue > 100) {
        newValue = 100; // Set to maximum if out of range
    }
    ev.target.value = newValue
})
animateInput.addEventListener('change', () => actions.toggleAnimate())
hideInput.addEventListener('change', () => actions.toggleHide())

