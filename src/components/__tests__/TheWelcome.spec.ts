import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheWelcome from '../TheWelcome.vue'

describe('TheWelcome', () => {
  it('renders properly', () => {
    const wrapper = mount(TheWelcome, { props: { msg: 'TicTacToe Home Page' } })
    expect(wrapper.text()).toContain('TicTacToe Home Page')
  })
})
