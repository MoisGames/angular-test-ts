interface Data {
    data: [
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string | null,
    ]
    
}
export interface Profile {
    page: number,
    per_page: number,
    total: number,
    total_pages: number,
    data: string | number[]
}