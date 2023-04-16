const url = "mongodb+srv://admin:admin@cluster0.0oysm.mongodb.net/user?retryWrites=true&w=majority"
const db="users"
const user="user"

export const DATABASE={
    url,
    db,
    collections:{
        users:user
    }
}