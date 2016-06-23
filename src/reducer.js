const reducer = (state, action) => {
    functions = {
        ADD_TODO: function (state){
            state.todo.push(action.todo);
            console.log(state);
            return state
        },
        REMOVE_TODO: function (state){
            const idx = state.todo.indexOf(action.todo);
            if (idx !== -1) {
                state.todo.splice(idx, 1)
            }
            console.log(state);
            return state
        },
        SORT_TODO: function (state){
            state.todo.sort(compare);
            console.log(state);
            return state
        },
        TOGGLE_TODO: function (state) {
            const idx = state.todo.indexOf(action.todo);
            if (idx !== -1) {
                state.todo.isComplete = true;
            }
            console.log(state);
            return state;
        }

    };

    if (!state) return { todo: [] }
    return functions[action.type](state);

}
const store = Redux.createStore(reducer);
const ReduxBehavior = PolymerRedux(store);
