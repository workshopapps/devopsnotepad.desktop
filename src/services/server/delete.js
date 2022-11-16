import ServerRepo from "../../database/repositories/ServerRepo.js";

export async function deleteSeverById(params) {
  const { id } = params;
  const result = await ServerRepo.deleteById(id);
  return result;
}
export async function deleteSeversById(params) {
  const { serverIds } = params;
  serverIds.forEach(async (id) => {
    await ServerRepo.deleteById(id);
  });
  return "servers deleted";
}
