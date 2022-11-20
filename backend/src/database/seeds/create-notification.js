/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex("notifications").del();
  await knex("notifications").insert([
    {notificationId: 1, log: "easfhgrehegj//get/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 2},
    {notificationId: 2,  log: "ekfsdfwoeu8428sf ://hgrehegj//post/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 1},
    {notificationId: 3,  log: "hds382942r-32724JRWPIFW4RW ://egwf839//put/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 1},
    {notificationId: 4,  log: "ekfsdfwoeu8428sf ://lorem upsuarhgr//patch/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 2, created_at: knex.raw(`NOW() - INTERVAL 1 WEEK`)},
    {notificationId: 5,  log: "ekfsdfwoeu8428sf :lfvbag483ry43o//delete/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 1},
    {notificationId: 6,  log: "ekfsdfwoeu8428sf fgwer329t/post/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 2, created_at: knex.raw(`NOW() - INTERVAL 1 MONTH`)},
    {notificationId: 7,  log : "ekfsdfwoeu842dnveihfiewfrqknvsV RWG3  T59UYPRS//get/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 2},
  ]);
};
