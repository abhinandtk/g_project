import constants from "./Constants"

const labels = {
    
    'Store Location':'Store Location',
    'Track-your-order':"Track yourorder",
    'welcome-navbar-head':`Welcome to ${constants['ZAINBAY']} Online Shopping Store !`,
    'Shop by Department':'Shop by Department',
    'Sell on Martfury':'Sell on Martfury',

    'out of stock':'Out of Stock',

    "I'm Shopping for...":"I'm Shopping for..."

}

export default labels

export function Labels(language) {
  let labels;

  if (language=== "english") {
    labels = {

      //messages
        "Error":"Error",
        "Success":"Success",
        "Warning":"Warning",
        "Sorry":"Sorry",
        "Opps! Something Went Wrong":"Oops! something went wrong",
    
        'Store Location':'Store Location',
        'Track-your-order':"Track yourorder",
        'welcome-navbar-head':`Welcome to ${constants['ZAINBAY']} Online Shopping Store !`,
        'Shop by Department':'Shop by Department',
        'Sell on Martfury':'Sell on Martfury',
    
        'out of stock':'Out of Stock',
    
      //search
        "I'm Shopping for...":"I'm Shopping for...",
        'Search':'Search',
        'No product found':'No product found',
       ' See all results':"See all results",
        "Results for":"Results for",

      //Language
       "English":"English",
       "Arabic":"Arabic",

      //mini cart
       " Item Total:": "Item Total:",
       " View Cart": "View Cart",
       " No products in cart": "No products in cart",

      //account quick links
       "Account Information":"Account Information",
       "Notifications":"Notifications",
       "Invoices":"Invoices",
       "Address":"Address",
       "Recent Viewed Product":"Recent Viewed Product",
       "Wishlist":"Wishlist",
       "Logout":"Logout",
       "Register":"Register",
       "Login":"Login",
       "Change Password":"Change Password",
       "Orders":"Orders",
       "logout successfully":"Logout Successfully",
       "Verify With Otp":"Verify With Otp",
       "Verify Otp":"Verify Otp",




      //prouduct group
       "View All":"View All",
       ' % off':' % off',

      //site Features
       "Free Delivery":"Free & Fast Delivery",
       "For all oders over":"For orders over",
       "90 Days Return":"Easy Return Policy",
       "If goods have problems":"For eligible products",
       "Secure Payment":"100% Secure Payment",
       "100% secure payment":"100% Secure payment",
       "24/7 Support":"Loyal Customer Support",
       "Dedicated support":"Dedicated support",

      //product detail 
       "Brand: ":"Brand: ",
       "review":" Review ",
       "Add to cart":"Add to cart",
       "Quantity":"Quantity",
       "not eligible for return":"This product is not eligible for return",
       "eligible for return":"This product is eligible for return with in 10 Days",
       "Description":"Description",
       "Specification":"Specification",
       "Reviews":"Reviews",
       "Sort by rating: low to high":"Sort by rating: low to high",
       "Sort by rating: high to low":"Sort by rating: high to low",
       "Compare Products":"Compare Products",
        "Quickview":"Quickview",
        "Remove":"Remove",


       
      
      //account quicklink

      //Cart
      "Cart Updated Successfully":"Cart Updated Successfully",
      "please add Address before place order":"Please add Address before place order",
      "please choose any payment option":"Please choose any payment option",
      "Added to cart":"Added to cart",
      "No Stock!":"No Stock!",

      //footer
      "Connect us":"Connect us",
      "Locate us":"Locate us",
      "Contact us":"Contact us",
      "Call us 24/7":"9 am to 6 pm",
      "+97 4354 6020":"+971 4354 6020",
      "office no:102,":"Office No:102,",
      "Al Rostamani Building,":"Al Rostamani Building,",
      "Khalid Bin Al Waleed Rd,":"Khalid Bin Al Waleed Rd, ",
      "Bur Dubai ,Dubai":"Bur Dubai, Dubai, UAE",
      "UAE.United Arab Emirates":"UAE.United Arab Emirates",
      "Quick links":"Quick links",
      "E-waste Policy":"E-waste Policy",
      "Gava Privacy Policy":"Gava Privacy Policy",
      "Warranty":"Warranty",
      "Term & Condition":"Terms and Condition ",
      "Return policy":"Return and Exchange Policy ",
      "Shipping":"Shipping",
      "Return":"Return Policy",
      "FAQs":"FAQs",
      "Company":"Company",
      "About Us":"About Us",
      "Contact":"Contact",
      "My Account":"My Account",
      "Cart":"Cart",
      "Whishlist":"Whishlist",
      "2022 GAVA. All Rights Reserved":"2022 GAVA. All Rights Reserved",
      "We Using Safe Payment For:":"We Using Safe Payment For:",

      //my account
      "Address":"Address",
      "Change Password":"Change Password",
      "Orders":"Orders",
      "Address":"Address",
      "Address":"Address",


      //shop
      "Categories":"Categories",
      "By Brands":"By Brands",
      "By Quality":"By Quality",
      "By Price":"By Price",
      "By":"By",
      "Sort by latest":"Sort by latest",
      "Sort by price: low to high":"Sort by price: low to high",
      "Sort by most rating":"Sort by most rating",
      "Sort by price: high to low":"Sort by price: high to low",
      "Products found":"Products found",
      "Filter By":"Filter By",
      "Apply":"Apply",
      "clear":"Clear",

       //account
       "Log In Your Account":"Log In Your Account",
       "forgot password":"Forgot password",
       "Connect with:":"Connect with:",
       "Please input your email!":"Please input your email!",
       "Username or email address":"Username or email address",
       "Password...":"Password...",
       "Register An Account":"Register An Account",
       "Verify":"Verify",
       "Email Verifiation":"Email Verifiation",
       "Reset your password":"Reset your password",
       "Reset Password":'Reset Password',
       "Change Password":"Change Password",
       "My Orders":"My Orders",
       "View":"View",

      

       //shopping cart
        "Shopping cart":"Shopping cart",
        "No products in Cart":"No products in Cart",
        "Product":"Product",
        "Price":"Price",
        "Quantity":"Quantity",
        "Total":"Total",
        "Action":"Action",
        "Back to Shop":"Back to Shop",
        "Shipping Address":"Shipping Address",
        "Billing Address":"Billing Address",
        "Add address before place order":"Add address before place order",
        'Add Address':"Add Address",
        'Change':'Change',
        'Shipping Fee':"Shipping Fee",
        'Add Promocode':"Add Promocode",
        'Check':"Check",
        'Apply Reward Point':"Apply Reward Point",
        'Promocode Discount':"Promocode Discount",
        'Payment Method':"Payment Method",
        'Reward point Discount':"Reward point Discount",
        'Online':"Online",
        'Cash on delivery':"Cash on delivery",
        'Place Order':"Place Order",








       //Review
       "Rate and Review":"Rate and Review",
       "Rate this product":"Rate this product",
       "Title of this review":"Title of this review",
       "Add review":"Add review",
       "Remove review":"Remove review",

        //Address
      "Name":"Name",
      "Street Address":"Street Address",
      "State":"State",
      "Pincode":"Pincode",
      "Set this as default address":"Set as delivery address",
      "Set this as Billing address":"Set as Billing address",
      "Phone":"Phone",
      "Save Address":"Save Address",
      "Edit Address":"Edit Address",
      "You Have Not Set Address Yet.":"You Have Not Set Address Yet.",
      "Add":"Add",
      "Edit":"Edit",
      "District":"District",
      "Select District":"Select District",
      "Select State":"Select State",



      //wishlist
      "Wishlist is empty!":"Wishlist is empty!",
      "Product name":"Product name",
      "Unit Price":"Unit Price",
      

      //orders 
      "Invoice #":"Invoice #",
      "Payments":"Payments",
      "Cart total:":"Cart total:",
      "Promocode Discount:":"Promocode Discount:",
      "Reward point Discount:":"Reward point Discount:",
      "Payment Status:":"Payment Status:",
      "Cancel Order":"Cancel Order",
      "Amount":"Amount",
      "Date":"Date",
      "Status":"Status",
      "Back to Orders":"Back to Orders",


       //place order 
       "Thank you. Your order has been received.":"Thank you. Your order has been received.",
       "You have earned":"You have earned",
       "points":"points",
       "ORDER NUMBER:":"ORDER NUMBER:",
       "DATE:":"DATE:",
       "EMAIL:":"EMAIL:",
       "TOTAL:":"TOTAL:",
       "PAYMENT METHOD:":"PAYMENT METHOD:",
       "ORDER NUMBER:":"ORDER NUMBER:",
      "cart containes out of stock products, please remove":"cart containes out of stock products, please remove.",




      //mobile
      "Back to previous":"Back to previous",

      //home
      "Update Phone Number":"Please update phone number",
      "submit":"Submit",
      "cancel":"Later",










      //  //APIKEYS
      //  //Product group
      //  "categoryGroupName":"Category_Name"

    }
  }

  if (language === "arabic") {
    labels = {

      // home 
      "Update Phone Number":"تحديث رقم الهاتف",
      "submit":"المعنية",
      "cancel":"إلغاء",

      //mobile
      "Back to previous":"العودة إلى السابق",


      //Address
      "Name":"اسم",
      "Street Address":"عنوان الشارع",
      "State":"الإمارة",
      "Postcode":"الرمز البريدي",
      "Set this as default address":"قم بتعيين هذا كعنوان افتراضي",
      "Phone":"هاتف",
      "Save Address":"حفظ العنوان",
      "Edit Address":"تعديل العنوان",
      "You Have Not Set Address Yet.":"لم تحدد العنوان بعد.",
      "Add":"يضيف",
      "Edit":"يحرر",
      "District":"منطقة",
      "Select District":"اختر المنطقة",
      "Select State":"اختر الإمارة",


      //account
      "Log In Your Account":"تسجيل الدخول إلى حسابك",
      "forgot password":"هل نسيت كلمة السر",
      "Connect with:":"متصل مع:",
      "Please input your email!":"الرجاء إدخال البريد الإلكتروني الخاص بك!",
      "Username or email address":"اسم المستخدم أو البريد الالكتروني",
      "Password...":"كلمة المرور...",
      "Register An Account":"تسجيل حساب",
      "Verify":"يؤكد",
      "Email Verifiation":"التحقق من البريد الإلكتروني",
      "Reset your password":"اعد ضبط كلمه السر",
      "Reset Password":'إعادة تعيين كلمة المرور',
      "Change Password":"غير كلمة السر",
      "My Orders":"طلباتي",
      "View":"رأي",

      //orders 
      "Invoice #":"فاتورة #",
      "Payments":"المدفوعات",
      "Cart total:":"مجموع عربة التسوق:",
      "Promocode Discount:":"خصم الرمز الترويجي:",
      "Reward point Discount:":"خصم نقاط المكافأة:",
      "Payment Status:":"حالة السداد:",
      "Cancel Order":"الغاء الطلب",
      "Amount":"مقدار",
      "Date":"تاريخ",
      "Status":"حالة",
      "Back to Orders":"العودة للطلب",

      //place order 
      "Thank you. Your order has been received.":"شكرًا لك. تم استلام طلبك.",
      "You have earned":"كنت قد كسبت",
      "points":"نقاط",
      "ORDER NUMBER:":"رقم الطلب:",
      "DATE:":"تاريخ:",
      "EMAIL:":"البريد الإلكتروني",
      "TOTAL:":"المجموع",
      "PAYMENT METHOD:":"طريقة الدفع او السداد:",
      "cart containes out of stock products, please remove":"شكرًا لك. تم استلام طلبك.",



       //shopping cart
       "Shopping cart":"عربة التسوق",
       "No products in Cart":"لا توجد منتجات في سلة التسوق",
       "Product":"منتج",
       "Price":"سعر",
        "Quantity":"كمية",
        "Total":"المجموع",
        "Action":"عمل",
        "Back to Shop":"العودة إلى المتجر",
        "Shipping Address":"عنوان الشحن",
        "Add address before place order":"أضف العنوان قبل تقديم الطلب",
        'Add Address':"اضف عنوان",
        'Change':'يتغيرون',
        'Shipping Fee':"رسوم الشحن",
        'Add Promocode':"أضف الكود الترويجي",
        'Check':"يفحص",
        'Apply Reward Point':"تطبيق نقاط المكافأة",
        'Promocode Discount':"خصم بروموكود",
        'Payment Method':"طريقة الدفع او السداد",
        'Reward point Discount':"خصم نقاط المكافأة",
        'Online':"متصل",
        'Cash on delivery':"الدفع عند الاستلام " ,
        'Place Order':"مكان الامر",

        //wishlist
        "Wishlist is empty!":"قائمة الرغبات فارغة!",
        "Product name":"اسم المنتج",
        "Unit Price":"سعر الوحدة",




       //Review
       "Rate and Review":"معدل ومراجعة",
       "Rate this product":"قيم هذا المنتج",
       "Title of this review":"عنوان هذا الاستعراض",
       "Add review":"إضافة مراجعة",
       "Remove review":"إزالة المراجعة",

 

      //messages
      "Error":"خطأ",
      "Success":"النجاح",
      "Warning":"تحذير",
      "Sorry":"آسف",
      "Opps! Something Went Wrong":"عفوا! هناك خطأ ما",

     

      //search
        'Shop by Department':'التسوق حسب الأقسام',
        "I'm Shopping for...": '... أنا أتسوق ل ',
        'Search':"يبحث",
        'No product found':'لم يتم العثور على منتج ',
        "See all results":"مشاهدة كل النتائج",
        "Results for":"نتائج",

      
      //Language
        "English":"إنجليزي",
        "Arabic":"عربي",

      //mini cart
       " Item Total:": ":مجموع الاشياء",
       " View Cart": "عرض عربة التسوق",
       " No products in cart": "لا توجد منتجات في سلة التسوق",

      //account quick links
       "Account Information":"معلومات الحساب",
       "Notifications":"إشعارات",
       "Invoices":"الفواتير",
       "Address":"تبوك",
       "Recent Viewed Product":"المنتج الذي تم عرضه مؤخرًا",
       "Wishlist":"قائمة الرغبات",
       "Logout":"تسجيل خروج",
       "Register":"يسجل",
       "Login":" دخول ",
       "Change Password":"غير كلمة السر",
       "Orders":"ترتيب",
       "logout successfully":"تسجيل الخروج بنجاح",
       "Verify With Otp":"تحقق مع Otp",
        "Verify Otp":"تحقق من Otp",

       //prouduct group
       "View All":"مشاهدة الكل",
       ' % off':' ٪ إيقاف ',

      //site Features
        "Free Delivery":"توصيل مجاني وسريع",
        "For all oders over":"لجميع الطلبات التي تزيد عن دولارًا",
        "90 Days Return":"سياسة الإرجاع السهلة",
        "If goods have problems":"للمنتجات المؤهلة",
        "Secure Payment":"100٪ دفع آمن",
        "100% secure payment":"100٪ دفع آمن",
        "24/7 Support":"دعم العملاء الأوفياء",
        "Dedicated support":"دعم مخصص",

       
      //product detail 
        "Brand: ":":ماركة",
        "review":" إعادة النظر ",
        "Add to cart":"أضف إلى السلة",
        "Quantity":"كمية",
        "No Stock!":"لا يوجد مخزون!",
        "not eligible for return":"هذا المشروع غير مؤهل للعودة",
        "eligible for return":"هذا المنتج مؤهل للإرجاع خلال 10 أيام",
        "Description":" وصف",
        "Specification":"تخصيص",
        "Reviews":"المراجعات",
        "Sort by latest":"رتيب حسب الأحدث",
        "Sort by rating: low to high":"الترتيب حسب التصنيف: من الأقل إلى الأعلى",
        "Sort by rating: high to low":"الترتيب حسب التصنيف: من الأعلى إلى الأقل",
        "Compare Products":"قارن بين المنتجات",
        "Quickview":"نظرة سريعة",
        "Remove":"إزالة",



       
      //Cart
        "Cart Updated Successfully":" تم تحديث سلة التسوق بنجاح " ,
        "please add Address before place order":"يرجى إضافة العنوان قبل تقديم الطلب",
        "please choose any payment option":"الرجاء اختيار أي خيار دفع",
        "Added to cart":"تمت الإضافة إلى عربة التسوق",

      //footer
        "Locate us":"حدد موقعنا",
        "Contact us":"اتصل بنا",
        "Connect us":"قم بتوصيلنا",
        "Call us 24/7":" من 9 صباحًا حتى 6 مساءً ",
        "+97 4354 6020":"+971 4354 6020",
        "office no:102,":"رقم المكتب: 102",
        "Al Rostamani Building,":"بناية الرستماني ،",
        "Khalid Bin Al Waleed Rd,":"خالد بين أل وليد رد,",
        "Bur Dubai ,Dubai":"UAE ,بر دبي ، دبي",
        "UAE.United Arab Emirates":"الإمارات العربية المتحدة",
        "Quick links":"روابط سريعة",
        "Policy":"سياسة",
        "Term & Condition":"الشروط و الأحكام ",
        "Shipping":"شحن",
        "Return":"يعود",
        "FAQs":"أسئلة وأجوبة",
        "Company":"شركة",
        "About Us":"معلومات عنا",
        "Contact":"اتصال",
        "2022 Zainbay. All Rights Reserved":"2022 زينباي. كل الحقوق محفوظة",
        "We Using Safe Payment For:":"نحن نستخدم الدفع الآمن من أجل:",

      //my account
        "Address":"تبوك",
        "Change Password":"غير كلمة السر",
        "Orders":"الطلب",

      //shop
      "Categories":"فئات",
      "By Brands":"حسب الماركات",
      "By Price":"حسب السعر",
      "By":"بواسطة",
      "Sort by latest":"ترتيب حسب الأحدث",
      "Sort by price: low to high":"الترتيب حسب السعر: من الأقل إلى الأعلى",
      "Sort by most rating":"ترتيب حسب الأكثر تصنيفا",
      "Sort by price: high to low":"الترتيب حسب السعر: من الأعلى إلى الأقل",
      "Products found":"تم العثور على المنتجات",
      "Filter By":"مصنف بواسطة",
      "Apply":"يتقدم",
      "clear":"صافي",




        


      //  //APIKEYS
      //  //Product group
      //  "categoryGroupName":"slug_category"
    };
  }

  return labels;

}
