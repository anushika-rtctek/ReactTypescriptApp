type NameListProps = {
    names: {
        first: string,
        last: string
    }[]
}

export const NameList = (props: NameListProps) => {
    return (
        <div>
            {props.names.map(name => (
                <div key={name.first}>{name.first} {name.last}</div>
            ))}
        </div>
    )
}