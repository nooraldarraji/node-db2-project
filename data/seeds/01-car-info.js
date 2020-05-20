
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('car-dealer').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('car-dealer').insert([
        {
          VIN: 'KMHDU4ASEGA832403',
          make: 'Toyota',
          model: 'Corolla',
          mileage: '70000',
          transmission: 'auto',
          title: 'clean'
        },
        {
          VIN: 'KMHDU4ADXA5276403',
          make: 'Cehvi',
          model: 'Taho',
          mileage: '9000',
          transmission: 'auto',
          title: 'clean'
        },
        {
          VIN: 'KMHDU4A1237832403',
          make: 'Ford',
          model: 'F150',
          mileage: '1002',
          transmission: 'auto',
          title: 'clean'
        },
        {
          VIN: 'KMHDU1278AU832403',
          make: 'Toyota',
          model: 'Camry',
          mileage: '124444',
          transmission: 'auto',
          title: 'salvage'
        },
      ]);
    });
};
