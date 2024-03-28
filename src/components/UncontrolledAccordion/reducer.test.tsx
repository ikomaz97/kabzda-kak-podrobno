import {reducer, TOGGLE_COLLAPSED, StateType} from "./Reducer";
test('collapsed should be true', () => {
    //data
const state: StateType = {
    collapsed: false
}
//action

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    //expection
    expect(newState.collapsed).toBe(false)
})