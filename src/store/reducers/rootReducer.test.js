import rootReducer from './rootReducer'

describe('rootReducer', () => {
  it('initializes the default state', () => {
    expect(rootReducer({}, {})).toEqual({ authReducer: {}, projectReducer: {} })
  })
})