type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading Data...'
    }else if(props.status === 'success'){
        message = 'Data fetched successfully'
    }else if(props.status === 'error'){
        message = 'Error fetchig data'
    }
    return (
        <h2>{message}</h2>
    )
}