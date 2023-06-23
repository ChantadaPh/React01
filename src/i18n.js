import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  th: {
    translation: {
      "TH": "ไทย",
      "EN": "อังกฤษ",
      "Test 1": "แบบทดสอบที่ 1",
      "Layout & Style": "การจัดหน้าเว็บ",
      "Test 2": "แบบทดสอบที่ 2",
      "Form & Table": "การจัดหน้าฟอร์ม",
      "Main": "หน้าหลัก",

      "Prefix": "คำนำหน้า",
      "Mr": "นาย",
      "Ms": "นาง",
      "Miss": "นางสาว",
      "Name": "ชื่อ",
      "Lastname": "นามสกุล",
      "Birthday": "วันเกิด",
      "Nationality": "สัญชาติ",
      "Thai": "ไทย",
      "Identification number": "เลขบัตรประชาชน",
      "Sex": "เพศ",
      "Male": "ชาย",
      "Female": "หญิง",
      "None": "ไม่ระบุ",
      "Phone number": "หมายเลขโทรศัพท์มือถือ",
      "Passport": "หนังสือเดินทาง",
      "Expect salary": "เงินเดือนที่คาดหวัง",
      "Clear": "ล้างข้อมูล",
      "Add": "ส่งข้อมูล",
      "Manage": "จัดการ",

      "Move shape": "เลื่อนรูปแบบ",
      "Move position": "เปลี่ยนตำแหน่ง",
    }
  },
  en: {
    translation: {
      "TH": "Thai",
      "EN": "English",
      "Test 1": "Test 1",
      "Layout & Style": "Layout & Style",
      "Test 2": "Test 2",
      "Form & Table": "Form & Table",
      "Main": "Main",

      "Prefix": "Prefix",
      "Mr": "Mr",
      "Ms": "Ms",
      "Miss": "Miss",
      "Name": "Name",
      "Lastname": "Lastname",
      "Birthday": "Birthday",
      "Nationality": "Nationality",
      "Thai": "Thai",
      "Identification number": "Identification number",
      "Sex": "Sex",
      "Male": "Male",
      "Female": "Female",
      "None": "None",
      "Phone number": "Phone Number",
      "Passport": "Passport",
      "Expect salary": "Expect Salary",
      "Clear": "Clear",
      "Add": "Add",
      "Manage": "Manage",

      "Move shape": "Move shape",
      "Move position": "Move position",
    }
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "th", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;