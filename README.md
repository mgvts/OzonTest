# OzonTest

Here simple realization of circular progress bar


## component description:
- import as `import progressComponent from './components/progress/index'`
- Initialize with 
    - `progressComponent.placeById(idToBePlaced)`
    - ```ts
      let el: HtmlElement
      // initialize el with actual dom element
      el.innerHtml = progressComponent.html
      progressComponent.start()
      ```
- use actions to provide component
  - Value
    - `setValue(value): number` setting value to `valueElement` and returning actual value which be placed
    if value `NaN` or lower 0 setting 0 

    if value over 100 sets 100 
    and returning number form `[0,100]` interval
  - Hide
    - `hide()` apply `display: none` to component
    - `toggleHide()` toggles `display: none | block`
    - `isHide()` returns is block hide
    - `show()` 
  - Animate
    - `startAnimate()` start simple spin animation
    ```css
    #progress-value.animate {
        transform-origin: center center;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }   
    ```
    - `stopAnimate()` stops animation
    - `toggleAnimate()` toggles animation
    - `isAnimate()` returns `boolean` if value animating

## Preview page
menu with control blocks
- setting value `listener: event => actions.setValue(event.target.value)`
- toggle Animate `listener: actions.toggleAnimate`
- toggle Hide `listener: actions.toggleHide`
- control orientation sets class `portrait-mode | landscape-mode`