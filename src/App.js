import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Content from "./components/Content";

let articleData = [
  {
    name: "Xymple",
    author: "George Doe",
    title: "People Who Love Their Dogs",
    date: "November 2, 2017",
    img: "https://wallpaperbrowse.com/media/images/pictures-1.jpg",
    text: "Not a problem! Dogs love close contact, and respond powerfully to touch, but if a dog massage is something you’ve never thought of doing, then you’re not likely to know where to begin. Here are a few tips for giving your dog a massage."
  }, {
    name: "Poyooyo",
    author: "James Odur",
    date: "June 17, 2001",
    img: "https://i.amz.mshcdn.com/2xXpy52DS30uKJBrQm-qI1JDAbc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F454852%2Fc149fd02-3174-46f9-9b58-d7026cc5ada9.jpg",
    text: "Not a problem! Dogs love close contact, and respond powerfully to touch, but if a dog massage is something you’ve never thought of doing, then you’re not likely to know where to begin. Here are a few tips for giving your dog a massage."
  }
];

let navLinks = [
  {
    name: "Home",
    local: "http://www.google.com"
  }, {
    name: "Contact",
    local: "http://www.google.com"
  }, {
    name: "About",
    local: "http://www.google.com"
  }
];

let socialLinks = [
  {
    iconName: "facebook",
    url: "http://www.facebook.com/"
  },
  {
    iconName: "twitter",
    url: "http://www.twitter.com"
  }
]


class App extends React.Component {
  render() {
    return (<div>
      <Navbar color="white" brand="My Blog" links={navLinks}/>
      <Header/>
      <Content data={articleData}/>
      <Footer color="#007bff" social={socialLinks}/>
    </div>)
  }
}

export default App;
