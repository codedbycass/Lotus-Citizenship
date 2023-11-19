//render the about page
    //even though there are no CRUD funcs currently, I decided to make a controller for about in case this application scales and requires CRUD ops
module.exports = {
    getAbout: (req, res) => {
        console.log("About page requested")
        res.render("about.ejs");
        }
    };