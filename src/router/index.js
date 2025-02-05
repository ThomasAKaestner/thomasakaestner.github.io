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
import Shopware6Experte from "@/views/jobs/Shopware6Experte.vue";
import PageNotFound from "@/views/PageNotFound.vue";
import EC2StorageOptions from "@/views/articles/EC2StorageOptions.vue";
import AWSEC2NetzwerkOptionen from "@/views/articles/AWSEC2NetzwerkOptionen.vue";
import LinuxCommandsCheatSheet from "@/views/articles/LinuxCommandsCheatSheet.vue";
import SolidPrinciplesInPHP from "@/views/articles/SolidPrinciplesInPHP.vue";
import ACIDTransactions from "@/views/articles/ACIDTransactions.vue";
import TerraformCommands from "@/views/articles/TerraformCommands.vue";
import ImperativeVsDeclarativeIAC from "@/views/articles/ImperativeVsDeclarativeIAC.vue"

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
    },
    {
        path: '/blog/aws-ec2-speicher-optionen',
        name: 'aws-ec2-speicher-optionen',
        component: EC2StorageOptions
    },
    {
        path: '/blog/aws-ec2-netzwerk-optionen',
        name: 'aws-netzwerk-optionen',
        component: AWSEC2NetzwerkOptionen
    },
    {
        path: '/blog/terraform-commands',
        name: 'aws-terraform-commands',
        component: TerraformCommands
    },
    {
        path: '/blog/imperative-vs-declarative-iac',
        name: 'imperative-vs-declarative-iac',
        component: ImperativeVsDeclarativeIAC
    },
    {
        path: '/shopware-6',
        name: 'shopware-6',
        component: Shopware6Experte
    },
    {
        path: "*",
        component: PageNotFound
    },
    {
        path: '/blog/linux-commands-cheat-sheet',
        component: LinuxCommandsCheatSheet

    },
    {
        path: '/blog/solid-principles-in-php',
        component: SolidPrinciplesInPHP
    },
    {
        path: '/blog/acid-transaktionen',
        component: ACIDTransactions
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
