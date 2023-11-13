const {sequelize , students , courses} = require("./models");
const express = require("express");
const {op} = require("sequelize")

const app = express();
app.use(express.json())
app.get("/students" , async(req , res)=>{
        try {
            courses.hasMany(students , {foreignKey : "courseID"});
            students.belongsTo(courses , {foreignKey : "courseID"})
            const data = await students.findAll({
                include : [courses]
            });
            res.send(data);
        } catch (error) {
            res.send(error);
        }
})


app.get("/students/:search" , async(req , res)=>{
    try {
        courses.hasMany(students , {foreignKey : "courseID"});
        students.belongsTo(courses , {foreignKey : "courseID"})
        const data = await students.findAll({
            include : [courses],
            where : {
                name : {
                    [op.like] : `%${req.params.search}%`
                },
            },
        });
        res.send(data);
    } catch (error) {
        res.send(error);
    }
})

app.post("/students/add" , async (req , res)=>{
    try {
        const {name , email , age , courseID}= req.body;
        const data = await students.create({name , email , age , courseID});
        res.send(data)
    } catch (error) {
        res.send(error);
    }
})

app.put("/students/update/:id" ,async (req , res)=>{
    try {
       const data = await students.upsert({
        id : req.params.id,
        ...req.body
       })
       res.send(data);
    } catch (error) {
       res.send(error); 
    }
})


app.delete("/students/delete/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const result = await students.destroy({
            where: {
                id: id
            }
        });

        if (result === 1) {
            // Student deleted successfully
            res.status(200).send({ message: 'Student deleted successfully.' });
        } else {
            // No student found with the given ID
            res.status(404).send({ message: 'Student not found.' });
        }
    } catch (error) {
        res.status(500).send({ error: 'Internal Server Error' });
    }
});



app.post("/courses/add" , async (req , res)=>{
        try {
            const {name}= req.body;
            const data = await courses.create({name});
            res.send(data)
        } catch (error) {
            res.send(error);
        }
})

sequelize.sync().then(()=>{
    app.listen(8000  , ()=>{
        console.log("app is listening on port 8000")
    })
})