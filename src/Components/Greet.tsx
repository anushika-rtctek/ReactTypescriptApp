type GreetProps = {
    name: string,
    msgCount: number,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) => {
    return (
        <div>
            {props.isLoggedIn ? 
            `Welcome ${props.name}. You have ${props.msgCount} messages.` : 
            `Welcome Guest`}
        </div>
    )
    
}