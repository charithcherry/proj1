// function add(a,b){
// return a+b
// }
const add = (a, b) => {
    return a+b 
}
console.log(add(1,2))
const http=require("http")
const server =http.createServer((req, res) => {
    console.log(req)
console.log( "the url",req.url)
console.log("the method ",req.method)
if(req.url=='/')
{
    res.write('<html>')
    res.write('<head><title>sup</title></head>')
    res.write('<body>hello')
    res.write('<form action ="/message" method="POST"><input type="text" name="message"></button type="submit">Submit</button</form>')
    res.write('<html>')
    
}



}