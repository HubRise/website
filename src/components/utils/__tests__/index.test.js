import { kebabify, createHeaderAnchor, generateKey } from '../index'

describe(`kebabify`, () => {
  it(`should transform regular string`, () => {
    expect(kebabify(`Quick Start Guide`)).toBe(`quick-start-guide`)
  })

  it(`should transform regular string while keeping original letter casing`, () => {
    expect(kebabify(`QuicK StarT GuidE`, true)).toBe(`QuicK-StarT-GuidE`)
  })
})

describe(`createHeaderAnchor`, () => {
  it(`should convert numbered header into a target for anchor`, () => {
    expect(createHeaderAnchor(`4. Overriding HTTP method`)).toBe(
      `overriding-http-method`
    )

    expect(createHeaderAnchor(`5. Order items (deal line)`)).toBe(
      `order-items-deal-line`
    )
  })
})

describe(`generateKey`, () => {
  it(`should generate a key prop`, () => {
    expect(generateKey(`absolutely`, `83`)).toBe(`absolutely--83`)
  })
})
