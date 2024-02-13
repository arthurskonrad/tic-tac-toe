import { describe, it, expect } from 'vitest'

import { sum } from '../sum'

describe('@sum', () => {
  it('should return 3 when calling sum with 1 and 2', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
