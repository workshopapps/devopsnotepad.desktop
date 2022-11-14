import create from '../services/server/create.js'

export default class ServerController {
    static create = async (req, res, next) => {
        try {
            const result = await create(req.body);

            res.send({
                success: true,
                message: 'server created successfully',
                ...result,
            });

        } catch (error) {
            next(error)
        }
    }
}