import { Router } from "express";
//import { route } from "express/lib/application";
import Task from '../models/Task';

const router = Router();

router.get("/", async (req, res) => {
    const tasks = await Task.find().lean();

    res.render("index", { tasks: tasks });
});

router.post("/tasks/add", async (req, res) => {
    try {
        const task = Task(req.body);

        // Añadir a mongodb
        await task.save();
        
        res.redirect("/");
    } catch(error) {
        console.log(error);
    }
});

router.get("/about", (req, res) => {
    res.render('about');
});

router.get("/edit", (req, res) => {
    res.render('edit');
});

export default router;