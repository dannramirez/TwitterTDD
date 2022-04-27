class User {

    constructor(id, userName, name, bio) {
        this.id = id;
        this.userName = userName;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.lastUpdated = new Date();
    }

    get getuserName() {
        return this.userName;
    }

    get getname() {
        return this.name;
    }

    get getbio() {
        return this.bio;
    }

    get getdateCreated() {
        return this.dateCreated;
    }

    get getlastUpdated() {
        return this.lastUpdated;
    }

    set setUsername(newUsername) {
        this.username = newUsername
    }

    set setBio(newBio) {
        this.bio = newBio
    }


}

module.exports = User;