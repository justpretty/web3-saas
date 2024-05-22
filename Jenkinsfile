import groovy.json.JsonSlurper

node {
    echo "PWD: ${pwd()}"
    //git仓库地址
    def GIT_REPOSITORY = "https://gitee.com/bsin-paas/bsin-ui-scaffold-react-app2.git"
    //构建分支
    def GIT_BRANCHES = "master"
    //git认证ID
    def GIT_CREDENTIALS_ID ='giteeID'
    //镜像仓库地址
    def REGISTRY_URL = 'https://registry.cn-hangzhou.aliyuncs.com'
    //镜像仓库认证id
    def REGISTRY_CREDENTIALS_ID = 'aliyunImg'


    stage('Clone') {
        checkout([$class: 'GitSCM', branches: [[name: "${GIT_BRANCHES}"]], extensions: [], userRemoteConfigs: [[credentialsId: "${GIT_CREDENTIALS_ID}", url: "${GIT_REPOSITORY}"]]])
    }

    stage('Build') {

    }

    stage('PushImage') {
        docker.withRegistry("${REGISTRY_URL}" , "${REGISTRY_CREDENTIALS_ID}"){
            def customImage = docker.build("bsin-paas/bsin-ui-scaffold-react-app2:${env.BUILD_ID}")
            /* Push the container to the custom Registry */
            customImage.push()
            customImage.push('latest')
        }
    }

    //jenkins服务器需要安排kubectl
    /*stage("Deploy") {
        sh "sed -i s/ngdb-dayu-web:latest/ngdb-dayu-web:${env.BUILD_ID}/g Deployment.yml"
        sh '/usr/local/bin/kubectl apply -f Deployment.yml'
    }*/

}