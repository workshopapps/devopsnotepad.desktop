import UserRepo from "../../database/repositories/UserRepo.js";

export async function create(params) {
    return await UserRepo.create({ ...params });
}

