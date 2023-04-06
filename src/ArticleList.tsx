import Article from "./Article";

const articles = [
  {
    image: "./image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    body: "What happens when old PCs are given modern upgrades?",
  },
  {
    image: "./image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    body: "Our best picks for various needs and budgets.",
  },
  {
    image: "./image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    body: "How the pandemic has sparked fresh opportunities.",
  },
];

const ArticleList = () => {
  return (
    <div className="lg:flex lg:justify-between">
      {articles.map((article, i) => {
        return (
          <Article
            key={i}
            image={article.image}
            displayNumber={i + 1}
            title={article.title}
            body={article.body}
          />
        );
      })}
    </div>
  );
};

export default ArticleList;
