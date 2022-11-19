/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
 export async function seed(knex) {
  // Deletes ALL existing entries
  // await knex("notifications").del();
  await knex("notifications").insert([
    {id: 1, notificationLog: "easfhgrehegj//get/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 2},
    {id: 2,  notificationLog: "ekfsdfwoeu8428sf ://hgrehegj//post/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 1},
    {id: 3,  notificationLog: "hds382942r-32724JRWPIFW4RW ://egwf839//put/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 1},
    {id: 4,  notificationLog: "ekfsdfwoeu8428sf ://lorem upsuarhgr//patch/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 2, createdAt: knex.raw(`NOW() - INTERVAL 1 WEEK`)},
    {id: 5,  notificationLog: "ekfsdfwoeu8428sf :lfvbag483ry43o//delete/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 1},
    {id: 6,  notificationLog: "ekfsdfwoeu8428sf fgwer329t/post/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 2, createdAt: knex.raw(`NOW() - INTERVAL 1 MONTH`)},
    {id: 7,  notificationLog : "ekfsdfwoeu842dnveihfiewfrqknvsV RWG3  T59UYPRS//get/----ngkfgrfjvrwr/lrojegje/getnkidnfigwhuwe", serverId: 2},
  ]);
};
