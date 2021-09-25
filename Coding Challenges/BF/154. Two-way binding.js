// 154. Two-way binding
// Please create a function model(state, element), to bind state.value to the HTMLInputElement element.
// input.vale = state.value
// when change state.value = dev, state.value should also be changed to dev
/**
 * @param {{value: string}} state
 * @param {HTMLInputElement} element
 */
function model(state, element) {
    // your code here
    element.value = state.value;
    Object.defineProperty(state, 'value', {
        get: () => element.value,
        set: (v) => element.value = v,
    })
}


const input = document.createElement('input')
const state = { value: 'BFE' }
model(state, input)

console.log(input.value) // 'BFE'
state.value = 'dev'
console.log(input.value) // 'dev'
input.value = 'BFE.dev'
input.dispatchEvent(new Event('change'))
console.log(state.value) // 'BFE.dev'