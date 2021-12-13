/*
This is a class I use to help store data when I have multiple tasks with different fields.
It's probably overkill in the particular situation.

addFields is used to set up the header for each individual task.
recordData marks unused fields as NA, then sends the data to psiturk and saves it
*/
class DataManager {
  constructor() {
    this.fields = [];
  }

  addFields(newFields) {
    _.union(this.fields, newFields).forEach((i) => {
      this.fields.push(i);
    })
  }

  recordData(data) {
    var dataKeys = Object.keys(data);
    var recData = {};
    this.fields.forEach((h) => {
      recData[h] = 'NA';
    })

    dataKeys.forEach((k) => {
      recData[k] = data[k];
    })

    psiTurk.recordTrialData(recData);
    psiTurk.saveData(); // Consider if you want to save every trial
  }
}
