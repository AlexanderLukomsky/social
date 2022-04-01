type PostItemType = {
    message: string
}
export const PostItem = (props: PostItemType) => {
    console.log('PostItem render');
    return (
        <div>
            {props.message}
        </div>
    )
}