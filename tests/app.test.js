const app=require("../app")
const request=require('supertest')

describe("GET /api/users", ()=>{
    test("returns an array of user objects and status 200", () => {
        return request(app)
        .get('/api/users')
        .expect(200)
    })
})