pipeline {

	agent any
	stages {

		stage("Get repo"){

			steps {
				sh "rm -rf ${WORKSPACE}/devopsnotepad.desktop"
				sh "git clone https://github.com/workshopapps/devopsnotepad.desktop.git"
				sh "sudo cp -r ${WORKSPACE}/devopsnotepad.desktop /home/de-marauder/opspad/devopsnotepad.desktop"
			}
		}

		stage("Build frontend"){

			steps {

                dir ('devopsnotepad.desktop/frontend_website') {
                    sh "npm i -f"
                    sh "npm run build"
                }

			}
		}

		stage("Install dependencies for backend"){

			steps {

                dir ('devopsnotepad.desktop/backend') {
                    sh "npm i -f"
                }

			}
		}
		
		stage("start frontend") {
		
			steps {
				sh "sudo systemctl stop zuvatar-frontend.service"
				sh "sudo systemctl restart zuvatar-frontend.service"
			}
		}
		
		stage("start backend") {
		
			steps {
				sh "sudo systemctl stop zuvatar-backend.service"
				sh "sudo systemctl restart zuvatar-backend.service"
			}
		}


	}



}