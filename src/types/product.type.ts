export type Price = {
    value: number;
    currency: {
        code: string;
        symbol: string;
        format: string;
    }
}
export type ShippingInfo = {
    method: {
        country: string;
        title: string;
        shipping_time: {
            value: string;
            info: string
        }
        cost: Price
    }
    lead_time: {
        value: string;
        info: string;
    }
    props: {
        ready_to_ship: boolean;
        in_stock: boolean;
        fast_dispatch: boolean;
    }
}
export type Product = {
    name: string;
    tags: string[];
    options: {
        option: {
            label: string;
            price: Price
            old_price: Price
        }
    },
    discount: {
        amount: string;
        end_date: string;
    },
    gallery: { main: string }[];
    shipping: ShippingInfo
    reviews: {
        rating: number
        count: number
        total_buyers: number
    }
}