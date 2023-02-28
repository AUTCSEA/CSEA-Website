import Pubquiz from "../../../assets/events/pub-quiz.jpg";

export default [
  {
    title: "O'Week AUT Clubs Fair",
    date: "March 2nd, 2023", // Empty string defaults to TBA (i.e to be announced)
    day: "2", // Empty string defaults to TBA (i.e to be announced)
    month: "Mar", // Empty string defaults to TBA (i.e to be announced)
    imgPath: "", // Empty string defaults to CSEA logo
    postURL: "https://www.facebook.com/photo?fbid=886779965713131&set=a.780276319696830", // Show more button will be hidden if empty or no date is provided
  },
  {
    title: "Pub Quiz",
    date: "", // Empty string defaults to TBA (i.e to be announced)
    day: "", // Empty string defaults to TBA (i.e to be announced)
    month: "", // Empty string defaults to TBA (i.e to be announced)
    imgPath: Pubquiz, // Empty string defaults to CSEA logo
    postURL: "", // Show more button will be hidden if empty or no date is provided
  },
];
