import ServerRepo from "../../database/repositories/ServerRepo.js";

export async function deleteSeverById(params) {
  const { id } = params;
  const result = await ServerRepo.deleteById(id);
  return result;
}
export async function deleteSeversById(params) {
  const { serverIds } = params;
  let servers = [];
  serverIds.forEach(async (id, i) => {
    await ServerRepo.deleteById(id);
    servers.push(i);
  });
  return `${servers.length} servers deleted`;
}
