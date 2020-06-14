import Item from '../Item.vue'
import TestComponent from '../TestComponent.vue'
import { mount, shallowMount } from '@vue/test-utils'

describe('Item.vue', () => {
  test('renders item shallow', () => {
    const wrapper = shallowMount(Item)
    expect(wrapper.text()).toContain('item')
  })

  test('sanity test', () => {
    const wrapper = mount(Item)
    //debugger
    expect(wrapper.text()).toContain('item')
    
  })
})

test('renders Hello, World!', () => {
  const wrapper = mount(TestComponent)
  expect(wrapper.text()).toContain('Hello World')
})