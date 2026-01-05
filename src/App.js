import 'bootstrap/dist/css/bootstrap.min.css';
import image from "./images/jungkook.jpg";

function App() {
  let profile_name = "Jeon Jung-kook (JK)";
  let descr = `Jungkook (Jeon Jung-kook) is a globally famous South Korean singer, songwriter, and dancer, best known as the youngest member (maknae) of the record-breaking K-pop group BTS. Nicknamed the "Golden Maknae" for excelling at almost everything, he's a main vocalist and dancer, contributing to BTS's music and achieving massive solo success with hits like "Seven" and "3D", solidifying his status as a major global pop star.`;

  // Dark Mode Chic styles
  const cardStyle = {
    border: "2px solid #636e72",        // soft gray border
    padding: "20px",
    backgroundColor: "#2d3436",         // charcoal gray background
    borderRadius: "12px",
    width: "500px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.5)", // deeper shadow for dark mode
    textAlign: "center",
    color: "#dfe6e9"                    // light gray text for readability
  };

  const headStyle = {
    color:"#ecf0f1",                   // aqua teal heading
    fontStyle: "italic",
    textTransform: "uppercase",
    marginBottom: "15px",
    marginTop: "10px"
  };

  const imageStyle = {
    width: "250px",
    borderRadius: "50%",                // circular profile image
    marginBottom: "15px",
    border: "3px solid #ecf0f1"         // teal border around image
  };

  return (
    <div className="container d-flex justify-content-center align-items-center p-4 ">
      <div className="card" style={cardStyle}>
        <div className="card-body">
          <h1 style={headStyle}>{profile_name}</h1>
          <img src={image} alt="Jung Kook" style={imageStyle} />
          <p className="mt-3">{descr}</p>
          <img
            src="https://www.udiscovermusic.com/wp-content/uploads/2023/09/bts-jung-kook-3d-video.jpg"
            alt="JK performance"
            className="img-fluid mt-3 rounded"
            style ={{height:"200px"}}
          />
        </div>
      </div>
    </div>
  );
}

export default App;