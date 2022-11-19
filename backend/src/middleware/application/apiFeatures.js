export default class APIFeatures {
    constructor(query, queryString) {
        this.query = query;
        this.queryString = queryString;
    }

    sort() {
        if (this.queryString.orderBy) {
            const fields = this.queryString.orderBy.split(" ");
            this.query =  this.query.orderBy(fields[0], fields[1]);
            return this;
        } else {
            this.query = this.query.orderBy("createdAt", "desc");
            return this;
        }
    }

    paginate () {
        const page = parseInt(this.queryString.page) || 1;
        const limit = parseInt(this.queryString.limit) || 10;
        const skip = (page-1) * limit;
        this.query = this.query.limit(limit).offset(skip);     
        return this;   
    }
}