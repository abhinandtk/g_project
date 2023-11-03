import { notification } from "antd";
import { useSelector } from "react-redux";
import constants from "~/public/static/data/my-constants/Constants";
import { Labels } from "~/public/static/data/my-constants/Labels";

export const stickyHeader = () => {
    let number =
        window.pageXOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0;
    const header = document.getElementById('headerSticky');
    if (header !== null) {
        if (number >= 100) {
            header.classList.add('header--sticky');
        } else {
            header.classList.remove('header--sticky');
        }
    }
};

export const generateTempArray = (maxItems) => {
    let result = [];

    for (let i = 0; i < maxItems; i++) {
        result.push(i);
    }
    return result;
};

{/* <ConfigProvider direction="ltr"> */}
// const language = useSelector((state) => state.datas.language);

// const labels = Labels(language);


export const showNotification = (language,messageType,description,) => {
    const labels = Labels(language);

    notification.config({
        duration: 2,
      });


    if (messageType === "Error") {
        return notification["error"]({
        
        message: labels['Error']  ,
        description:labels['Opps! Something Went Wrong'],
        className: 'notification__custom',
        // rtl: language === constants.Arabic ?true :false ,
      });
    }

    if (messageType === "Success") {
        return notification["success"]({
        
            message: labels['Success']  ,
            description:description,
            
            // rtl: language === constants.Arabic ?true :false ,
          });
    }

    if (messageType === constants.Sorry) {
        return notification["warning"]({
        
            message: labels['Sorry']  ,
            description:description,
            // rtl: language === constants.Arabic ?true :false ,
          });
    }
    
    if (messageType === constants.Info) {
        return notification["warning"]({
        
            message:labels['Sorry']  ,
            description:description,
            // rtl: language === constants.Arabic ?true :false ,
          });
    }



};
