import React from 'react'

const page = async ({
    params,
}: {
    params: Promise<{ booking: string }>
}) => {
    const booking = (await params).booking
    return (
        <div>
            {booking}
        </div>
    )
}

export default page
