/*

``
- စာ အရှည်ကြီးတွေရေးတဲ့ အခါ "" တို့ '' တို့နဲ့ ရေးရင် အဆင်မပြေ။  string တွေလိုက်ပေါင်းပေးနေရမည်။
    `` ဒီကောင်နဲံရေးမှ အဆင်ပြေ။ ကြိုက်သလောက်ရှည်လို့ရ။

${}
-  variables တွေ js expression တွေ ကို  string ထဲ ထည့်ချင်တဲ့ အခါ 
    ${} ဒီကောင်ကို သုံးပြီးထည့်ပေးရတယ်။

 ပြီးရင် ${} သုံးပြီး variables တွေကို string ထဲထည့်တဲ့ အခါ `` ဒီကောင်ကိုပဲသုံးရမယ်။ မဟုတ်ရင် ပြန်ပေါင်းပေးနေရဦးမယ်။

 အောက်မှာကြည့်ကြည့်။
 */


// ``
const text = ` Biology is the study of livings.
Biology is the study of living things.
Biology is the study of livings. 
Biology is the study of living things.`
console.log (text)

// ${}
const num1 = 4;
const num2 = 6;
const text2 = ` I  bought ${num1 + num2} apples`

console.log (text2)

const bodyTag = document.getElementsByClassName("bodyTag")[0];
 bodyTag.innerHTML = `
    <h1>Template literals</h1>
    <div>
        <div>
            <span>
             Backtick နှင့်  dollor sign  တို့သည် အရေးပါ သော Template Literals များဖြစ်ကြသည်။
            </span>
        </div>
    </div>
 `


