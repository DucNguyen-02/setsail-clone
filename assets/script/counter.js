function count() {
    const counters = document.querySelectorAll('.counter-number')
    const speed = 300

    counters.forEach((counter) => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target')
            const count = +counter.innerText
            const inc = target / speed

            if (count < target) {
                counter.innerText = Math.ceil(count + inc)
                setTimeout(updateCount, 1)
            } else {
                counter.innerText = target
            }
        }

        updateCount()
    })
}