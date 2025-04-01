const articles = [
    {
      id: 1,
      title: 'Jak dbać o zdrowie psa w zimie?',
      excerpt: 'Dowiedz się, jak zapewnić swojemu psu odpowiednią opiekę podczas zimowych miesięcy.',
      url: '/blog/jak-dbac-o-zdrowie-psa-w-zimie',
    },
    {
      id: 2,
      title: 'Wybór odpowiedniej karmy dla kota',
      excerpt: 'Poradnik dotyczący wyboru najlepszego pożywienia dla Twojego kota.',
      url: '/blog/wybor-odpowiedniej-karmy-dla-kota',
    },
    {
      id: 3,
      title: '5 najczęstszych chorób u psów',
      excerpt: 'Poznaj najczęstsze schorzenia psów i jak im zapobiegać.',
      url: '/blog/5-najczestszych-chorob-u-psow',
    },
  ];
  
  const videos = [
    {
      id: 1,
      title: 'Genialne pomysły dla właścicieli zwierząt',
      url: 'https://www.youtube.com/watch?v=8Kmf5MhXyHk',
    },
    {
      id: 2,
      title: 'Niezbędne triki dla psa! Bezcenne gadżety dla sprytnych opiekunów',
      url: 'https://www.youtube.com/watch?v=ytLGBXnmW7w',
    },
    {
      id: 3,
      title: 'Jak lepiej zrozumieć swojego kota',
      url: 'https://www.youtube.com/watch?v=MZDFV4UdCAI',
    },
  ];
  
  export const Blog = () => {
    return (
      <div>
        <section>
          <h2>Blog/Porady dla właścicieli zwierząt</h2>
          <div>
            {articles.map(({ id, title, excerpt, url }) => (
              <article key={id}>
                <h3>{title}</h3>
                <p>{excerpt}</p>
                <a href={url}>Czytaj więcej</a>
              </article>
            ))}
          </div>
        </section>
        <section>
          <h2>Poradniki Wideo</h2>
          <div>
            {videos.map(({ id, title, url }) => (
              <div key={id}>
                <h3>{title}</h3>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  Obejrzyj wideo
                </a>
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  };
  