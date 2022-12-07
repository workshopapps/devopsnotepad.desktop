pipeline {

	environment {
        CI = 'false'
    }

	agent any
	stages {

		stage("Get repo"){

			steps {
				sh "pwd"
				sh "rm -rf ${WORKSPACE}/devopsnotepad.desktop"
				sh "git clone https://github.com/workshopapps/devopsnotepad.desktop.git"
			}
		}
    
		stage("Build frontend"){

			steps {

                dir ('devopsnotepad.desktop/frontend_website') {
                    sh "pwd"
                    sh "npm i -f"
                    sh "npm run build"
                }

			}
		}
		stage("Build desktop-frontend"){

			steps {

                dir ('devopsnotepad.desktop/dekstop_frontend') {
                    sh "pwd"
                    sh "npm i -f"
                    sh "npm run build"
                }

			}
		}

		stage("Install dependencies for backend"){

			steps {

                dir ('devopsnotepad.desktop/backend') {
                    sh "npm i"
                }

			}
		}
		
		stage("move repo") {
		
			steps {
				sh "sudo rm -r /home/de-marauder/opspad/devopsnotepad.desktop"
				sh "sudo cp -r ${WORKSPACE}/devopsnotepad.desktop /home/de-marauder/opspad/"
			}
		}

		stage("start frontend") {
		
			steps {
				sh "sudo systemctl stop opspad-frontend.service"
				sh "sudo systemctl restart opspad-frontend.service"
			}
		}

		stage("start desktop") {
		
			steps {
				sh "sudo systemctl stop opspad-desktop.service"
				sh "sudo systemctl restart opspad-desktop.service"
			}
		}
		
		stage("start backend") {
		
			steps {
				sh "sudo systemctl stop opspad-backend.service"
				sh "sudo systemctl restart opspad-backend.service"
			}
		}


	}



}