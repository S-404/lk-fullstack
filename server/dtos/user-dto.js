module.exports = class UserDto {
    id
    userId
    username

    constructor(model) {
        this.id = model.id
        this.userId = model.id
        this.username = model.username
    }
}

