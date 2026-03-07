pipeline {
    agent any

    tools {
        nodejs 'node' // Le nom que tu as donné dans la configuration des outils Jenkins
    }

    stages {
        stage('Installation des dépendances') {
            steps {
                bat 'npm install'
            }
        }

        stage('Exécution des Tests') {
            steps {
                bat 'npm test'
            }
        }

        stage('Build & Déploiement') {
            steps {
                echo 'Build terminé avec succès !'
            }
        }
    }

    post {
        success {
            echo 'Bravo, déploiement réussi !'
        }
        failure {
            echo 'Le build a échoué. Vérifiez les erreurs.'
        }
    }
}