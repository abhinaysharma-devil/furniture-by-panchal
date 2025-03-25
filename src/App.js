// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import './App.css';
import { Header } from './component/navbar'
import { Body } from './component/body'
import { Footer } from './component/footer'
import { AboutUS } from './component/aboutUs'
import { ContactUs } from './component/contactUs'
import { ServiceDetail } from './component/serviceDetail'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { load } from './config/config';

// load();

// function main(bucketName = 'syn-ananda-resort-187-bucket-dev') {
// 	// [START storage_get_bucket_metadata]
// 	// Imports the Google Cloud client library
// 	const {Storage} = require('@google-cloud/storage');
  
// 	// Creates a client
// 	const storage = new Storage();
  
// 	async function getBucketMetadata() {
// 	  /**
// 	   * TODO(developer): Uncomment the following lines before running the sample.
// 	   */
// 	  // The ID of your GCS bucket
// 	  // const bucketName = 'your-unique-bucket-name';
  
// 	  // Get Bucket Metadata
// 	  const [metadata] = await storage.bucket(bucketName).getMetadata();
  
// 	  console.log("Bucket ====>");
// 	  console.log(JSON.stringify(metadata, null, 2));
// 	}
// 	// [END storage_get_bucket_metadata]
// 	getBucketMetadata().catch(console.error);
//   }


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Header /><Body /><AboutUS /><Footer /></>} />
          {/* <Route path="/" element={<><Header /><Particles /></>} /> */}
          <Route path="contact-us" element={<><Header /><ContactUs /><Footer /></>}/>
          <Route path="/services/:title" element={<><Header /><ServiceDetail /><Footer /></>}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
