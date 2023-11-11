module.exports =(sequelize , DataType)=>{
    const Courses = sequelize.define("courses" , {
        name : {
            type : DataType.STRING,
            allowNull : false 
        },
      
    })

    return Courses;
}