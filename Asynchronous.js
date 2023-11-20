console.log('Start')
function userInfo(name){
    setTimeout(() => {
        console.log('** User info received **')
        return name
    }, 3000);
}

let userName = userInfo('Abdullah')
console.log(userName)
console.log('End')