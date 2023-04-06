const articles = [
  {
    title: "Hydrogen VS Electric Cars",
    body: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    body: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    body: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const Sidebar = () => {
  return (
    <aside className="mb-12 max-w-[22rem] bg-very-dark-blue p-4 lg:mb-0 lg:flex lg:flex-col lg:justify-between lg:p-8">
      <h2 className="mb-4 text-3xl font-bold text-soft-orange lg:text-4xl">
        New
      </h2>

      <div>
        {articles.map((article, i) => {
          return (
            <div key={i}>
              <h3 className="mb-2 text-xl font-bold text-off-white">
                <a href="#" className="hover:text-soft-orange">
                  {article.title}
                </a>
              </h3>

              <p className="text-grayish-blue">{article.body}</p>

              {i !== articles.length - 1 && (
                <hr className="my-7 border-grayish-blue" />
              )}
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
