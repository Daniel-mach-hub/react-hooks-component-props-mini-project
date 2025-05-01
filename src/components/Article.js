function Article({ title, date = "January 1, 1970", preview, minutes }) {
  const getReadTime = (min) => {
    const emoji = min < 30 ? "☕️" : "🍱";
    const count = min < 30 ? Math.ceil(min / 5) : Math.ceil(min / 10);
    return emoji.repeat(count) + ` ${min} min read`;
  };

  return (
    <article>
      <h3>{title}</h3>
      <small>{date}</small>
      <p>{getReadTime(minutes)}</p>
      <p>{preview}</p>
    </article>
  );
}
export default Article;
