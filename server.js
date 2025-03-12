const express = require("express");
const connectDB = require("./config/database");
const Holiday = require("./config/holiday");

const app = express();
app.set("view engine", "ejs");

connectDB();

// Middleware pour gérer les formulaires
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.get("/favicon.ico", (req, res) => res.status(204).end());

/* READ - Afficher 20 ferie */
app.get("/", async (req, res) => {
    try {
        const holidays = await Holiday.find().sort({ date: 1, _id: 1 }).limit(20);
        res.render("index", { holidays });
    } catch (err) {
        res.status(500).send("Erreur lors du chargement des jours fériés");
    }
});

/* CREATE - Afficher add form */
app.get("/add", (req, res) => {
    res.render("add");
});
/* CREATE - Ajouter ferie */
app.post("/add", async (req, res) => {
    try {
        const { nom_jour_ferie, date } = req.body;
        const newHoliday = new Holiday({ nom_jour_ferie, date });
        await newHoliday.save();
        res.redirect("/");
    } catch (err) {
        console.error(err);
        res.status(500).send("Erreur lors de l'ajout du jour férié");
    }
});

/* UPDATE - Afficher edit form */
app.get("/edit/:id", async (req, res) => {
    try {
        const holiday = await Holiday.findById(req.params.id);
        res.render("edit", { holiday });
    } catch (err) {
        res.status(500).send("Erreur lors du chargement du jour férié");
    }
});
/* UPDATE - Modifier ferie */
app.post("/edit/:id", async (req, res) => {
    try {
        await Holiday.findByIdAndUpdate(req.params.id, {
            nom_jour_ferie: req.body.nom_jour_ferie,
            date: req.body.date
        });
        res.redirect("/");
    } catch (err) {
        res.status(500).send("Erreur lors de la modification");
    }
});

/* DELETE ferie */
app.post("/delete/:id", async (req, res) => {
    try {
        await Holiday.findByIdAndDelete(req.params.id);
        res.redirect("/");
    } catch (err) {
        res.status(500).send("Erreur lors de la suppression");
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
