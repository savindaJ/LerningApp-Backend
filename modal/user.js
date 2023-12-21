
function updateUser(req, res) {
    const UpdateId = req.body.id;
    const UpdateName = req.body.name;

    let values = [UpdateName,UpdateId];

    const updateQuery = "UPDATE user SET user_name=?  where user_id=?";

    connection.query(updateQuery, values, function (err, result) {
        if (err) res.json(err.code.trim());
        console.log("Number of records UPDATED !: " + result.affectedRows);
        return res.json({state:'200'});
    });

}

const connection = require('../db/connection')
function insertUser(req,res){
    const id = req.body.id;
    const name = req.body.name;

    let values = [id,name];

        const insert = "INSERT INTO user VALUES (?,?)";

        connection.query(insert, values, function (err, result) {
            if (err) res.json(err.code);
            if (!result==null){
                console.log("Number of records inserted !: " + result.affectedRows);
            }
            return res.json({state:'200'});
        });

}

module.exports.insertUser = insertUser;
module.exports.updateUser = updateUser;