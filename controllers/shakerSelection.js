const shakerDetails = {
    shaker1: {
        name: "Standard Shaker",
        specs: {
            force: "25kN",
            displacement: "16mm"
        }
    },
    shaker2: {
        name: "Heavy Duty Shaker",
        specs: {
            force: "35kN",
            displacement: "25mm"
        }
    },
    shaker3: {
        name: "Compact Shaker",
        specs: {
            force: "15kN",
            displacement: "12mm"
        }
    }
};

const shakerController = {
    getSelectedShaker: (req, res) => {
        const selectedShaker = req.query.shaker;
        res.status(200).json({shakers: 3, category: "mechanical"});
        if (selectedShaker && shakerDetails[selectedShaker]) {
            res.render('selectedShaker', {
                shaker: shakerDetails[selectedShaker]
            });
        } else {
            // If no shaker selected, show the form
            res.render('index');
        }
    },

    submitShakerChoice: (req, res) => {
        const selectedShaker = req.body.shaker;
        res.redirect(`/mssgs?shaker=${selectedShaker}`);
    }
};

module.exports = shakerController;