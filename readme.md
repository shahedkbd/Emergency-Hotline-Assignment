# JavaScript DOM Questions & Answers 

## 1. Difference between getElementById, getElementsByClassName, and uerySelector / querySelectorAll

getElementById("id") → নির্দিষ্ট id দিয়ে element খুঁজে বের করে। সবসময় একটা element রিটার্ন করে।

getElementsByClassName("class") → একই class নাম থাকা একাধিক element খুঁজে আনে। এটা একটা HTMLCollection দেয়।

querySelector("css-selector") → যেকোনো CSS সিলেক্টর দিয়ে element খুঁজে বের করে। কিন্তু শুধু প্রথম element রিটার্ন করে।

querySelectorAll("css-selector") → যেকোনো CSS সিলেক্টর দিয়ে সবগুলো matching element রিটার্ন করে। এটা একটা NodeList দেয়।


## 2. How do you create and insert a new element into the DOM?

নতুন element তৈরি করতে → document.createElement("tagName")

কন্টেন্ট বসাতে → element.textContent = "Something" অথবা element.innerHTML = "<b>Text</b>"

DOM-এ ঢোকাতে → parent.appendChild(newElement) অথবা parent.insertBefore(newElement, referenceElement)

## 3. What is Event Bubbling and how does it work?

Event bubbling মানে হলো কোনো child element-এ event ঘটলে সেটা প্রথমে সেই element এ কাজ করবে, তারপর ধাপে ধাপে তার parent, grandparent হয়ে পুরো document পর্যন্ত উপরে উঠবে।

উদাহরণ: button → div → body → document

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation হলো parent element-এ event listener বসিয়ে তার child element-এর event ধরার পদ্ধতি।

এটা useful কারণ:

অনেক child element এর জন্য আলাদা আলাদা event listener বসাতে হয় না।

performance ভালো থাকে।

dynamically যোগ হওয়া নতুন element-এর eventও parent ধরতে পারে।

## 5. Difference between preventDefault() and stopPropagation()

preventDefault() → ব্রাউজারের ডিফল্ট অ্যাকশন বন্ধ করে। যেমন: form submit হলে পেজ রিফ্রেশ হওয়া আটকানো।

stopPropagation() → Event bubbling বা capturing বন্ধ করে। মানে event আর parent এ উঠবে না।




