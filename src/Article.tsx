interface ArticleProps {
  image: string;
  displayNumber: number;
  title: string;
  body: string;
}

const Article: React.FC<ArticleProps> = ({
  image,
  displayNumber,
  title,
  body,
}) => {
  return (
    <article className="mb-8 flex max-w-[22rem]">
      <img src={image} className="mr-8 h-[127px] w-[100px]" alt={title} />
      <div className="flex flex-col justify-between">
        <div className="text-3xl font-bold text-grayish-blue">
          0{displayNumber}
        </div>
        <h3 className="text-lg font-bold text-very-dark-blue">
          <a href="#" className="hover:text-soft-red">
            {title}
          </a>
        </h3>
        <p className="text-dark-grayish-blue">{body}</p>
      </div>
    </article>
  );
};

export default Article;
