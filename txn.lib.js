const EtheureumModel = require("./ethereum.model");
const _ = require("lodash");

module.exports = async function getTransactions(address, page, limit) {
  return new Promise(async (resolve, reject) => {
    try {
      let transactionHashJSONDataList = await EtheureumModel.find({
        address: address,
      })
        .skip((page - 1) * limit)
        .limit(limit);

      if (_.isEmpty(transactionHashJSONDataList)) {
        resolve(null);
      }
      resolve(transactionHashJSONDataList);
    } catch (error) {
      reject(error);
    }
  });
};
