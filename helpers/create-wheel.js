import WheelIndicator from 'wheel-indicator'

export function createWheel(vm) {
  // Watch for wheel events. Trigger increment/decrement on up/down
  const wheel = new WheelIndicator({
    elem: document.querySelector('.index__container'),
    callback: (e) => {
      if (e.direction === 'down') {
        vm.increment()
      } else if (e.direction === 'up') {
        vm.decrement()
      }
    }
  })

  return wheel
}
