import ServerRepo from '../../database/repositories/ServerRepo.js';
import { NotFoundError } from '../../lib/errors/index.js';

export default async function getAllServers(query) {
    const { device, page, limit } = query;
    const currentPage = parseInt(page) || 1;
    const limits = parseInt(limit) || 12;

  const servers = await ServerRepo.getServersByDevice(device);
  if (!servers.length > 0) throw new NotFoundError('There are no servers added on this device');

    const paginated = paginateResults(servers, currentPage, limits);

    function paginateResults(servers, page, limit) {
            const startIndex = (page - 1) * limit;
            const endIndex = page * limit;
            const results = {};
            if (endIndex < servers.length) {
            results.next = {
                page: page + 1,
                limit: limit
            };
            }
        
            if (startIndex > 0) {
            results.previous = {
                page: page - 1,
                limit: limit
            };
            }
            results.results = servers.slice(startIndex, endIndex);
            return results;
        }

    return {
        message: `${servers.length} servers found on this device`,
        currentPage: currentPage,
        limit: limits,
        servers: paginated.results,
    };
}
