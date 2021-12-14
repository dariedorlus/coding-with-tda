
function makeBurger1() {
    return getBeef()
        .then(beef => cookBeef(beef))
        .then(patty => getBuns(patty))
        .then((buns, patty) => putBeefBetweenBuns(buns, patty))
        .catch(err => console.log(err))
}

makeBurger1().then(burger => serve(burger))

const makeBurger2 = async () => {
    try {

        const beef = await getBeef()
        const patty = await cookBeef(beef)
        const buns = await getBuns(patty)
        const burger = await putBeefBetweenBuns(buns, patty)

        return burger

    } catch (error) {
        console.log()
    }
    return null
}

const prom = new Promise()