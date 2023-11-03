import Axios from "axios";
import router, { useRouter } from "next/router";
import { showNotification } from "~/utilities/common-helpers";
import firebase from "../config/firebase-config"
import apis from "../my-constants/Api";
import constants from "../my-constants/Constants";

const Login = (email,id,name)=>{
    Axios.post(apis.socialRegistration, {
        language:"English"  ,
        social_authId:id,
        name:name,
        email:email

    })
        .then((res) => {
            if (res.data.status === 1) {
                localStorage.setItem("session_id",res.data.data.details.session_id)
                localStorage.setItem("email",email)
                localStorage.setItem("name",name)
                localStorage.setItem("refer-code",res.data.data.details.refercode)

                dispatch(updateNavbar(true));

                    showNotification(
                       constants.Success,
                        res.data.message
                    );
                window.location.assign('/')


            }else{
              
                showNotification(
                    constants.Info,
                     res.data.message
                 );
            }

           


        })
        .catch((err) => {
            showNotification(constants.Error)
        });
}



const socialMediaAuth = (provider)=>{
    return firebase.auth().signInWithPopup(provider).then((res)=>{
   
        return(
            res.user,
            
            Login(res.additionalUserInfo.profile.email,res.additionalUserInfo.profile.id,res.additionalUserInfo.profile.name,)
        )

    })
    .catch((err)=>{

        return( 
            err
            )
    })
}

export default socialMediaAuth