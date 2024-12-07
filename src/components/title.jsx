export const Title = ({ message }) => {
    console.log("msg", message);
    return (
        <>
            <h1 id="title">
                {message}
            </h1>
        </>
    );
};
