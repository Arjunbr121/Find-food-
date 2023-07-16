const dbconnection = require("../Utils/dbUtils.js");
const util = require("util")

//function to list all the food item inside the database
exports.findAllFood = async (req, res, next) => {
    let connection = await dbconnection();
    const query = util.promisify(connection.query).bind(connection);
    let dishes = [];
    if (query) {
        dishes = await query('SELECT * FROM food;');
    }

    res.status(200).json({
        status: "success",
        "length": 4,
        data : dishes
    });
}


//function to add new food item to the list /foods/new
exports.addNewFood = async (req, res, next) => {
    let connection = await dbconnection();
    let { name, price, type, quantity } = req.body;
    const query = util.promisify(connection.query).bind(connection);

    let queryString = `INSERT INTO food(name, price, type, quantity) VALUES ('${name}', ${price}, '${type}', ${quantity})`;

    if (query) {
        let response = await query(queryString);
    }

    res.status(200).json({
        status: "success"
    })
}

//function to update the food item /foods/:id

exports.updateFood = async (req, res, next) => {
    let connection = await dbconnection();
    let query = util.promisify(connection.query).bind(connection);

    let { id: foodId } = req.params;

    if (query) {
        
        const food =  await query(`SELECT * FROM food where id = ${foodId};`);
        if (food.length > 0) {
            let { name, price, type, quantity } = req.body;
            const response = await query(`UPDATE food SET
                                        name = '${name}',
                                        price = ${price},
                                        type = '${type}',
                                        quantity = ${quantity}
                                        WHERE id = ${foodId}
                                            `);
            res.status(200).json({
                status: "success",
                "message" : `Food updated with id ${foodId}`
            })
        } else {
            res.status(404).json({
                status: "failed",
                "message" : "Food not found!"
            })
        }
    } else {
        res.status(500).json({
            status : "something went wrong at the backend!"
        })
    }
}

//function to delete the food from the database

exports.deleteFood = async (req, res, next) => {
    const connection = await dbconnection();
    const query = util.promisify(connection.query).bind(connection);
    const { id: foodId } = req.params;

    if (query) {
        const food = await query(`SELECT * FROM food WHERE id = ${foodId};`);
        if (food.length > 0) {
            await query(`DELETE FROM food WHERE id = ${foodId};`);
            res.status(200).json({
                "status": "success",
                "message": `Deleted food with ID ${foodId}`
            });
        } else {
            res.status(404).json({
                status: "failed",
                "message" : "Food not found!" 
            })
        }
    } else {
        res.status(500).json({
            status:"something went wrong at the backend!"
        })
    }
}

