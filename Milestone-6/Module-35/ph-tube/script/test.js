function getTime(time) {
  // get hours and rest seconds
  const hour = parseInt(time / 3600);
  let remainingSecond = time % 3600;
  let minute = parseInt(remainingSecond % 60);
  remainingSecond = remainingSecond % 60;
  return `${hour}hour ${minute} minutes ${remainingSecond} second ago`;
}

getTime(4320);

// demo object
const cardDemo = {
  category_id: "1003",
  video_id: "aaac",
  thumbnail: "https://i.ibb.co/NTncwqH/luahg-at-pain.jpg",
  title: "Laugh at My Pain",
  authors: [
    {
      profile_picture: "https://i.ibb.co/XVHM7NP/kevin.jpg",
      profile_name: "Kevin Hart",
      verified: false,
    },
  ],
  others: {
    views: "1.1K",
    posted_date: "13885",
  },
  description:
    "Comedian Kevin Hart brings his unique brand of humor to life in 'Laugh at My Pain.' With 1.1K views, this show offers a hilarious and candid look into Kevin's personal stories, struggles, and triumphs. It's a laugh-out-loud experience filled with sharp wit, clever insights, and a relatable charm that keeps audiences coming back for more.",
};
