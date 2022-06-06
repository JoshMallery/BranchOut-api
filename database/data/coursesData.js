let coursesData = [{
  author: 'Whitney',
  title: 'How pick the right pots and pans',
  overview: 'We will discuss what makes a pan "good" and what pans I recomend',
  lessons: [{lesson_title: 'What is a Sauté Pan', lesson_content: "A saute pan is a flat-bottomed pan used for frying, searing, and browning foods. It is typically 20 to 30 cm in diameter with relatively low sides that flare outwards, a long handle, and no lid. Larger pans may have a small grab handle opposite the main handle"},
            {lesson_title: 'What is a Fry Pan / Skillet', lesson_content: "A frying pan, frypan, or skillet is a flat-bottomed pan used for frying, searing, and browning foods. It is typically 20 to 30 cm in diameter with relatively low sides that flare outwards, a long handle, and no lid. Larger pans may have a small grab handle opposite the main handle."},
            {lesson_title: 'Sauce Pan', lesson_content: "A saucepan is a piece of cookware that functions as a small, deep pot for cooking liquids on a stovetop. This type of pan is deeper than a standard sauté pan or frying pan, but shallower than a stockpot. A saucepan has a flat bottom and steep sides with straight edges like a pot, and a long handle like a pan."},
            {lesson_title: 'Stock Pot', lesson_content: "The Stockpot is a large, deep pot with a flat bottom. It is used to cook liquid foods that do not need to be extremely close to the heat source. Stockpots let you sauté or brown, and then add liquids when making stocks, soups, or stews. Their tall profiles are great for keeping pasta submerged during boiling. This particular pot comes in a variety of sizes and it's smart to keep in mind that having multiple sizes comes in handy when one has to cook for either a small or large group."},
           ]
},
{
  author: 'Tyler',
  title: 'How to tie your shoes',
  overview: 'This course will let you walk with confidence knowing that your shoes will remain on your feet',
  lessons: [{lesson_title: 'Step One', lesson_content: 'cross the two shoe laces over so it looks like an x.'},
            {lesson_title: 'Step Two', lesson_content: 'You will want to loop one lace under the other and pull on both end so its tight.'},
            {lesson_title: 'Step Three', lesson_content: 'Next your gonna wanna make one hoop so it kinda looks like a bunny ear but leave one lace undone.'},
            {lesson_title: 'Step Four', lesson_content: 'After you have made a hoop and left one lace undone you are going to want to wrap the lace that you had undone around the hoop.'},
            {lesson_title: 'Step Five', lesson_content: 'After you have wrapped the undone lace around the hoop your gonna want to put it threw the little opening you are going to make with the undone lace and pull it threw so it looks like you have to loops.'},
            {lesson_title: 'Step Six', lesson_content: 'Walk with confidence! You now know how to tie your shoes'},
            ]
},
{
  author: 'Josh',
  title: 'How to create a React app and connect it with a GitHub repo',
  overview: 'Through out these lessons you will be learning the basic files needed to create a react app and link it to our GitHub Repository',
  lessons: [{lesson_title: 'Create React app', lesson_content: 'In your CLI navigate to a directory that you would like your app to live in. Once there enter $npm create-react-app <appName>.'},
            {lesson_title: 'Enter your React app', lesson_content: 'Once the React app is created enter the directory created by entering cd <appName> into your CLI.'},
            {lesson_title: 'Create GitHub repo to link app to', lesson_content: 'On your GitHub account create a new repository that matches the name of your app'},
            {lesson_title: 'Link your app to GitHub', lesson_content: 'In your CLI enter the following commands one at a time $git remote add origin git@github.com:<GH userName>/<repo name>.git $git branch -M main $git push -u origin main.'},
            {lesson_title: 'You now have a code repo on GitHub', lesson_content: 'You now have a repo hosted on github that you can eddit and update from your local machine. HAPPY HACKING =)'},
            ]
}]
module.exports = coursesData;
