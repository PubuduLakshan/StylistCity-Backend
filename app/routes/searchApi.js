
const Op = require('sequelize').Op;

module.exports= function(app,db){


// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/search', (req, res) => {
    const sendObj = req.body.searchedObj;
    console.log(sendObj);
    db.Stylist.findAll().then( (result) => res.json(result) )
});

app.post('/search', (req, res) => {
    const sendObj = req.body.searchedObj;

    db.Stylist.findAll({
     where :{city:sendObj.location,type: sendObj.category, country:sendObj.gender}
     /* where: {
      [Op.or]: [{city: sendObj.location}, {type: sendObj.category },{}]
       }*/
    }
    ).then( (result) => {
        if(result!== null){res.json(result)}
        else{res.send("Result Not Found")}
        } 
        ); 
});


}   
    
