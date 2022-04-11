

export type UserType = {
    id: number
    name: string
    status: string
    photos: PhotosType
    followed: boolean
}
export type PhotosType = {
    small: string | null
    large: string | null
}