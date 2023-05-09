import "./App.css";
import { marked } from "marked";
import { useState } from "react";
import { mangle } from "marked-mangle";
import DOMPurify from "dompurify";

function App() {
     const [text, setText] = useState("");
     function handleChange(e) {
          setText(e.target.value);
     }
     marked.use(mangle());
     const renderChange = (text) => {
          const html = marked.parse(text);
          let __html = DOMPurify.sanitize(html);
          return { __html };
     };
     return (
          <div className="container">
               <div className="row">
                    <div className="col-sm-6">
                         <textarea
                              className="form-control"
                              rows="35"
                              onChange={handleChange}
                              value={text}
                              placeholder="let's start writing ..."
                         />
                         {/* input */}
                    </div>
                    <div className="col-sm-6">
                         <div dangerouslySetInnerHTML={renderChange(text)} />
                    </div>
               </div>
               <div className="text-center my-4">
                    Made by <a href="https://twitter.com/rahulj9a">RahulJ9A</a>{" "}
                    for <a href="https://freecodecamp.com">Freecodecamp</a>
               </div>
          </div>
     );
}

export default App;
