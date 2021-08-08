const quotes = [
  {
    quote_k:
      "과거는 아플 수 있지, 하지만 내가 보기에는 넌 과거로부터 도망치거나 아니면 배울 수 있어.",
    quote_e:
      "The past can hurt, but the way I see it, you can either run from it or learn from it.",
    title: "라이온킹",
  },
  {
    quote_k: "인생에서 예측할 수 있는 유일한 것은  예측할 수 없는 것이랍니다.",
    quote_e: "The only thing predictable about life is it's unpredictability.",
    title: "라따뚜이",
  },
  {
    quote_k: "오늘의 특별한 순간들은 내일의 추억들이야.",
    quote_e: "Today's special moments are tomorrow's memories.",
    title: "알라딘",
  },
  {
    quote_k: "한 사람의 마음은 채우는 것이 가끔은 아주 작은 것들이야.",
    quote_e:
      "Sometimes the smallest things take up the most room in your heart.",
    title: "곰돌이 푸",
  },
  {
    quote_k: "모든 것을 잃고 나서야 비로소 진정으로 감사함을 알 수 있습니다.",
    quote_e:
      "It's not until you lose everything that you can truly appreciate everything.",
    title: "미녀와 야수",
  },
  {
    quote_k:
      "삶이 너를 힘들게 할 때는 어떻게 해야 하는지 알아? 그냥 계속 헤엄치고 또 헤엄쳐!",
    quote_e:
      "When life gets you down, do you wanna know what you've gotta do? Just keep swimming, swimming and swimming!",
    title: "니모를 찾아서",
  },
  {
    quote_k:
      "안전지대 밖에서 모험을 해보세요. 보상은 그만한 가치가 있을 거예요.",
    quote_e: "Venture outside your comfort zone. The rewards are worth it.",
    title: "라푼젤",
  },
  {
    quote_k: "계속 믿는다면 당신이 소망하는 꿈이 현실이 될 거예요.",
    quote_e:
      " If you keep on believing the dream that you wish will come true.",
    title: "신데렐라",
  },
  {
    quote_k:
      "작별 인사는 절대 하지 마요. 장벽 인사는 멀리 간다는 것이고 멀리 간다는 것은 잊는다는 거니까요.",
    quote_e:
      "Never say good bye because goodbye means going away and going away means forgetting.",
    title: "피터팬",
  },
  {
    quote_k: "때로는 올바른 길이 가장 쉬운 길은 아니에요.",
    quote_e: "Sometimes the right path is not the easiest one.",
    title: "포카혼타스",
  },
];

function randomQuotes() {
  const quote = document.querySelector("#quote span:first-child");
  const title = document.querySelector("#quote span:last-child");

  const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todayQuote.quote_e;
  title.innerText = `- ${todayQuote.title} -`;
}

randomQuotes();
setInterval(randomQuotes, 5000);
