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
// app.get("/students" , async(req , res)=>{
//     try {
//         courses.hasMany(students , {foreignKey : "courseID"});
//         students.belongsTo(courses , {foreignKey : "courseID"})
//         const data = await students.findAll({
//             include : [courses]
//         });
//         res.send(data);
//     } catch (error) {
//         res.send(error);
//     }
// })

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
        const {name , email , age , couseID}= req.body;
        const data = await students.create({name , email , age , couseID});
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


app.put("/students/delete/:id" ,async (req , res)=>{
    try {
       const data = await students.destroy({
        id : req.params.id,
        ...req.body
       })
       res.send(data);
    } catch (error) {
       res.send(error); 
    }
})


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