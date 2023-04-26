const estimateQuestionStore = {
    state: {
        questions: Array
    },
    mutations: {
        addQuestion (state, question) {
            state.questions.push(question)
        }
    },
    actions: {
        addQuestion({commit}, question) {
            commit('addQuestion', question)
        }
    },
    getters: {
        getQuestions: function (state) {
            const data = {}
            data.questions = state.questions
            return data
        }
    }
}

export default estimateQuestionStore