
const testimonials = [
    {
      id: 1,
      name: 'Jane Doe',
      review: 'This product exceeded my expectations! Highly recommend.',
      rating: 5,
    },
    {
      id: 2,
      name: 'John Smith',
      review: 'Great quality and fast shipping. Very satisfied.',
      rating: 4,
    },
    {
      id: 3,
      name: 'Sara Lee',
      review: 'Love the design and functionality. Will purchase again.',
      rating: 5,
    },
  ];

export const Testimonials = () => {

    return(
        <div>
        <h2>Customer Testimonials</h2>
        <div>
          {testimonials.map(({ id, name, review, rating }) => (
            <div key={id}>
              <h3>{name}</h3>
              <p>Rating: {rating} stars</p>
              <p>{review}</p>
            </div>
          ))}
        </div>
      </div>
    );
}