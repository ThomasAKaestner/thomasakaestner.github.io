import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import SymfonyServerless from "../views/articles/SymfonyServerless.vue";
import PerfectCICDforPHP from "@/views/articles/PerfectCICDforPHP.vue";
import LaravelServerless from "@/views/articles/LaravelServerless.vue";
import XdebugInDockerContainer from "@/views/articles/XdebugInDockerContainer.vue";
import PHPServerlessMitBref from "../views/articles/PHPServerlessMitBref.vue";
import AufrufVonAWSModelle from "../views/articles/AufrufVonAWSModelle.vue";
import LebenszyklusLambdaFunktionen from "../views/articles/LebenszyklusLambdaFunktionen.vue";
import AWSLambdaBerechtigungen from "../views/articles/AWSLambdaBerechtigungen.vue";
import StatusUpdatesModelleAnLambda from "@/views/articles/StatusUpdatesModelleAnLambda.vue";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/impressum',
        name: 'impressum',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/ImpressumView.vue')
    },
    {
        path: '/blog',
        name: 'blog',
        component: BlogView
    },
    {
        path: '/blog/symfony-serverless',
        name: 'symfony-serverless',
        component: SymfonyServerless
    },
    {
        path: '/blog/laravel-serverless',
        name: 'laravel-serverless',
        component: LaravelServerless
    },
    {
        path: '/blog/die-perfekte-CI-CD-Pipeline-fuer-php',
        name: 'perfect-ci-cd-pipeline',
        component: PerfectCICDforPHP
    },
    {
        path: '/blog/xdebug-in-docker-container-laufen-lassen',
        name: 'xdebug-in-docker-container',
        component: XdebugInDockerContainer
    },
    {
        path: '/blog/php-serverless-mit-bref',
        name: 'php-serverless-mit-bref',
        component: PHPServerlessMitBref
    },
    {
        path: '/blog/aufrufmodelle-von-aws-lambda-funktionen',
        name: 'aws-modelle',
        component: AufrufVonAWSModelle
    },
    {
        path: '/blog/Statusupdates-Modelle-An-AWS-Lambda',
        name: 'statusupdates-modelle-an-aws-lambda',
        component: StatusUpdatesModelleAnLambda
    },
    {
        path: '/blog/lebens-zyklus-von-lambda-funktionen',
        name: 'lebenszyklus-lambda-funktionen',
        component: LebenszyklusLambdaFunktionen
    },
    {
        path: '/blog/aws-lambda-berechtigungen',
        name: 'aws-lambda-berechtigungen',
        component: AWSLambdaBerechtigungen
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
