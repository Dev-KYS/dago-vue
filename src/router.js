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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;