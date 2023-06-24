const filterUpdates = (json) => {
    const result = {}
    for (let key in json) {
        if (key === 'first_name') {
            result[key] = json[key]
        }
        if (key === 'last_name') {
            result[key] = json[key]
        }
        if (key === 'email') {
            result[key] = json[key]
        }
        if (key === 'region') {
            result[key] = json[key]
        }
    }
   
    return result
}
module.exports = { filterUpdates }