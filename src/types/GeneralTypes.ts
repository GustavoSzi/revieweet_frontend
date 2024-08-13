type PaginatedResults<T> = {
    content: T[],
    totalPages: number
    totalElements: number
    size: number
    number: number
    isFirst: boolean
    isLast: boolean
}