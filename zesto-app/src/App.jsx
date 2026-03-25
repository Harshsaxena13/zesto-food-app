import ContentBody from "./Components/ContentBody";
import FooterBody from "./Components/FooterBody";

import HeaderBody from "./Components/HeaderBody";
// import Restrauent from "./Components/Restrauent";

// function App() {
//   const props = {
//     img_URl:
//       "https://img.freepik.com/free-photo/pizza-pizza-filled-with-tomatoes-salami-olives_140725-1200.jpg",
//     rest_name: "biggies pizza",
//     Rating: "4.5",
//     cusines: "italian,Indian,chineese",
//   };

//   function fn(val) {
//     return <Restrauent {...props} />;
//   }

//   return <div>{Restrauent.map(fn)}</div>;
// }

// export default App;
function App() {
  return (
    <div>
      <HeaderBody />
      <ContentBody />
      <FooterBody />
    </div>
  );
}
export default App;
