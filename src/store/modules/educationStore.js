import axios from "axios";

const educationStore = {
    state: {
        schoolName: '',
        speciality: '',
        joinYear: '',
        joinMonth: '',
        graduatedYear: '',
        graduatedMonth: '',
        isAttending: false,
    },
    mutations: {
        getEducation(state, payload) {
            const joinDate = new Date(payload.join_year)
            let joinMonth = new String(joinDate.getMonth() + 1);
            joinMonth = joinMonth >= 10 ? joinMonth : '0' + joinMonth;

            state.schoolName = payload.school_nm
            state.speciality = payload.speciality
            state.joinYear = joinDate.getFullYear()
            state.joinMonth = joinMonth
            if(payload.isAttending === false) {
                const graduateDate = new Date(payload.graduated_year)
                let graduatedMonth = new String(graduateDate.getMonth() + 1);
                graduatedMonth = graduatedMonth >= 10 ? graduatedMonth : '0' + graduatedMonth;

                state.graduatedYear = graduateDate.getFullYear()
                state.graduatedMonth = graduatedMonth
            }
            // console.log(state.joinMonth)
            state.isAttending = payload.is_attending
        }
    },
    actions: {
        getEducationAction({ commit }) {
            axios.get('/education', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('access_token')}`
                }
            }).then(res => {
                // console.log(res)
                commit('getEducation', res.data.data)
            }).catch(error => {

            })
        }
    },
    getters: {
        getEducationData(state) {
            const data = {}
            data.schoolName = state.schoolName
            data.speciality = state.speciality
            data.joinYear = state.joinYear
            data.joinMonth = state.joinMonth
            data.isAttending = state.isAttending
            data.graduatedYear = state.graduatedYear
            data.graduatedMonth = state.graduatedMonth

            return data
        }
    }
}

export default educationStore