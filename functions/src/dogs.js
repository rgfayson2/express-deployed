export function getDogs(req,res) {
    res.send([
        { name: 'Ryder', age: 4, breed: 'Dumass', gender: 'MN'},
        { name: 'Duke', age: 2, breed: 'Rotweiler', gender: 'M'},
        { name: 'Indigo', age: 10, breed: 'Great Dane/ Lab Mix', gender: 'MN'},
        { name: 'Lacy', age: 6, breed: 'Pomagrainian', gender: 'F'},

        
    ]);
}

export function testApi(req, res) {
    res.send({success: true, message: 'API is working!' });
}