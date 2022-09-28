const path=require("path")
//path.sep provides \ for windows / for linux and mac
//path.delimiter provides ; for windows :for linux and mac
console.log(path.basename("/home/school/teacher"))
console.log(path.dirname("/home/school/teacher"))
console.log(path.extname("/home/school/teacher.txt"))
//path.format accept object with following key : root,dir,base,name,ext  returns a string in format root>dir>base(or name>ext)
console.log(path.format({root:"/home",base:"/book.txt"}))
//al the examples are linux based as it is forward line
console.log(path.isAbsolute("./home/user"))
const name="jon"
console.log(path.join("/","/home","/users",name,"/books"))
console.log(path.normalize("/user/home/books/../book.txt"))
console.log(path.normalize("/user/home/books/../../book.txt"))
console.log(path.parse("/user/home/books"))
console.log(path.relative("/user/home/book","/user/home/text"))
console.log(path.resolve("index.js"))
console.log(path.join(__dirname,'../population/index.js'))