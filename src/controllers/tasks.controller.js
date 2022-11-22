import Task from "../models/Task";

export const renderTasks = async (req, res) => {
  const tasks = await Task.find().lean();
  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    // Añadir a mongodb
    await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderTaskEdit = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();
    res.render("edit", { task: task });
  } catch (error) {
    console.log(error);
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndUpdate(id, req.body);

  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndRemove(id);

  res.redirect("/");
};

export const taskToggleDone = async (req, res) => {
  const { id } = req.params;

  // await Task.findByIdAndUpdate(id, { done: !req.body.done } );
  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save();

  res.redirect("/");
};
