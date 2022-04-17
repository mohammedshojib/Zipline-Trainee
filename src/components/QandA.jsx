import React from "react";
import "../styles/QandA.css";

const QandA = () => {
  return (
    <div className="qanda">
      <h3>Difference between authorization and authentication</h3>
      <p>
        <b>Authentication </b> - <b>Authentication</b> হল আপনার পরিচয় যাচাই
        করার জন্য Usename এবং পাসওয়ার্ডের মতো credentials গুলা যাচাই করা।
        <br />
        <br />
        <b>Authorization</b> - <b>Authorization</b> হল authenticated
        ব্যবহারকারীর নির্দিষ্ট resources গুলার অ্যাক্সেস আছে কিনা তা নির্ধারণ
        করার প্রক্রিয়া। যেমন :- ডেটাবেস, ফাইল, ইনফরমেশন ইত্যাদি,
      </p>
      <h3>
        Why are you using firebase? What other options do you have to implement
        authentication?
      </h3>
      <p>
        Firebase easy to use fast and reliable also it's from google means 100%
        secure. <br />
        <span>
          <b>Some auth providers</b>
        </span>
        <ul>
          <li>Apple</li>
          <li>BitBucket</li>
          <li>Battle.net</li>
          <li>Passport</li>
          <li>MongoDB</li>
          <li>Auth0</li>
          <li>Heroku</li>
        </ul>
      </p>
      <h3>
        What other services does firebase provide other than authentication
      </h3>
      <p>firebase have lots of other services included authentication</p>
      <b>
        Cloud Firestore. Cloud Functions. Authentication. Hosting. Cloud
        Storage. Google Analytics. Predictions. Cloud Messaging. Dynamic Links.
        Remote Config
      </b>
    </div>
  );
};

export default QandA;
