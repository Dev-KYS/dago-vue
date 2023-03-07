import { createWebHistory, createRouter } from "vue-router";

const routes = [
    {
        path: "/",
        name: "Home",
        component: () => import("@/views/Home.vue")
    },
    {
        path: "/auth/register",
        name: "Register",
        component: () => import("@/views/Register.vue")
    },
    {
        path: "/auth/login",
        name: "Login",
        component: () => import("@/views/Login.vue"),
    },
    {
        path: "/profile",
        name: "Profile",
        component: () => import("@/views/Profile.vue")
    },
    {
        path: "/estimate/request",
        name: "EstimateRequest",
        component: () => import("@/views/EstimateRequest.vue")
    },
    {
        path: "/request/received",
        name: "ReceivedRequest",
        component: () => import("@/views/ReceivedRequest.vue")
    },
    {
        path: "/myrequest",
        name: "MyRequest",
        component: () => import("@/views/MyRequest.vue")
    },
    {
        path: "/myrequest/list",
        name: "MyRequestEstimate",
        component: () => import("@/views/MyRequestEstimate.vue")
    },
    {
        path: "/request/answer/:id",
        name: "RequestAnswer",
        component: () => import("@/views/RequestAnswer.vue")
    },
    {
        path: "/question/create",
        name: "QuestionCreate",
        component: () => import("@/views/QuestionCreate.vue")
    },
    {
        path: "/question/answer",
        name: "RequestAnswerCheck",
        component: () => import("@/views/RequestAnswerCheck.vue")
    },
    {
        path: "/select/estimate",
        name: "SelectEstimate",
        component: () => import("@/views/SelectEstimate.vue")
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;