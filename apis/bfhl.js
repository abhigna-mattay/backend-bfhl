//importing required modules
const express=require('express')
const router = express.Router();

// POST endpoint for /bfhl
router.post('/', (req, res) => {
    //get the data by parsing the body
    const { data } = req.body;

    // Initialize arrays to store numbers and alphabets
    let numbers = [];
    let alphabets = [];

    // traverse the data to separate numbers and alphabets
    data.forEach(item => {
        if (!isNaN(item)) { // Checking if the item is a number 
            numbers.push(item);
        } 
        else if (typeof item === 'string' && /^[a-zA-Z]$/.test(item)) { // Check if the item is an alphabet character 
            alphabets.push(item);
        }
    });

    // finding out the highest alphabet
    let highest_alphabet = [];
    if (alphabets.length > 0) {
        const highest = alphabets.reduce((a, b) => 
            a.toLowerCase() > b.toLowerCase() ? a : b
        );
        highest_alphabet = [highest];
    }
    try {
        res.send({
            "is_success": true,
            "user_id": "lakshmiabhigna_mattay_26092003",
            "email" : "lakshmiabhigna_mattay@srmap.edu.in",
            "roll_number":"AP21110010343",
            "numbers": numbers,
            "alphabets": alphabets,
            "highest_alphabet":highest_alphabet
        })
    }
    catch(error){
        res.send({
            "is_success":false,
            "error":error
        })
    }
});

// GET endpoint for /bfhl
router.get('/', (req, res) => {
    // Prepare the hardcoded response
    const response = {
        "operation_code": 1
    };

    // Send the response with HTTP status code 200
    res.status(200).json(response);
});


// exporting the router
module.exports = router;