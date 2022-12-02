/**
 * @swagger
 * /auth/register:
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
 *                          properties:
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
 *     post:
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
 *                              - ids
 *                          properties:
 *                              name:
 *                                  type: array
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
 *               name: page
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
 */