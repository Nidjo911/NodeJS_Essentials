exports.getMssgsControl = (req, res, next) => {
    console.log(req);
    console.log(res);
    res.status(200).json({mssgs: [1, 2, 3, 4], when: "today!"});
};