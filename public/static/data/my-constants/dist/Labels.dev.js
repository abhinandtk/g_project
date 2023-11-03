"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Labels = Labels;
exports["default"] = void 0;

var _Constants = _interopRequireDefault(require("./Constants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var labels = {
  'Store Location': 'Store Location',
  'Track-your-order': "Track yourorder",
  'welcome-navbar-head': "Welcome to ".concat(_Constants["default"]['ZAINBAY'], " Online Shopping Store !"),
  'Shop by Department': 'Shop by Department',
  'Sell on Martfury': 'Sell on Martfury',
  'out of stock': 'Out of Stock',
  "I'm Shopping for...": "I'm Shopping for..."
};
var _default = labels;
exports["default"] = _default;

function Labels(language) {
  var labels;

  if (language === "english") {
    var _labels;

    labels = (_labels = {
      //messages
      "Error": "Error",
      "Success": "Success",
      "Warning": "Warning",
      "Sorry": "Sorry",
      "Opps! Something Went Wrong": "Oops! something went wrong",
      'Store Location': 'Store Location',
      'Track-your-order': "Track yourorder",
      'welcome-navbar-head': "Welcome to ".concat(_Constants["default"]['ZAINBAY'], " Online Shopping Store !"),
      'Shop by Department': 'Shop by Department',
      'Sell on Martfury': 'Sell on Martfury',
      'out of stock': 'Out of Stock',
      //search
      "I'm Shopping for...": "I'm Shopping for...",
      'Search': 'Search',
      'No product found': 'No product found',
      ' See all results': "See all results",
      "Results for": "Results for",
      //Language
      "English": "English",
      "Arabic": "Arabic",
      //mini cart
      " Item Total:": "Item Total:",
      " View Cart": "View Cart",
      " No products in cart": "No products in cart",
      //account quick links
      "Account Information": "Account Information",
      "Notifications": "Notifications",
      "Invoices": "Invoices",
      "Address": "Address",
      "Recent Viewed Product": "Recent Viewed Product",
      "Wishlist": "Wishlist",
      "Logout": "Logout",
      "Register": "Register",
      "Login": "Login",
      "Change Password": "Change Password",
      "Orders": "Orders",
      "logout successfully": "Logout Successfully",
      "Verify With Otp": "Verify With Otp",
      "Verify Otp": "Verify Otp",
      //prouduct group
      "View All": "View All",
      ' % off': ' % off',
      //site Features
      "Free Delivery": "Free Delivery",
      "For all oders over": "For orders over",
      "90 Days Return": "7 Days Return",
      "If goods have problems": "For eligible products",
      "Secure Payment": "Secure Payment",
      "100% secure payment": "100% secure payment",
      "24/7 Support": "24/7 Support",
      "Dedicated support": "Dedicated support",
      //product detail 
      "Brand: ": "Brand: ",
      "review": " review ",
      "Add to cart": "Add to cart",
      "Quantity": "Quantity",
      "not eligible for return": "This product is not eligible for return",
      "eligible for return": "This product is eligible for return with in 10 Days",
      "Description": "Description",
      "Specification": "Specification",
      "Reviews": "Reviews",
      "Sort by rating: low to high": "Sort by rating: low to high",
      "Sort by rating: high to low": "Sort by rating: high to low",
      "Compare Products": "Compare Products",
      "Quickview": "Quickview",
      "Remove": "Remove",
      //account quicklink
      //Cart
      "Cart Updated Successfully": "Cart Updated Successfully",
      "please add Address before place order": "please add Address before place order",
      "please choose any payment option": "please choose any payment option",
      "Added to cart": "Added to cart",
      "No Stock!": "No Stock!",
      //footer
      "Contact us": "Contact us",
      "Call us 24/7": "Call us 24/7",
      "+97 4354 6020": "+97 4354 6020",
      "office no:102,": "Office No:102,",
      "Al Rostamani Building,": "Al Rostamani Building,",
      "Khalid Bin Al Waleed Rd,": "Khalid Bin Al Waleed Rd,",
      "Bur Dubai ,Dubai": "Bur Dubai ,Dubai",
      "UAE.United Arab Emirates": "UAE.United Arab Emirates",
      "Quick links": "Quick links",
      "Policy": "Policy",
      "Term & Condition": "Terms and Condition ",
      "Shipping": "Shipping",
      "Return": "Return Policy",
      "FAQs": "FAQs",
      "Company": "Company",
      "About Us": "About Us",
      "Contact": "Contact",
      "2022 Zainbay. All Rights Reserved": "2022 Zainbay. All Rights Reserved",
      "We Using Safe Payment For:": "We Using Safe Payment For:"
    }, _defineProperty(_labels, "Address", "Address"), _defineProperty(_labels, "Change Password", "Change Password"), _defineProperty(_labels, "Orders", "Orders"), _defineProperty(_labels, "Address", "Address"), _defineProperty(_labels, "Address", "Address"), _defineProperty(_labels, "Categories", "Categories"), _defineProperty(_labels, "By Brands", "By Brands"), _defineProperty(_labels, "By Price", "By Price"), _defineProperty(_labels, "By", "By"), _defineProperty(_labels, "Sort by latest", "Sort by latest"), _defineProperty(_labels, "Sort by price: low to high", "Sort by price: low to high"), _defineProperty(_labels, "Sort by most rating", "Sort by most rating"), _defineProperty(_labels, "Sort by price: high to low", "Sort by price: high to low"), _defineProperty(_labels, "Products found", "Products found"), _defineProperty(_labels, "Filter By", "Filter By"), _defineProperty(_labels, "Apply", "Apply"), _defineProperty(_labels, "clear", "clear"), _defineProperty(_labels, "Log In Your Account", "Log In Your Account"), _defineProperty(_labels, "forgot password", "forgot password"), _defineProperty(_labels, "Connect with:", "Connect with:"), _defineProperty(_labels, "Please input your email!", "Please input your email!"), _defineProperty(_labels, "Username or email address", "Username or email address"), _defineProperty(_labels, "Password...", "Password..."), _defineProperty(_labels, "Register An Account", "Register An Account"), _defineProperty(_labels, "Verify", "Verify"), _defineProperty(_labels, "Email Verifiation", "Email Verifiation"), _defineProperty(_labels, "Reset your password", "Reset your password"), _defineProperty(_labels, "Reset Password", 'Reset Password'), _defineProperty(_labels, "Change Password", "Change Password"), _defineProperty(_labels, "My Orders", "My Orders"), _defineProperty(_labels, "View", "View"), _defineProperty(_labels, "Shopping cart", "Shopping cart"), _defineProperty(_labels, "No products in Cart", "No products in Cart"), _defineProperty(_labels, "Product", "Product"), _defineProperty(_labels, "Price", "Price"), _defineProperty(_labels, "Quantity", "Quantity"), _defineProperty(_labels, "Total", "Total"), _defineProperty(_labels, "Action", "Action"), _defineProperty(_labels, "Back to Shop", "Back to Shop"), _defineProperty(_labels, "Shipping Address", "Shipping Address"), _defineProperty(_labels, "Add address before place order", "Add address before place order"), _defineProperty(_labels, 'Add Address', "Add Address"), _defineProperty(_labels, 'Change', 'Change'), _defineProperty(_labels, 'Shipping Fee', "Shipping Fee"), _defineProperty(_labels, 'Add Promocode', "Add Promocode"), _defineProperty(_labels, 'Check', "Check"), _defineProperty(_labels, 'Apply Reward Point', "Apply Reward Point"), _defineProperty(_labels, 'Promocode Discount', "Promocode Discount"), _defineProperty(_labels, 'Payment Method', "Payment Method"), _defineProperty(_labels, 'Reward point Discount', "Reward point Discount"), _defineProperty(_labels, 'Online', "Online"), _defineProperty(_labels, 'Cash on delivery', "Cash on delivery"), _defineProperty(_labels, 'Place Order', "Place Order"), _defineProperty(_labels, "Rate and Review", "Rate and Review"), _defineProperty(_labels, "Rate this product", "Rate this product"), _defineProperty(_labels, "Title of this review", "Title of this review"), _defineProperty(_labels, "Add review", "Add review"), _defineProperty(_labels, "Remove review", "Remove review"), _defineProperty(_labels, "Name", "Name"), _defineProperty(_labels, "Street Address", "Street Address"), _defineProperty(_labels, "State", "State"), _defineProperty(_labels, "Postcode", "Postcode"), _defineProperty(_labels, "Set this as default address", "Set as delivery address"), _defineProperty(_labels, "Phone", "Phone"), _defineProperty(_labels, "Save Address", "Save Address"), _defineProperty(_labels, "Edit Address", "Edit Address"), _defineProperty(_labels, "You Have Not Set Address Yet.", "You Have Not Set Address Yet."), _defineProperty(_labels, "Add", "Add"), _defineProperty(_labels, "Edit", "Edit"), _defineProperty(_labels, "Region", "Region"), _defineProperty(_labels, "Select Region", "Select Region"), _defineProperty(_labels, "Wishlist is empty!", "Wishlist is empty!"), _defineProperty(_labels, "Product name", "Product name"), _defineProperty(_labels, "Unit Price", "Unit Price"), _defineProperty(_labels, "Invoice #", "Invoice #"), _defineProperty(_labels, "Payments", "Payments"), _defineProperty(_labels, "Cart total:", "Cart total:"), _defineProperty(_labels, "Promocode Discount:", "Promocode Discount:"), _defineProperty(_labels, "Reward point Discount:", "Reward point Discount:"), _defineProperty(_labels, "Payment Status:", "Payment Status:"), _defineProperty(_labels, "Cancel Order", "Cancel Order"), _defineProperty(_labels, "Amount", "Amount"), _defineProperty(_labels, "Date", "Date"), _defineProperty(_labels, "Status", "Status"), _defineProperty(_labels, "Back to Orders", "Back to Orders"), _defineProperty(_labels, "Thank you. Your order has been received.", "Thank you. Your order has been received."), _defineProperty(_labels, "You have earned", "You have earned"), _defineProperty(_labels, "points", "points"), _defineProperty(_labels, "ORDER NUMBER:", "ORDER NUMBER:"), _defineProperty(_labels, "DATE:", "DATE:"), _defineProperty(_labels, "EMAIL:", "EMAIL:"), _defineProperty(_labels, "TOTAL:", "TOTAL:"), _defineProperty(_labels, "PAYMENT METHOD:", "PAYMENT METHOD:"), _defineProperty(_labels, "ORDER NUMBER:", "ORDER NUMBER:"), _defineProperty(_labels, "cart containes out of stock products, please remove", "cart containes out of stock products, please remove."), _defineProperty(_labels, "Back to previous", "Back to previous"), _defineProperty(_labels, "Update Phone Number", "Please update phone number"), _defineProperty(_labels, "submit", "Submit"), _defineProperty(_labels, "cancel", "Later"), _labels);
  }

  if (language === "arabic") {
    var _labels2;

    labels = (_labels2 = {
      // home 
      "Update Phone Number": "تحديث رقم الهاتف",
      "submit": "المعنية",
      "cancel": "إلغاء",
      //mobile
      "Back to previous": "العودة إلى السابق",
      //Address
      "Name": "اسم",
      "Street Address": "عنوان الشارع",
      "State": "حالة",
      "Postcode": "الرمز البريدي",
      "Set this as default address": "قم بتعيين هذا كعنوان افتراضي",
      "Phone": "هاتف",
      "Save Address": "حفظ العنوان",
      "Edit Address": "تعديل العنوان",
      "You Have Not Set Address Yet.": "لم تحدد العنوان بعد.",
      "Add": "يضيف",
      "Edit": "يحرر",
      "Region": "منطقة",
      "Select Region": "اختر المنطقة",
      //account
      "Log In Your Account": "تسجيل الدخول إلى حسابك",
      "forgot password": "هل نسيت كلمة السر",
      "Connect with:": "متصل مع:",
      "Please input your email!": "الرجاء إدخال البريد الإلكتروني الخاص بك!",
      "Username or email address": "اسم المستخدم أو البريد الالكتروني",
      "Password...": "كلمة المرور...",
      "Register An Account": "تسجيل حساب",
      "Verify": "يؤكد",
      "Email Verifiation": "التحقق من البريد الإلكتروني",
      "Reset your password": "اعد ضبط كلمه السر",
      "Reset Password": 'إعادة تعيين كلمة المرور',
      "Change Password": "غير كلمة السر",
      "My Orders": "طلباتي",
      "View": "رأي",
      //orders 
      "Invoice #": "فاتورة #",
      "Payments": "المدفوعات",
      "Cart total:": "مجموع عربة التسوق:",
      "Promocode Discount:": "خصم الرمز الترويجي:",
      "Reward point Discount:": "خصم نقاط المكافأة:",
      "Payment Status:": "حالة السداد:",
      "Cancel Order": "الغاء الطلب",
      "Amount": "مقدار",
      "Date": "تاريخ",
      "Status": "حالة",
      "Back to Orders": "العودة للطلب",
      //place order 
      "Thank you. Your order has been received.": "شكرًا لك. تم استلام طلبك.",
      "You have earned": "كنت قد كسبت",
      "points": "نقاط",
      "ORDER NUMBER:": "رقم الطلب:",
      "DATE:": "تاريخ:",
      "EMAIL:": "البريد الإلكتروني",
      "TOTAL:": "المجموع",
      "PAYMENT METHOD:": "طريقة الدفع او السداد:",
      "cart containes out of stock products, please remove": "شكرًا لك. تم استلام طلبك.",
      //shopping cart
      "Shopping cart": "عربة التسوق",
      "No products in Cart": "لا توجد منتجات في سلة التسوق",
      "Product": "منتج",
      "Price": "سعر",
      "Quantity": "كمية",
      "Total": "المجموع",
      "Action": "عمل",
      "Back to Shop": "العودة إلى المتجر",
      "Shipping Address": "عنوان الشحن",
      "Add address before place order": "أضف العنوان قبل تقديم الطلب",
      'Add Address': "اضف عنوان",
      'Change': 'يتغيرون',
      'Shipping Fee': "رسوم الشحن",
      'Add Promocode': "أضف الكود الترويجي",
      'Check': "يفحص",
      'Apply Reward Point': "تطبيق نقاط المكافأة",
      'Promocode Discount': "خصم بروموكود",
      'Payment Method': "طريقة الدفع او السداد",
      'Reward point Discount': "خصم نقاط المكافأة",
      'Online': "متصل",
      'Cash on delivery': "الدفع عند الاستلام ",
      'Place Order': "مكان الامر",
      //wishlist
      "Wishlist is empty!": "قائمة الرغبات فارغة!",
      "Product name": "اسم المنتج",
      "Unit Price": "سعر الوحدة",
      //Review
      "Rate and Review": "معدل ومراجعة",
      "Rate this product": "قيم هذا المنتج",
      "Title of this review": "عنوان هذا الاستعراض",
      "Add review": "إضافة مراجعة",
      "Remove review": "إزالة المراجعة",
      //messages
      "Error": "خطأ",
      "Success": "النجاح",
      "Warning": "تحذير",
      "Sorry": "آسف",
      "Opps! Something Went Wrong": "عفوا! هناك خطأ ما",
      //search
      'Shop by Department': 'التسوق حسب الأقسام',
      "I'm Shopping for...": '... أنا أتسوق ل ',
      'Search': "يبحث",
      'No product found': 'لم يتم العثور على منتج ',
      "See all results": "مشاهدة كل النتائج",
      "Results for": "نتائج",
      //Language
      "English": "إنجليزي",
      "Arabic": "عربي",
      //mini cart
      " Item Total:": ":مجموع الاشياء",
      " View Cart": "عرض عربة التسوق",
      " No products in cart": "لا توجد منتجات في سلة التسوق",
      //account quick links
      "Account Information": "معلومات الحساب",
      "Notifications": "إشعارات",
      "Invoices": "الفواتير",
      "Address": "تبوك",
      "Recent Viewed Product": "المنتج الذي تم عرضه مؤخرًا",
      "Wishlist": "قائمة الرغبات",
      "Logout": "تسجيل خروج",
      "Register": "يسجل",
      "Login": " دخول "
    }, _defineProperty(_labels2, "Change Password", "غير كلمة السر"), _defineProperty(_labels2, "Orders", "ترتيب"), _defineProperty(_labels2, "logout successfully", "تسجيل الخروج بنجاح"), _defineProperty(_labels2, "Verify With Otp", "تحقق مع Otp"), _defineProperty(_labels2, "Verify Otp", "تحقق من Otp"), _defineProperty(_labels2, "View All", "مشاهدة الكل"), _defineProperty(_labels2, ' % off', ' ٪ إيقاف '), _defineProperty(_labels2, "Free Delivery", "توصيل مجاني"), _defineProperty(_labels2, "For all oders over", "لجميع الطلبات التي تزيد عن دولارًا"), _defineProperty(_labels2, "7 Days Return", "90 يوم للإرجاع"), _defineProperty(_labels2, "If goods have problems", "إذا كانت البضائع بها مشاكل"), _defineProperty(_labels2, "Secure Payment", "دفع امن"), _defineProperty(_labels2, "100% secure payment", "100٪ دفع آمن"), _defineProperty(_labels2, "24/7 Support", "24/7 الدعم"), _defineProperty(_labels2, "Dedicated support", "دعم مخصص"), _defineProperty(_labels2, "Brand: ", ":ماركة"), _defineProperty(_labels2, "review", " إعادة النظر "), _defineProperty(_labels2, "Add to cart", "أضف إلى السلة"), _defineProperty(_labels2, "Quantity", "كمية"), _defineProperty(_labels2, "No Stock!", "لا يوجد مخزون!"), _defineProperty(_labels2, "not eligible for return", "هذا المشروع غير مؤهل للعودة"), _defineProperty(_labels2, "eligible for return", "هذا المنتج مؤهل للإرجاع خلال 10 أيام"), _defineProperty(_labels2, "Description", " وصف"), _defineProperty(_labels2, "Specification", "تخصيص"), _defineProperty(_labels2, "Reviews", "المراجعات"), _defineProperty(_labels2, "Sort by latest", "رتيب حسب الأحدث"), _defineProperty(_labels2, "Sort by rating: low to high", "الترتيب حسب التصنيف: من الأقل إلى الأعلى"), _defineProperty(_labels2, "Sort by rating: high to low", "الترتيب حسب التصنيف: من الأعلى إلى الأقل"), _defineProperty(_labels2, "Compare Products", "قارن بين المنتجات"), _defineProperty(_labels2, "Quickview", "نظرة سريعة"), _defineProperty(_labels2, "Remove", "إزالة"), _defineProperty(_labels2, "Cart Updated Successfully", " تم تحديث سلة التسوق بنجاح "), _defineProperty(_labels2, "please add Address before place order", "يرجى إضافة العنوان قبل تقديم الطلب"), _defineProperty(_labels2, "please choose any payment option", "الرجاء اختيار أي خيار دفع"), _defineProperty(_labels2, "Added to cart", "تمت الإضافة إلى عربة التسوق"), _defineProperty(_labels2, "Contact us", "اتصل بنا"), _defineProperty(_labels2, "Call us 24/7", "اتصل بنا 24/7"), _defineProperty(_labels2, "+97 4354 6020", "+97 4354 6020"), _defineProperty(_labels2, "office no:102,", "رقم المكتب: 102"), _defineProperty(_labels2, "Al Rostamani Building,", "بناية الرستماني ،"), _defineProperty(_labels2, "Khalid Bin Al Waleed Rd,", "خالد بين أل وليد رد,"), _defineProperty(_labels2, "Bur Dubai ,Dubai", "بر دبي ، دبي"), _defineProperty(_labels2, "UAE.United Arab Emirates", "الإمارات العربية المتحدة"), _defineProperty(_labels2, "Quick links", "روابط سريعة"), _defineProperty(_labels2, "Policy", "سياسة"), _defineProperty(_labels2, "Term & Condition", "الشروط و الأحكام "), _defineProperty(_labels2, "Shipping", "شحن"), _defineProperty(_labels2, "Return", "يعود"), _defineProperty(_labels2, "FAQs", "أسئلة وأجوبة"), _defineProperty(_labels2, "Company", "شركة"), _defineProperty(_labels2, "About Us", "معلومات عنا"), _defineProperty(_labels2, "Contact", "اتصال"), _defineProperty(_labels2, "2022 Zainbay. All Rights Reserved", "2022 زينباي. كل الحقوق محفوظة"), _defineProperty(_labels2, "We Using Safe Payment For:", "نحن نستخدم الدفع الآمن من أجل:"), _defineProperty(_labels2, "Address", "تبوك"), _defineProperty(_labels2, "Change Password", "غير كلمة السر"), _defineProperty(_labels2, "Orders", "الطلب"), _defineProperty(_labels2, "Categories", "فئات"), _defineProperty(_labels2, "By Brands", "حسب الماركات"), _defineProperty(_labels2, "By Price", "حسب السعر"), _defineProperty(_labels2, "By", "بواسطة"), _defineProperty(_labels2, "Sort by latest", "ترتيب حسب الأحدث"), _defineProperty(_labels2, "Sort by price: low to high", "الترتيب حسب السعر: من الأقل إلى الأعلى"), _defineProperty(_labels2, "Sort by most rating", "ترتيب حسب الأكثر تصنيفا"), _defineProperty(_labels2, "Sort by price: high to low", "الترتيب حسب السعر: من الأعلى إلى الأقل"), _defineProperty(_labels2, "Products found", "تم العثور على المنتجات"), _defineProperty(_labels2, "Filter By", "مصنف بواسطة"), _defineProperty(_labels2, "Apply", "يتقدم"), _defineProperty(_labels2, "clear", "صافي"), _labels2);
  }

  return labels;
}