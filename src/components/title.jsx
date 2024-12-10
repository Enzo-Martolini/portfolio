export const Title = ({ message, id, opacity }) => {
    return (
        <>
            <h1 className="title" id={id} style={{opacity : opacity}}>
                {message}
            </h1>
        </>
    );
};
