import ServerRepo from '../../database/repositories/ServerRepo.js';
import { NotFoundError } from '../../lib/errors/index.js';
export default async function deleteSeversById(params) {
  const [id] = params.serverIds;

  const server = await ServerRepo.getServerById(id);
  if (!server) throw new NotFoundError('Server does not exist');

  const result = await ServerRepo.deleteById(id);

  return {
    result,
  };
}
