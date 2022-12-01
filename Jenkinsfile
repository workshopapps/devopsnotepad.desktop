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