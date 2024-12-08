export const Title = ({ message, id }) => {
    return (
        <>
            <h1 className="title" id={id}>
                {message}
            </h1>
        </>
    );
};
