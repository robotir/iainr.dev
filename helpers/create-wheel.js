import WheelIndicator from 'wheel-indicator'
import throttle from 'lodash/throttle'

export function createWheel(vm) {
  // Watch for wheel events. Trigger increment/decrement on up/down
  const wheel = new WheelIndicator({
    elem: document.querySelector('.index__container'),
    callback: throttle((e) => {
      if (e.direction === 'down') {
        vm.increment()
      } else if (e.direction === 'up') {
        vm.decrement()
      }
    }, 600)
  })

  return wheel
}
