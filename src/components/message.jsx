export const Message = ({message, opacity}) => {
    return <>
        <p className="message" style={{opacity : opacity}}>{message}</p>
    </>
}