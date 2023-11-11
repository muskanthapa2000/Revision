module.exports =(sequelize , DataType)=>{
        const Students = sequelize.define("students" , {
            name : DataType.STRING,
            email : {
                type : DataType.STRING,
                allowNull : false 
            },
            age : DataType.INTEGER,
            courseID : {
                type : DataType.INTEGER,
                references : {
                    model : "courses",
                    key : "id"
                }
            }
        })

        return Students;
}