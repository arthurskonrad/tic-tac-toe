import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import TheGame from '../TheGame.vue'

describe('TheGame', () => {
  it('renders properly', () => {
    const wrapper = mount(TheGame, { props: { msg: 'TicTacToe Game' } })
    expect(wrapper.text()).toContain('TicTacToe Game')
  })
})
