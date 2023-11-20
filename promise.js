console.log('Start')
 
const newUser = new Promise((resolve, reject) =>{
setTimeout(() => {
    const userInfo = {
        name: 'Abdullah',
        age: 24
    }
    resolve(userInfo)
},3000)
})
newUser
    .then(res =>{
    console.log('** User Info received **')
    console.log(res)
})
console.log('End')