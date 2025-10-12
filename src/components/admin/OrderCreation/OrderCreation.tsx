'use client'

const OrderCreation = ({ enquiry }: OrderCreationInputType) => {
    return (
        <div className='w-full flex flex-col'>
            {enquiry?.id}
        </div>
    )
}
type OrderCreationInputType = {
    enquiry: EnquiryType | null
}
export type EnquiryType = {
    id: string,
    userId: string,
    session: string,
    type: string,
    status: string,
    postscript: string,
    isValid: boolean,
    created: string,
    price: number,
    appointments: string[],
    products: string[],
}
export default OrderCreation