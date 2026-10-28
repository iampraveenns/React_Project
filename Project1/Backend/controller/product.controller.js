export const getAllProducts = async (req, res) => {
    try {
        res.send("This is Get All Product API!")
    } catch (error) {
        console.log(`Error in getAllProducts Controller ${error}`)
        res.status(500).json({error: "Internal Server Error"})
    }
}