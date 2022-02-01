
module.exports = async (req, res, params, base) => {
    const verification = await base.findOne({
        where: params
    })
        .then(answer => answer !== null)
        .then(bool => bool);
    console.log(verification)
    if(verification === true) return false
    else return true
}