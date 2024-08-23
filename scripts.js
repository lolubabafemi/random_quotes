
let quotes = [`"The greatest glory in living lies not in never falling, but in rising every time we fall."<br><br>-Nelson Mandela`,
  `"The way to get started is to quit talking and begin doing."<br><br>- Walt Disney`,
  `"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma - which is living with the results of other people's thinking."<br><br>- Steve Jobs`,
  `"The future belongs to those who believe in the beauty of their dreams.'<br><br>- Eleanor Roosevelt`,
  `"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough."<br><br>- Oprah Winfrey`,
  `"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success."<br><br> - James Cameron`,
  `"You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one."<br><br>- John Lennon`,
  `"Spread love everywhere you go. Let no one ever come to you without leaving happier."<br><br>- Mother Teresa`,
  `"Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that."<br><br> - Martin Luther King Jr.`,
  `"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart."<br><br> - Helen Keller`,
  `"It is during our darkest moments that we must focus to see the light."<br><br>- Aristotle`,
  `"Do not go where the path may lead, go instead where there is no path and leave a trail."<br><br>- Ralph Waldo Emerson`,
  `"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose."<br><br>- Dr. Seuss`,
  `“If life were predictable, it would cease to be life and be without flavor.” <br><br>- Eleanor Roosevelt`,
  ` “In the end, it's not the years in your life that count. It's the life in your years.”<br><br>- Abraham Lincoln`,
  `“You will face many defeats in life, but never let yourself be defeated.”<br><br>- Maya Angelou`,
  `“Never let the fear of striking out keep you from playing the game.”<br><br>- Babe Ruth`,
  `“In this life, we cannot do great things. We can only do small things with great love.”<br><br>- Mother Teresa`,
  `“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”<br><br>- John Lennon`,
  `“The greatest glory in living lies not in never falling, but in rising every time we fall.”<br><br>- Nelson Mandela`]

function getQuotes() {
  document.getElementById('showQuotes').innerHTML = `<h1>${quotes[Math.floor(Math.random() * quotes.length)]}</h1>`
}