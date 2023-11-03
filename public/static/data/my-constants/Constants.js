
let session_id ;
let userName, language, rewardPoint,email,productVariantId,quantity;
    if (typeof window !== 'undefined') {
        if ( localStorage.getItem("language")  === null) {
            language = "english"
        }

        if ( localStorage.getItem("language")  !== null) {
            language = localStorage.getItem("language")
        }

        session_id = localStorage.getItem("session_id")
        userName = localStorage.getItem("name")
        rewardPoint = localStorage.getItem("rewardPoint")
        email = localStorage.getItem("email")
        productVariantId = JSON.parse(
            localStorage.getItem('productVariantId')
        )
        quantity = JSON.parse(localStorage.getItem('quantity'))
       

    } else {
        session_id = null
        userName = null
        language= "english"
        rewardPoint = null 
        email = null 
        productVariantId = null
        quantity = null

    }



const constants = {
   
    // port:"http://127.0.0.1:8000",
    port:"https://app.gava.co.in",

    
    'GAVA':'GAVA',
    'sessionId':session_id,
    'userName':userName,    
    'email':email,

    "English":"english",
    "Arabic":"arabic",

    "primaryColor":'#00438b',
    "secondaryColor":'#ef2c1e',

    'language':"english",

    'rewardPoint':rewardPoint,

    "productVariantId":productVariantId,
    "quantity":quantity,

    "oops something went wrong":"oops something went wrong",

    "Error":"Error",
    "Success":"Success",
    "Sorry":"Sorry",
    "Info":"Info"    
    
}

export default constants

