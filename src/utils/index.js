import ping from "ping";

export async function check_ip_status(address) {
    let ipStatus = await ping.promise.probe(address);
    return ipStatus.alive;
}
