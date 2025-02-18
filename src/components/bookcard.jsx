// write the book component code here
const BookCard = ({ book }) => {
    return (
        <div style={{
            border: '10px solid green',
            width: "50%",
            borderRadius:"10px",
            justifyContent:"center",
            textAlign: 'center',
            padding: '10px',
            margin: '10px',
        }}>
            <img src={book.image} alt={book.name} style={{ width: '100%', borderRadius: '5px' }} />
            <h3>{book.name}</h3>
            <p>{book.genre}</p>
            <p>{book.author}</p>
        </div>
    );
};

export default BookCard;
