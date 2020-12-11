const headers = {
    'Content-Type':'application/json',
    'Accept':'application/json',
    'Callback':'string',
    'Authorization': `Bearer ${process.env.URL}`
};

module.exports = headers;