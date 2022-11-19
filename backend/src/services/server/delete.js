import ServerRepo from '../../database/repositories/ServerRepo.js';

export default async function deleteSeversById(params) {
  const { serverIds } = params;
  const servers = serverIds.map(async (id) => {
    await ServerRepo.deleteById(id);
  });
  return servers.length + ' servers deleted!';
}
