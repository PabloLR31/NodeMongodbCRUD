import { Router } from "express";
import { route } from "express/lib/application";

const router = Router();

router.get("/", (req, res) => {
    res.render("index.hbs");
});

router.get("/about", (req, res) => {
    res.render('about.hbs');
})


export default router;