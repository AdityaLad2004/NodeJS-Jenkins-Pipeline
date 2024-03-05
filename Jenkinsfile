pipeline {
    agent none
    
    stages {
        stage('Run Node.js Application') {
            agent {
                docker { image 'node:20-alpine' }
            }
            steps {
                // Checkout the code from Git repository if needed
                git url: 'https://github.com/AdityaLad2004/NodeJS-Jenkins-Pipeline.git'
                
                // Install dependencies
                sh 'npm install'
                
                // Run Node.js application
                sh 'main.js'
            }
        }
    }
}