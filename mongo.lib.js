const mongoose = require("mongoose")

async function db(url) {
    return new Promise(async (resolve, reject) => {
        try {
            mongoose.connect(url);
            const connection = mongoose.connection;
            connection.once("open", () => {
                console.log("MongoDB connected");
                resolve();
            });
        } catch (error) {
            console.log("MongoDB not connected");
            reject(error);
        }

    })
};

module.exports = {
    db: db
}