function check_ch_phone(phone){
    let myReg = /^1[3|4|5|8]\d{9}$/
    let flag = myReg.test(phone)
    console.log(flag)
}

function check_repeat_word(word){
    let myReg = /\b([A-Za-z]+)\s\1\b/
    //let myReg =/\b([A-Za-z]+)\s+\1\b/
    let flag = myReg.test(word)
    //let test = myReg.exec(word)
    console.log(flag)

}

check_ch_phone(15882810521)
check_repeat_word("bar bar aaa")    