const express = require('express');
const jacklupRouteRoutes = express.Router();

let FeedBacks = require('./feedback.model');

jacklupRouteRoutes.route('/addfeedback').post(function (req,res){
    let feedBacks = new FeedBacks(req.body);
    feedBacks.save()
        .then(feedBacks => {
            res.status(200).json({'feedBack' : 'feedBack is added successfull'});
        })
        .catch(err => {
            res.status(400).send("Unable to save database")
        });
});

jacklupRouteRoutes.route('/feedback').get(function (req, res){
    
    FeedBacks.find(function (err,feed){
        if(err)
            console.log(err);
        else{
            res.json(feed)
        }
    });

});

// businessRoutes.route('/edit/:id').get(function (req,res){
//     let id = req.params.id;
//     Customers.findById(id, function (err,customers){
//         res.json(customers);
//     });
// });

// businessRoutes.route('/update/:id').post(function (req,res){
//     let id = req.params.id;
//     Customers.findById(id, function (err, customers){
//         if(!customers)
//             res.status(404).send("Data is not found??");
//         else{
//             customers.name = req.body.name;
//             customers.address = req.body.address;
//             customers.nic = req.body.nic;
//             customers.phone = req.body.phone;
//             customers.customer_type = req.body.customer_type;
//             customers.email = req.body.email;
//             customers.password = req.body.password;


//             customers.save().then(business => {
//                 res.json('Update Complete');
//             })
//                 .catch(err =>{
//                     res.status(400).send("Unable to update data");
//                 });
//         }
//     });
// });

// businessRoutes.route('/delete/:id').get(function(req,res){
//     Customers.findByIdAndRemove({_id:req.params.id}, function (err, customers){
//         if(err)res.json(err);

//         else res.json('Successfully Removed');
//     });
// });

module.exports = jacklupRouteRoutes;