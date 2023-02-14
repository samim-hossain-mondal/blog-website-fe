const data = [
  {
    "date": "2nd Januray, 2018",
    "readingTime": "2 mins",
    "title": "The future of abstract art and the culture ...",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 10,
    "liked": false,
    "image": "abstract.png"
  },
  {
    "date": "31st Januray, 2018",
    "readingTime": "1 min",
    "title": "How painting outdoors can transform your ",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 1,
    "liked": true,
    "image": "outdoor.png"
  },
  {
    "date": "20th March, 2018",
    "readingTime": "2 mins",
    "title": "10 young painters you need to know",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 15,
    "liked": false,
    "image": "young-painters.png"
  },
  {
    "date": "22nd June, 2018",
    "readingTime": "5 mins",
    "title": "Tips for creating the perfect art",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 11,
    "liked": false,
    "image": "perfect-art.png"
  },
  {
    "date": "4th Feburary, 2019",
    "readingTime": "9 mins",
    "title": "Stay inspired: top artists blog ...",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 45,
    "liked": true,
    "image": "inspired.png"
  },
  {
    "date": "10th Januray, 2019",
    "readingTime": "2 mins",
    "title": "5 reasons why everyone should try an...",
    "description": "Create a blog post subtitle that summarizes your post in a few short, punchy sentences and entices your...",
    "claps": 11,
    "liked": false,
    "image": "reason.png"
  }
]

function cardDatas(data) {
  return (
    "<div class=\"card\">" + data.map(item =>
      `<div class="card-blog">
        <img src="images/${item.image}"/> 
        <div class="container">
          <div class="date-time">
            <h> ${item.date} </h> 
            <h> ${item.readingTime} </h> 
          </div>
          <div class="content-head">
            <h> ${item.title} </h>
          </div>
          <div class="content-body">
            <h> ${item.description} </h> 
          </div>
          <div> 
            <hr /> 
            <div class="card-foot">
              <div class="clap"> 
                <img class="icons" src="icons/clapping.svg" /> 
                <h>${item.claps}</h>
              </div>
              <img class="icons" src="icons/heart-black.svg" />
            </div>
          </div>
        </div>
      </div>`).join('') +
    "</div>"
  );
}