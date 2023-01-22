import ServerRepo from '../../database/repositories/ServerRepo.js';

export default async function getAllServers(query, id) {
    const { page, limit } = query;
    const currentPage = parseInt(page) || 1;
    const limits = parseInt(limit) || 12;

  const servers = await ServerRepo.getServersByUserId(id);

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
        message: `${servers.length} servers found`,
        currentPage: currentPage,
        limit: limits,
        servers: paginated.results,
    };
}
