export default (req, res) =>
    res.status(404).send({
        status: "error",
        message: "endpoint not found",
    });
