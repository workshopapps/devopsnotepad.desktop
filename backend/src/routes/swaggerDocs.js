/**
 * @swagger
 * /auth/signup:
 *     post:
 *         summary: Registers a single user
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - name
 *                              - email
 *                              - password
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  description: The name of the user
 *                              email:
 *                                  type: string
 *                                  description: The email of the user
 *                              password:
 *                                  type: string
 *                                  description: The password of the user
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: Email already exists
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: failure message.
 *             '400':
 *                 description: Please provide all details
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: failure message.
 * /auth/login:
 *     post:
 *         summary: Logs in a single user with correct login credentials
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - email
 *                              - password
 *                              - rememberMe
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  description: The email of the user
 *                              password:
 *                                  type: string
 *                                  description: The password of the user
 *                              rememberMe:
 *                                  type: boolean
 *                                  description: Keep user logged in
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: Email already exists
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 *             '400':
 *                 description: Please provide all details
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /auth/reset-password:
 *     post:
 *         summary: Initiates a reset password operation for a user
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - email
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  description: The email of the user
 * 
 *         responses:
 *             '200':
 *                description: A password reset link has been sent to your email address
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: Please input a valid registered email.
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 *             '400':
 *                 description: Please provide all details
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /auth/update-password:
 *     post:
 *         summary: Allows a user recover account when password is forgotten
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - token
 *                              - id
 *                              - password
 *                          properties:
 *                              token:
 *                                  type: string
 *                                  description: Token used for request validation
 *                              id:
 *                                  type: string
 *                                  description: The id of the user
 *                              password:
 *                                  type: string
 *                                  description: The new password of the user
 * 
 *         responses:
 *             '200':
 *                description: Password has been updated successfully
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '500':
 *                 description: Invalid or expired password reset token.
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 *             '400':
 *                 description: Please provide all details
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /auth/verify-mail:
 *     post:
 *         summary: Initiates the email verification operation
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: false
 * 
 *         responses:
 *             '200':
 *                description: email verified successfully
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '500':
 *                 description: Invalid or expired email verification token
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /auth/update-user-password:
 *     post:
 *         summary: changes password for a user
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - oldPassword
 *                              - newPassword
 *                          properties:
 *                              oldPassword:
 *                                  type: string
 *                                  description: The current password of the user
 *                              newPassword:
 *                                  type: string
 *                                  description: The new passwowrd a user wants to set
 * 
 *         responses:
 *             '200':
 *                description: Password has been updated successfully
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '500':
 *                 description: Invalid or expired password reset token.
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 *             '400':
 *                 description: Please provide all details
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /auth/logout:
 *     get:
 *         summary: Logs out a single user
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: false
 *             content:
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 * /auth/resend-verify-email:
 *     post:
 *         summary: request for new verification mail
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - email
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  description: The email address of the user
 * 
 *         responses:
 *             '200':
 *                description: Verification link sent
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             
 *             '404':
 *                 description: User Not found
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /auth/delete-user:
 *     post:
 *         summary: user delete personal account
 *         tags:
 *             - Auth
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - email
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  description: The email address of the user
 * 
 *         responses:
 *             '200':
 *                description: User Successfully removed
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             
 *             '400':
 *                 description: Invalid email address
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /server:
 *     patch:
 *         summary: Updates server information for a single user
 *         tags:
 *             - Server
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - name
 *                              - ipAddress
 *                              - id
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  description: The name of the server
 *                              ipAddress:
 *                                  type: string
 *                                  description: The ipAddress of the server
 *                              id:
 *                                  type: string
 *                                  description: The id of the server
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: Server does not exist
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /server/:
 *     post:
 *         summary: Creates server for a single user
 *         tags:
 *             - Server
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - name
 *                              - ipAddress
 *                          properties:
 *                              name:
 *                                  type: string
 *                                  description: The name of the server
 *                              ipAddress:
 *                                  type: string
 *                                  description: The ipAddress of the server
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: Server already exists
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /server/delete:
 *     post:
 *         summary: Deletes selected servers for a single user
 *         tags:
 *             - Server
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                           - serverIds
 *                          properties:
 *                              serverIds:
 *                                  type: array
 *                                  items:
 *                                      type: string
 *                                  description: The id's of the selected servers
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 * /server/all:
 *      get:
 *         summary: Fetches all servers for a user
 *         security:
 *             - bearerAuth: []
 *         tags:
 *             - Server
 *         parameters:
 *             - in: path
 *               name: page
 *               schema:
 *                    type: number
 *                    required: false
 *             - in: path
 *               name: limit
 *               schema:
 *                    type: number
 *                    required: false
 *         responses:
 *             '200':
 *                description: Success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                success:
 *                                    type: boolean
 *                                    description: success bolean.
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: There are no servers added on this device
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 *       
 * /server/{serverId}/notifications:
 *     post:
 *         summary: Creates a single notification for a single server
 *         tags:
 *             - Server Notification
 *         parameters:
 *             - in: path
 *               name: serverId
 *               schema:
 *                    type: string
 *                    required: true
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - logs
 *                          properties:
 *                              logs:
 *                                  type: string
 *                                  description: The notification logs for server
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: An error occured while creating new logs, server do not exist
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /server/{serverId}/availability:
 *     post:
 *         summary: Creates a single availability notification for an endpoint
 *         tags:
 *             - Availablity Notification
 *         parameters:
 *             - in: path
 *               name: serverId
 *               schema:
 *                    type: string
 *                    required: true
 * 
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - logs
 *                          properties:
 *                              logs:
 *                                  type: string
 *                                  description: The availability logs for endpoints
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: An error occured while creating new logs, server do not exist
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /server/{serverId}/notifications/:
 *     get:
 *         summary: Fetches all notifications for a single server
 *         tags:
 *             - Server Notification
 *         parameters:
 *             - in: path
 *               name: serverId
 *               schema:
 *                    type: string
 *                    required: true
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '404':
 *                 description: An error occured while creating new logs, server do not exist
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /contact-us/:
 *     post:
 *         summary: user sends inquiry and receives a mail
 *         tags:
 *             - Contact Us
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - firstname
 *                              - lastname
 *                              - email
 *                              - subject
 *                              - message
 *                          properties:
 *                              firstname:
 *                                  type: string
 *                                  description: The first name of the user
 *                              lastname:
 *                                  type: string
 *                                  description: The last name of the user
 *                              email:
 *                                  type: string
 *                                  description: The email address of the user
 *                              subject:
 *                                  type: string
 *                                  description: The subject of the inquiry
 *                              message:
 *                                  type: string
 *                                  description: The message body of the inquiry
 * 
 *         responses:
 *             '200':
 *                description: success
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: success message.
 *                                data:
 *                                     type: object
 *             '400':
 *                 description: Validation error
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.
 * /notify-me/:
 *     post:
 *         summary: users suscribe to a waiting list
 *         tags:
 *             - Notify Me
 *         requestBody:
 *             description: a json with all fields
 *             required: true
 *             content:
 *                 application/json:
 *                         schema:
 *                          type: object
 *                          required:
 *                              - email
 *                          properties:
 *                              email:
 *                                  type: string
 *                                  description: user email address
 * 
 *         responses:
 *             '200':
 *                description: Successfully subcribed
 *                content:
 *                    application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: successfully subcribed.
 *                                data:
 *                                     type: object
 *             '400':
 *                 description: Service error
 *                 content:
 *                     application/json:
 *                        schema:
 *                            type: object
 *                            properties:
 *                                message:
 *                                     type: string
 *                                     description: fail message.

 */
