export interface Interfaces {
}

//Usage

export interface Person {
    name:string,
    email:string,
    tel:string
}

export interface Schedule {
    h: number,
    m: number,
    available?: boolean
}

//Collections
export interface BookingData {
    id?: string,
    departure: {
        date: {
            day: number,
            month: number,
            year: number
        },
        time: {
            h:number,
            m:number
        }
    },
    return:  {
        time: {
            h:number,
            m:number,
        }
    },
    crew: {
        user: Person,
        extras: Person[]
    }
}
export interface Booking {
    id?: string,
    departure: Date,
    return:  Date,
    crew: {
        user: Person,
        extras: Person[]
    }
}
export interface FireBooking extends Omit<Booking, 'departure' | 'return'> {
    departure: FirebaseTimestamp,
    return: FirebaseTimestamp
}

export interface FirebaseTimestamp {
    seconds:number,
    nanoseconds:number
}

export interface Ticket {
    //ticket data per collections
    id?:string,
    booking: string //id booking,
    validations: {
        departure: false|(Date|FirebaseTimestamp),
        return: false|(Date|FirebaseTimestamp)
    }
}

export interface TicketData {
    //data generata dal ticketService per il QR
    id:string,
    booking:Booking
}

//Auth
export interface LoginData {
    email: string,
    password: string
}