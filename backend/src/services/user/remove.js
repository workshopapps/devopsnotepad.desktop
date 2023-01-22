import UserRepo from "../../database/repositories/UserRepo.js";
import ServerRepo from "../../database/repositories/ServerRepo.js";
import sendEmail from "../../utils/email/sendEmail.js";

export default async function removeuser(body) {
    const email = body.email.toLowerCase();
    const year = new Date().getFullYear();

    // retrie all servers
    const servers = await ServerRepo.getAllServers()

    for (const server of servers) {
        ServerRepo.deleteById(server.id)
    }

    // Deleter user
    await UserRepo.removeUserByEmail(body.email)
    await sendEmail(email, "Message received", { email, year }, "./template/removeUser.handlebars");

    return "User Remove successfully"
}